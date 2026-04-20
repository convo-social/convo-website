// @ts-nocheck
/* Home page interactive scripts — ported from legacy index.html.
   Run via useEffect on mount; all timers/observers/listeners are tracked
   and torn down on unmount so client-side navigation doesn't leak state.
   Legacy script body below is imperative JS; @ts-nocheck to keep it verbatim. */
/* eslint-disable */

export function runHomeInteractions(): () => void {
  if (typeof window === "undefined") return () => {};

  type Entry = { target: EventTarget; type: string; fn: EventListenerOrEventListenerObject; opts?: unknown };

  let mounted = true;

  const intervals: ReturnType<typeof setInterval>[] = [];
  const timeouts: ReturnType<typeof setTimeout>[] = [];
  const rafs: number[] = [];
  const observers: { disconnect: () => void }[] = [];
  const listeners: Entry[] = [];

  const origSI = window.setInterval;
  const origST = window.setTimeout;
  const origRAF = window.requestAnimationFrame;
  const origIO = window.IntersectionObserver;
  const origRO = window.ResizeObserver;
  const origAdd = EventTarget.prototype.addEventListener;
  const origDocAdd = document.addEventListener.bind(document);

  // Wrap a timer callback so it no-ops if the component has unmounted.
  // Any setTimeout/setInterval/RAF scheduled via the patched globals — including
  // those created asynchronously long after init — will silently drop if we've
  // unmounted. This keeps dsLoop's `await wait()` chain from walking dead DOM.
  const guard = <T extends (...a: unknown[]) => unknown>(fn: T | unknown): T => {
    if (typeof fn !== "function") return fn as T;
    return ((...args: unknown[]) => {
      if (!mounted) return;
      try {
        return (fn as (...a: unknown[]) => unknown)(...args);
      } catch (e) {
        if (mounted) throw e;
        console.warn("[home-interactions] suppressed post-unmount error:", e);
      }
    }) as unknown as T;
  };

  // Patch timer APIs for the component lifetime — NOT just init — so async
  // continuations (Promise → setTimeout chains) stay wrapped and tracked.
  window.setInterval = ((fn: TimerHandler, ms?: number, ...rest: unknown[]) => {
    const id = (origSI as any)(guard(fn), ms, ...rest);
    intervals.push(id);
    return id;
  }) as typeof window.setInterval;

  window.setTimeout = ((fn: TimerHandler, ms?: number, ...rest: unknown[]) => {
    const id = (origST as any)(guard(fn), ms, ...rest);
    timeouts.push(id);
    return id;
  }) as typeof window.setTimeout;

  window.requestAnimationFrame = ((cb: FrameRequestCallback) => {
    const id = origRAF(guard(cb) as FrameRequestCallback);
    rafs.push(id);
    return id;
  }) as typeof window.requestAnimationFrame;

  window.IntersectionObserver = class extends origIO {
    constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
      super(guard(cb) as IntersectionObserverCallback, opts);
      observers.push(this);
    }
  } as typeof IntersectionObserver;

  if (origRO) {
    window.ResizeObserver = class extends origRO {
      constructor(cb: ResizeObserverCallback) {
        super(guard(cb) as ResizeObserverCallback);
        observers.push(this);
      }
    } as typeof ResizeObserver;
  }

  // addEventListener / DOMContentLoaded shim are only needed during synchronous
  // init, so we restore those right after. Keeping addEventListener patched for
  // the full lifetime would trap listeners from React, Next router, analytics,
  // etc., which we don't want to remove on unmount.
  EventTarget.prototype.addEventListener = function (
    this: EventTarget,
    type: string,
    fn: EventListenerOrEventListenerObject | null,
    opts?: AddEventListenerOptions | boolean,
  ) {
    if (fn) listeners.push({ target: this, type, fn, opts });
    return origAdd.call(this, type, fn, opts);
  } as typeof EventTarget.prototype.addEventListener;

  document.addEventListener = ((type: string, fn: EventListenerOrEventListenerObject, opts?: AddEventListenerOptions | boolean) => {
    if (type === "DOMContentLoaded") {
      try {
        if (typeof fn === "function") fn(new Event("DOMContentLoaded"));
        else if (fn && typeof fn.handleEvent === "function") fn.handleEvent(new Event("DOMContentLoaded"));
      } catch (e) {
        console.error(e);
      }
      return;
    }
    return origDocAdd(type, fn, opts);
  }) as typeof document.addEventListener;

  try {
    runLegacyScripts();
  } catch (e) {
    console.error("[home-interactions] init error:", e);
  } finally {
    // Restore only the listener-capturing globals. Timer/observer patches stay
    // active for the component lifetime so async-scheduled work stays guarded.
    EventTarget.prototype.addEventListener = origAdd;
    document.addEventListener = origDocAdd;
  }

  return () => {
    mounted = false;
    intervals.forEach((id) => clearInterval(id));
    timeouts.forEach((id) => clearTimeout(id));
    rafs.forEach((id) => cancelAnimationFrame(id));
    observers.forEach((o) => {
      try {
        o.disconnect();
      } catch {}
    });
    listeners.forEach(({ target, type, fn, opts }) => {
      try {
        target.removeEventListener(type, fn as EventListener, opts as AddEventListenerOptions | boolean | undefined);
      } catch {}
    });
    // Restore the remaining globals.
    window.setInterval = origSI;
    window.setTimeout = origST;
    window.requestAnimationFrame = origRAF;
    window.IntersectionObserver = origIO;
    if (origRO) window.ResizeObserver = origRO;
  };
}

/* eslint-disable */
// @ts-nocheck
function runLegacyScripts() {

/* --- script block 0 --- */
(function() {
    var alive = true, timer = null, IDLE = 4000;
  
    // Interaction handlers
    window.dsToggleTag = function(el) { dsInteract(); el.classList.toggle('selected'); };
    
  
    function dsInteract() {
      alive = false;
      document.getElementById('ds-recruit-btn').classList.remove('pulse');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() { dsReset().then(function() { alive = true; dsLoop(); }); }, IDLE);
    }
  
    var wait = function(ms) { return new Promise(function(r) { setTimeout(r, ms); }); };
  
    function dsType(id, txt) {
      return new Promise(function(resolve) {
        var el = document.getElementById(id); el.value = ''; var i = 0;
        (function next() {
          if (!alive || i >= txt.length) return resolve();
          el.value += txt.charAt(i++);
          el.dispatchEvent(new Event('input', { bubbles: true }));
          setTimeout(next, Math.random() * 40 + 20);
        })();
      });
    }
  
    function dsReset() {
      ['ds-goal-1','ds-goal-2'].forEach(function(id) { document.getElementById(id).value = ''; });
      document.getElementById('ds-recruit-btn').classList.remove('pulse');
      return Promise.resolve();
    }
  
    async function dsSim() {
      await wait(800);
      await dsType('ds-goal-1', 'Test onboarding flow drop-offs');
      if (!alive) return;
      await wait(400);
      await dsType('ds-goal-2', 'Evaluate primary CTA clarity');
      
      if (!alive) return;
      await wait(500);
      var ids = ['ds-tag-1', 'ds-tag-4', 'ds-tag-5'];
      for (var j = 0; j < ids.length; j++) {
        if (!alive) return;
        document.getElementById(ids[j]).classList.add('selected');
        await wait(300);
      }
  
      if (!alive) return;
      await wait(600);
      document.getElementById('ds-recruit-btn').classList.add('pulse');
    }
  
    async function dsLoop() {
      while (alive) {
        await dsSim();
        if (!alive) break;
        await wait(3500);
        if (!alive) break;
        await dsReset();
        await wait(600);
      }
    }
  
    // Scale-to-fit: shrinks the whole composition uniformly for embed contexts
    var DESIGN_W = 350;

    function dsApplyScale() {
      var canvas = document.getElementById('ds-main-canvas');
      if (!canvas) return;
      var stage = canvas.querySelector('.ds-stage');
      if (!stage) return;

      var style = getComputedStyle(canvas);
      var pt = parseFloat(style.paddingTop);
      var pb = parseFloat(style.paddingBottom);
      var pl = parseFloat(style.paddingLeft);
      var pr = parseFloat(style.paddingRight);

      // Inner box — the space the composition actually has to live in
      var innerW = canvas.offsetWidth  - pl - pr;
      var innerH = canvas.offsetHeight - pt - pb;

      // Natural composition height: just the center card
      var naturalH = stage.offsetHeight;

      var scaleW = innerW > 0 ? Math.min(1, innerW / DESIGN_W) : 1;
      // Only apply height constraint when the embed has an explicit height
      var scaleH = innerH > 10 && naturalH > 0 ? Math.min(1, innerH / naturalH) : 1;

      var scale = Math.min(scaleW, scaleH);
      stage.style.transform = 'scale(' + scale + ') translateX(95px)';

      // Ensure canvas is at least tall enough to show scaled content
      canvas.style.minHeight = (naturalH * scale + pt + pb) + 'px';
    }

    if (window.ResizeObserver) {
      new ResizeObserver(dsApplyScale).observe(document.getElementById('ds-main-canvas'));
    } else {
      window.addEventListener('resize', dsApplyScale);
    }

    // Init & Intersection Observer
    document.addEventListener('DOMContentLoaded', function() {
      var canvas = document.getElementById('ds-main-canvas');
      dsApplyScale();
      
      // Observer for scroll animation
      var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting) {
          canvas.classList.add('is-in-view');
          // Start simulation only when visible
          if(alive) dsLoop();
          observer.disconnect(); 
        }
      }, { threshold: 0.05 });

      observer.observe(canvas);
  
      // Interaction interrupts
      ['mousedown','touchstart','keydown','input','change'].forEach(function(e) {
        canvas.addEventListener(e, function(ev) { if (ev.isTrusted) dsInteract(); }, { capture: true });
      });
    });
  })();

/* --- script block 1 --- */
(function () {

      // ── Scaling ────────────────────────────────────────────────────────────
      var DESIGN_W = 600;

      function applyScale() {
        var canvas  = document.getElementById('focus-room-module');
        var wrapper = canvas && canvas.querySelector('.fg-wrapper');
        if (!canvas || !wrapper) return;
        canvas.classList.toggle('is-mobile-view', window.innerWidth <= 767);
        wrapper.style.transform = 'none';
      }

      var canvas = document.getElementById('focus-room-module');
      if (canvas) {
        if (window.ResizeObserver) {
          new ResizeObserver(applyScale).observe(canvas);
        } else {
          window.addEventListener('resize', applyScale);
        }
      }

      // ── Data model ─────────────────────────────────────────────────────────
      // Each action drives the AI bar AND which card shows with what content.
      // cardIndex: 0 = Quote (card-1), 1 = Key Insight (card-2), 2 = Group Consensus (card-3)
      // state "thinking" → dots    state "speaking" → wave
      var aiActions = [
        {
          text: "Analyzing Jamie's tone of voice...", state: "thinking",
          cardIndex: 1,
          card: { type: "text", body: "Voice pitch rose 12% during the packaging discussion." }
        },
        {
          text: "You hesitated there — what held you back?", state: "speaking",
          cardIndex: 0,
          card: { type: "insight", body: "\u201CThe price feels steep for something I can\u2019t physically touch.\u201D" }
        },
        {
          text: "Detecting sentiment shift in the group...", state: "thinking",
          cardIndex: 2,
          card: { type: "progress", body: "Mixed reaction to the flavor profile reveal.", progress: 54 }
        },
        {
          text: "Would you actually pay that price point?", state: "speaking",
          cardIndex: 0,
          card: { type: "insight", body: "\u201CI\u2019d pay it if there was a subscription discount.\u201D" }
        },
        {
          text: "Cross-referencing consensus patterns...", state: "thinking",
          cardIndex: 2,
          card: { type: "progress", body: "Strong alignment emerging on sustainability values.", progress: 78 }
        },
        {
          text: "What surprised you most just now?", state: "speaking",
          cardIndex: 0,

          card: { type: "insight", body: "\u201CHonestly? I didn\u2019t expect to like the texture at all.\u201D" }
        },
        {
          text: "Mapping emotional response to stimulus...", state: "thinking",
          cardIndex: 1,
          card: { type: "text", body: "Micro-pause detected before answering price questions." }
        },
        {
          text: "Tell me more about that first reaction.", state: "speaking",
          cardIndex: 0,
          card: { type: "insight", body: "\u201CMy first instinct was skepticism \u2014 then curiosity took over.\u201D" }
        },
        {
          text: "Scanning for shared decision blockers...", state: "thinking",
          cardIndex: 2,
          card: { type: "progress", body: "Uncertainty around recyclability slowing group buy-in.", progress: 41 }
        },
        {
          text: "If it shipped tomorrow, would you buy it?", state: "speaking",
          cardIndex: 0,
          card: { type: "insight", body: "\u201CProbably yes \u2014 if the reviews held up.\u201D" }
        },
      ];

      var MAX_CYCLES = 3;
      var FADE_MS    = 450; // must match CSS transition duration

      var cards = [];

      function isMobileView() {
        var canvas = document.getElementById('focus-room-module');
        return !!(canvas && canvas.classList.contains('is-mobile-view'));
      }

      function showCard(card) {
        card.style.opacity = '1';
        card.style.transform = 'translateX(-50%) translateY(0)';
      }

      function hideCard(card) {
        card.style.opacity = '0';
        card.style.transform = 'translateX(-50%) translateY(12px)';
      }

      function applyCardContent(card, data) {
        if (data.type === 'insight') {
          var el = card.querySelector('.fg-card-insight');
          if (el) el.textContent = data.body;
        } else if (data.type === 'text') {
          var el = card.querySelector('.fg-card-text');
          if (el) el.textContent = data.body;
        } else if (data.type === 'progress') {
          var el = card.querySelector('.fg-card-text');
          if (el) el.textContent = data.body;
          var fill = card.querySelector('.fg-progress-fill');
          if (fill) {
            fill.style.setProperty('--target-width', data.progress + '%');
            fill.style.animation = 'none';
            fill.getBoundingClientRect(); // force reflow to restart animation
            fill.style.animation = 'fillBar 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards';
          }
        }
      }

      // Fade all out, update content of target, fade it in
      function switchCard(action) {
        if (isMobileView()) {
          cards.forEach(function(c) { if (c) hideCard(c); });
          return;
        }
        cards.forEach(function(c) { if (c) hideCard(c); });
        setTimeout(function() {
          var card = cards[action.cardIndex];
          if (!card) return;
          applyCardContent(card, action.card);
          showCard(card);
        }, FADE_MS);
      }

      // ── Typewriter + card sync ─────────────────────────────────────────────
      function startTypewriter() {
        var textEl       = document.getElementById("ai-moderator-text");
        var barContainer = document.getElementById("ai-bar-container");
        if (!textEl || !barContainer) return;

        var actionIndex = 0, cycleCount = 0, charIndex = 0, isDeleting = false, typeSpeed = 40;

        // Seed first card before typing begins
        if (!isMobileView()) {
          switchCard(aiActions[0]);
        }

        function tick() {
          var action = aiActions[actionIndex];

          if (charIndex === 0 && !isDeleting) {
            barContainer.classList.toggle('state-speaking', action.state === 'speaking');
            barContainer.classList.toggle('state-thinking', action.state === 'thinking');
          }

          if (isDeleting) {
            textEl.textContent = action.text.substring(0, --charIndex);
            typeSpeed = 18;
          } else {
            textEl.textContent = action.text.substring(0, ++charIndex);
            typeSpeed = 38;
          }

          if (!isDeleting && charIndex === action.text.length) {
            isDeleting = true;
            typeSpeed = action.state === 'speaking' ? 3400 : 2600;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            actionIndex++;
            if (actionIndex >= aiActions.length) {
              actionIndex = 0;
              cycleCount++;
              if (cycleCount >= MAX_CYCLES) {
                // Done — gracefully hide everything
                cards.forEach(function(c) { if (c) hideCard(c); });
                return;
              }
            }
            switchCard(aiActions[actionIndex]);
            typeSpeed = 550;
          }

          setTimeout(tick, typeSpeed);
        }
        setTimeout(tick, 600);
      }

      // ── Init ───────────────────────────────────────────────────────────────
      document.addEventListener('DOMContentLoaded', function () {
        applyScale();

        // Preserve index order — cardIndex 0/1/2 maps directly to card-1/2/3
        cards = [
          document.querySelector('.card-1'),
          document.querySelector('.card-2'),
          document.querySelector('.card-3')
        ];

        var moduleCanvas = document.getElementById('focus-room-module');
        var started = false;

        var observer = new IntersectionObserver(function (entries) {
          if (entries[0].isIntersecting && !started) {
            started = true;
            startTypewriter();
          }
        }, { threshold: 0.2 });

        if (moduleCanvas) observer.observe(moduleCanvas);
      });

    })();

/* --- script block 2 --- */
document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2 
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          observer.unobserve(entry.target); 
        }
      });
    }, observerOptions);

    const canvas = document.getElementById('insight-canvas-trigger');
    if (canvas) {
      scrollObserver.observe(canvas);
    }

    // Container-based scaling - only scale the content, not the background
    function scaleToFit() {
      const container = canvas;
      if (!container) return;

      const heroCluster = container.querySelector('.hero-cluster');
      if (!heroCluster) return;

      // Calculate required width: center card (400px) + left card (250px + 6.5rem offset) + right card (135px + 3rem offset) + padding
      // Total approximate width needed: ~800px at full scale (reduced for less aggressive scaling)
      const requiredWidth = 800;
      const containerWidth = container.offsetWidth;
      const padding = 80; // Increased padding to allow more space
      const availableWidth = containerWidth - padding;
      
      // Calculate scale to fit everything horizontally
      const scale = Math.min(1, availableWidth / requiredWidth);
      
      // Apply scale, but don't go below 0.65 to maintain size
      const finalScale = Math.max(0.65, scale);
      heroCluster.style.transform = `scale(${finalScale})`;
      heroCluster.style.transformOrigin = 'center center';
    }

    // Initial scale
    scaleToFit();

    // Resize observer for container size changes
    const resizeObserver = new ResizeObserver(() => {
      scaleToFit();
    });

    if (canvas) {
      resizeObserver.observe(canvas);
    }

    // Also listen to window resize as fallback
    window.addEventListener('resize', scaleToFit);
  });

/* --- script block 3 --- */
(function() {
            var tiles = document.querySelectorAll('.sig-clip-tile');
            tiles.forEach(function(tile) {
              var video = tile.querySelector('video');
              if (!video) return;
              tile.addEventListener('mouseenter', function() {
                tiles.forEach(function(t) {
                  var v = t.querySelector('video');
                  if (v) v.pause();
                });
                var p = video.play();
                if (p && p.catch) p.catch(function(){});
              });
              tile.addEventListener('mouseleave', function() {
                video.pause();
                var center = document.querySelector('.sig-clip-tile.center video');
                if (center) { var p = center.play(); if (p && p.catch) p.catch(function(){}); }
              });
            });
          })();

/* --- script block 4 --- */
(function() {
  var t = document.getElementById('navToggle');
  var m = document.getElementById('navMobile');
  if (t && m) t.addEventListener('click', function() { m.classList.toggle('is-open'); });
})();

/* --- script block 5 --- */
const questions = [
    "Which packaging design drives intent to purchase?",
    "Signal report: Gen Z vs Millennials",
    "What themes are emerging across conversations?",
    "How are customers describing this in their own words?",
    "Which attributes matter most to buyers?"
  ];

  const slides = document.querySelectorAll('.slide');
  const ticks = document.querySelectorAll('.progress-tick');
  const questionEl = document.getElementById('question');
  const pipPersons = document.querySelectorAll('.pip-person');
  const participants = document.querySelectorAll('.participant');
  let current = 0;
  const total = slides.length;
  const duration = 5000;
  let timer;

  function goTo(next) {
    if (next === current) return;

    questionEl.style.opacity = '0';
    setTimeout(() => {
      questionEl.textContent = questions[next];
      questionEl.style.opacity = '1';
    }, 300);

    slides[current].classList.remove('active');
    void slides[next].offsetWidth;
    slides[next].classList.add('active');

    pipPersons[current].classList.remove('active');
    pipPersons[next].classList.add('active');

    participants[current].classList.remove('active');
    participants[next].classList.add('active');

    // Reset all ticks
    ticks.forEach((t, i) => {
      t.classList.remove('active', 'complete');
      if (i < next) t.classList.add('complete');
    });
    // Force reflow so the fill animation restarts
    void ticks[next].offsetWidth;
    ticks[next].classList.add('active');

    current = next;
  }

  function advance() {
    goTo((current + 1) % total);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(advance, duration);
  }

  ticks.forEach((tick, i) => {
    tick.addEventListener('click', () => {
      goTo(i);
      startTimer();
    });
  });

  startTimer();

/* --- script block 6 --- */
const plCards = document.querySelectorAll('.pl-card');
  const plPanels = document.querySelectorAll('.pl-panel');
  plCards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.card;
      plCards.forEach(c => c.classList.remove('active'));
      plPanels.forEach(p => p.classList.remove('active'));
      card.classList.add('active');
      document.querySelector('.pl-panel[data-panel="' + id + '"]').classList.add('active');
    });
  });

/* --- script block 7 --- */
(function () {
  'use strict';
  var stepItems = document.querySelectorAll('.step-item');
  var stepObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, { threshold: 0.3 });
  stepItems.forEach(function (c) { stepObserver.observe(c); });

  /* ── Card 1: Cycling Prompt ── */
  var promptEl = document.getElementById('hwPromptText');
  if (promptEl && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var prompts = [
      'Why are heavy buyers switching to the $40 competitor?',
      'Does our Gen Z messaging land outside coastal markets?',
      'Will this packaging redesign move units at shelf?',
      'Test the rebrand positioning before the board deck.',
      'Should we launch the refill program this quarter?',
      'Is the premium tier priced right for repeat buyers?',
      'What\u2019s driving churn in our highest-value segment?'
    ];
    var pIdx = 0, userEditing = false, cycleTimer;

    promptEl.addEventListener('focus', function() {
      userEditing = true;
      if (cycleTimer) clearInterval(cycleTimer);
      promptEl.classList.remove('fade-out');
    });

    function cyclePrompt() {
      if (userEditing) return;
      promptEl.classList.add('fade-out');
      setTimeout(function() {
        if (userEditing) return;
        pIdx = (pIdx + 1) % prompts.length;
        promptEl.textContent = prompts[pIdx];
        promptEl.classList.remove('fade-out');
      }, 400);
    }
    cycleTimer = setInterval(cyclePrompt, 4000);
  }
})();

/* --- script block 8 --- */
(function() {
  var driversCard = document.querySelector('[data-sig="drivers"]');
  if (!driversCard) return;
  var fills = driversCard.querySelectorAll('.sig-driver-fill');
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) {
        fills.forEach(function(f, i) {
          setTimeout(function() {
            var w = parseInt(f.getAttribute('data-w'));
            f.style.width = (w / 50 * 50) + '%';
          }, i * 100);
        });
      } else {
        fills.forEach(function(f) { f.style.width = '0'; });
      }
    });
  }, { threshold: 0.3 });
  obs.observe(driversCard);
})();

/* --- script block 9 --- */
(function() {
  var wrap = document.getElementById('casesTrack');
  var leftBtn = document.getElementById('casesLeft');
  var rightBtn = document.getElementById('casesRight');
  if (!wrap || !leftBtn || !rightBtn) return;
  function updateBtns() {
    leftBtn.disabled = wrap.scrollLeft <= 10;
    rightBtn.disabled = wrap.scrollLeft >= wrap.scrollWidth - wrap.clientWidth - 10;
  }
  leftBtn.addEventListener('click', function() {
    wrap.scrollBy({ left: -336, behavior: 'smooth' });
  });
  rightBtn.addEventListener('click', function() {
    wrap.scrollBy({ left: 336, behavior: 'smooth' });
  });
  wrap.addEventListener('scroll', updateBtns);
  updateBtns();
})();

/* --- script block 10 --- */
(function() {
  var wall = document.getElementById('ctaWall');
  if (!wall) return;
  var originalCount = parseInt(wall.dataset.originalCount || '') || wall.children.length;
  if (wall.dataset.cloned !== 'true') {
    var items = Array.from(wall.children);
    items.forEach(function(item) {
      wall.appendChild(item.cloneNode(true));
    });
    wall.dataset.cloned = 'true';
    wall.dataset.originalCount = String(originalCount);
  }

  // Hover-play logic with cycling highlight
  var allTiles = Array.from(wall.querySelectorAll('.cta-wall-tile'));
  var currentPlaying = null;
  // Start from the center of the original (first) set
  var defaultIdx = Math.floor(originalCount / 2);
  var isHovering = false;

  function activateTile(tile) {
    allTiles.forEach(function(t) {
      t.classList.remove('active-tile');
      var v = t.querySelector('video');
      if (v) v.pause();
    });
    tile.classList.add('active-tile');
    var v = tile.querySelector('video');
    if (v) { var p = v.play(); if (p && p.catch) p.catch(function(){}); currentPlaying = v; }
  }

  // Start center tile
  activateTile(allTiles[defaultIdx]);

  // Auto-cycle every 4s
  setInterval(function() {
    if (isHovering) return;
    defaultIdx = (defaultIdx + 1) % allTiles.length;
    activateTile(allTiles[defaultIdx]);
  }, 4000);

  allTiles.forEach(function(tile, idx) {
    tile.addEventListener('mouseenter', function() {
      isHovering = true;
      activateTile(tile);
    });
    tile.addEventListener('mouseleave', function() {
      isHovering = false;
      activateTile(allTiles[defaultIdx]);
    });
  });
})();

/* --- script block 11 --- */
(function() {
  var track = document.getElementById('logosTrack');
  if (!track || track.dataset.cloned === 'true') return;
  var items = Array.from(track.children);
  items.forEach(function(item) {
    track.appendChild(item.cloneNode(true));
  });
  track.dataset.cloned = 'true';
})();

/* --- script block 12 --- */
(function() {
  var techTabs = document.querySelectorAll('.tech-tab');
  var techBoxes = document.querySelectorAll('.tech-box');
  if (!techTabs.length || !techBoxes.length) return;
  techTabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var idx = parseInt(tab.getAttribute('data-tech'));
      techTabs.forEach(function(t) { t.classList.remove('active'); });
      tab.classList.add('active');
      techBoxes.forEach(function(box, i) {
        if (i === idx) {
          box.classList.add('active');
        } else {
          box.classList.remove('active');
        }
      });
    });
  });
})();

/* --- script block 13 --- */
(function() {
  var sigCards = document.querySelectorAll('.sig-card');
  if (!sigCards.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting) e.target.classList.add('in-view');
    });
  }, { threshold: 0.15 });
  sigCards.forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.1) + 's';
    obs.observe(c);
  });
})();

/* --- script block 14 --- */
(function() {
  var metricCards = document.querySelectorAll('.metric-card');
  if (!metricCards.length) return;
  var animated = {};
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(e) {
      if (e.isIntersecting && !animated[e.target.dataset.metric]) {
        animated[e.target.dataset.metric] = true;
        e.target.classList.add('in-view');
        var target = parseInt(e.target.dataset.metric);
        var counter = e.target.querySelector('.metric-count');
        var n = 0;
        var totalDuration = 1200;
        var frames = 40;
        var intervalMs = totalDuration / frames;
        var step = Math.max(1, Math.round(target / frames));
        var interval = setInterval(function() {
          n += step;
          if (n >= target) { n = target; clearInterval(interval); }
          counter.textContent = n;
        }, intervalMs);
      }
    });
  }, { threshold: 0.3 });
  metricCards.forEach(function(c, i) {
    c.style.transitionDelay = (i * 0.2) + 's';
    obs.observe(c);
  });
})();

}
