"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import styles from "./ContactForm.module.css";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/humanize-app/book";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [calendlyHref, setCalendlyHref] = useState(CALENDLY_URL);
  const [popupBlocked, setPopupBlocked] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("first-name") || "").trim();
    const lastName = String(data.get("last-name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const website = String(data.get("website") || "").trim();
    const useCase = String(data.get("use-case") || "").trim();
    const fullName = `${firstName} ${lastName}`.trim();

    track("Lead Submitted", {
      first_name: firstName,
      last_name: lastName,
      name: fullName,
      email,
      website,
      use_case: useCase,
    });

    const params = new URLSearchParams();
    if (fullName) params.set("name", fullName);
    if (email) params.set("email", email);
    const href = params.toString()
      ? `${CALENDLY_URL}?${params.toString()}`
      : CALENDLY_URL;
    setCalendlyHref(href);

    setSubmitted(true);

    const opened = window.open(href, "_blank");
    if (!opened) setPopupBlocked(true);
  }

  if (submitted) {
    return (
      <div className={styles.card}>
        <div className={styles.success}>
          <h3>Thank you!</h3>
          <p>
            We&rsquo;ve received your message and will be in touch shortly. In
            the meantime, you can{" "}
            <a href={calendlyHref} target="_blank" rel="noopener noreferrer">
              book a time directly
            </a>
            .
          </p>
          {popupBlocked && (
            <div className={styles.popupBlocked}>
              Popup blocked?{" "}
              <a href={calendlyHref} target="_blank" rel="noopener noreferrer">
                Click here to open Calendly
              </a>
              .
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <h2>Get in touch</h2>
      <p className={styles.subtitle}>
        Fill out the form and we&rsquo;ll be in touch within one business day.
      </p>

      <form className={styles.form} noValidate onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.group}>
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              placeholder="First name"
              required
            />
          </div>
          <div className={styles.group}>
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              placeholder="Last name"
              required
            />
          </div>
        </div>

        <div className={styles.group}>
          <label htmlFor="email">Business Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@company.com"
            required
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="website">Company Website</label>
          <input
            type="url"
            id="website"
            name="website"
            placeholder="https://yourcompany.com"
          />
        </div>

        <div className={styles.group}>
          <label htmlFor="use-case">Tell us about your use case</label>
          <textarea
            id="use-case"
            name="use-case"
            placeholder="What are you looking to learn from your customers?"
          />
        </div>

        <button type="submit" className={styles.submit}>
          Submit
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
