"use client";

import AnimateIn from "@/components/AnimateIn";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/company";
import { FormEvent, useState } from "react";

const recipientEmail = company.email;

const inputClass =
  "mt-1.5 w-full rounded-xl border border-green-200/80 bg-green-100/80 px-4 py-3 text-base text-green-900 shadow-sm transition-all duration-200 placeholder:text-green-800/35 focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-500/15 disabled:cursor-not-allowed disabled:opacity-60";

const labelClass =
  "block text-sm font-semibold tracking-wide text-green-800";

async function sendToGmailInbox(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  const res = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(recipientEmail)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone || "Not provided",
        subject: data.subject,
        message: data.message,
        _subject: `[Kamla Oil Contact] ${data.subject} — ${data.name}`,
        _replyto: data.email,
        _template: "table",
        _captcha: "false",
      }),
    }
  );

  const result = await res.json().catch(() => ({}));
  if (!res.ok || (result.success !== true && result.success !== "true")) {
    throw new Error("Could not deliver to Gmail");
  }
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      subject: String(formData.get("subject") ?? "General inquiry").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      await sendToGmailInbox(data);
      setSubmitted(true);
      form.reset();
    } catch {
      setError(
        `Could not send automatically. Please email us directly at ${recipientEmail}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <PageHeader
        title="Contact"
        description="Get in touch with Kamla Oil Industries"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 transition-all duration-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-green-800">
              Plant Location
            </h2>
            <p className="mt-2 leading-relaxed text-green-800/80">
              {company.plantLocation}
            </p>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-green-800 hover:text-green-800"
            >
              Get directions on Google Maps →
            </a>
          </div>
          </AnimateIn>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <AnimateIn delay={100}>
            <div>
              <h2 className="text-xl font-bold text-green-800">
                Reach us
              </h2>
              <p className="mt-2 text-sm text-green-700/70">{company.legalName}</p>
              <ul className="mt-6 space-y-4 text-green-800/75">
                <li>
                  <span className="block text-base font-medium text-green-600">
                    Email
                  </span>
                  <a
                    href={`mailto:${recipientEmail}`}
                    className="mt-1 text-green-800/75 hover:text-green-600"
                  >
                    {recipientEmail}
                  </a>
                </li>
                <li>
                  <span className="block text-base font-medium text-green-600">
                    Phone
                  </span>
                  <a
                    href={`tel:${company.phoneTel}`}
                    className="mt-1 text-green-800/75 hover:text-green-600"
                  >
                    {company.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-base font-medium text-green-600">
                    Business Hours
                  </span>
                  <span className="mt-1 block text-green-800/75">
                    {company.businessHours}
                  </span>
                  <span className="mt-1 block text-base text-green-600">
                    {company.plantHours}
                  </span>
                </li>
              </ul>
            </div>
            </AnimateIn>

            <AnimateIn delay={200}>
            <div className="relative overflow-hidden rounded-2xl border border-green-200 bg-white shadow-lg shadow-green-900/5 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-600 to-green-700 px-6 py-6 sm:px-8">
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-6 left-1/3 h-24 w-24 rounded-full bg-green-300/20"
                  aria-hidden
                />
                <p className="text-eyebrow text-green-100/90">Contact form</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-emerald-50/90">
                  Share your inquiry and our team will get back to you shortly.
                </p>
              </div>

              <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 animate-scale-in"
                    aria-hidden
                  >
                    <svg
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-green-800">
                    Message sent successfully
                  </h3>
                  <p className="mt-2 max-w-sm text-base text-green-800/75">
                    Thank you! Your message has been sent to{" "}
                    <span className="font-semibold text-green-800">
                      {recipientEmail}
                    </span>
                    . We will get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        disabled={loading}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        disabled={loading}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder={company.phone}
                        disabled={loading}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className={labelClass}>
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        disabled={loading}
                        className={`${inputClass} cursor-pointer appearance-none`}
                      >
                        <option>General inquiry</option>
                        <option>Product quote</option>
                        <option>Bulk order</option>
                        <option>Plant visit / Location</option>
                        <option>Technical support</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={loading}
                      placeholder="Tell us about your inquiry, bulk order, or plant visit request…"
                      className={`${inputClass} resize-y min-h-[140px]`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group mt-1 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-green-600 to-green-600 py-3.5 font-display text-base font-semibold tracking-wide text-white shadow-md shadow-green-600/25 transition-all duration-300 hover:scale-[1.02] hover:from-green-700 hover:to-green-700 hover:shadow-lg hover:shadow-green-600/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending your message…
                      </>
                    ) : (
                      <>
                        Send message
                        <span
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          aria-hidden
                        >
                          →
                        </span>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-green-700/70">
                    Your details are sent securely to our team inbox.
                  </p>
                </form>
              )}
              </div>
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
