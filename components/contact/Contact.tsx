"use client";

import AnimateIn from "@/components/AnimateIn";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/company";
import { siteImages } from "@/lib/site-images";
import Image from "next/image";
import { FormEvent, useState } from "react";

const recipientEmail = company.email;

const inputClass =
  "mt-2 w-full rounded-xl border border-green-200/80 bg-green-50/80 px-5 py-3.5 text-base text-green-900 shadow-sm transition-all duration-200 placeholder:text-green-800/35 focus:border-green-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-green-500/15 disabled:cursor-not-allowed disabled:opacity-60";

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
        title="Contact Us"
        description="Reach Kamla Oil Industries at our Hapur plant"
      />

      {/* Split: office image | phone, address, map */}
      <section className="border-b border-green-200 bg-white">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <AnimateIn className="relative min-h-[320px] lg:min-h-[520px]">
            <Image
              src={siteImages.contactOffice}
              alt="Contact Kamla Oil Industries"
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </AnimateIn>

          <AnimateIn delay={100} className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:py-14">
            <a
              href={`tel:${company.phoneTel}`}
              className="inline-flex w-full max-w-md items-center justify-center rounded-full border border-amber-200/80 bg-gradient-to-r from-amber-100 via-amber-50 to-white px-6 py-3.5 font-display text-lg font-bold tracking-wide text-green-900 shadow-sm transition-all hover:shadow-md sm:text-xl"
            >
              Phone: {company.phoneTel.replace("+91", "+91 ")}
            </a>

            <div className="mt-8 max-w-md space-y-1 text-center text-base leading-relaxed text-green-900 sm:text-lg lg:text-left">
              <p className="font-semibold">Address:</p>
              <p>{company.plantLocation}</p>
            </div>

            <p className="mt-4 text-sm text-green-700/80">
              <span className="font-medium">Email:</span>{" "}
              <a
                href={`mailto:${recipientEmail}`}
                className="text-green-600 hover:text-green-800 hover:underline"
              >
                {recipientEmail}
              </a>
            </p>

            <div className="mt-6 w-full max-w-md overflow-hidden rounded-xl border border-green-200 shadow-md">
              <iframe
                title="Kamla Oil Industries plant on Google Maps"
                src={company.mapsEmbedUrl}
                className="h-56 w-full border-0 sm:h-64"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-sm font-semibold text-green-600 hover:text-green-800"
            >
              View on Google Maps →
            </a>
          </AnimateIn>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-green-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <AnimateIn>
            <div className="overflow-hidden rounded-2xl border border-green-200 bg-white shadow-lg shadow-green-900/5">
              <div className="border-b border-green-100 bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-8 sm:px-10">
                <p className="text-eyebrow text-green-100/90">Get in touch</p>
                <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-green-50/90 sm:text-base">
                  Fill in the form below and we will respond as soon as possible.
                </p>
              </div>

              <div className="p-6 sm:p-10">
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
                      <span className="font-semibold">{recipientEmail}</span>.
                      We will get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Name
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
                          Your email *
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
                          Phone
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
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        disabled={loading}
                        placeholder="Your message…"
                        className={`${inputClass} resize-y min-h-[160px]`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="flex w-full items-center justify-center gap-2 rounded-full bg-green-600 py-4 font-display text-lg font-semibold text-white shadow-md shadow-green-600/25 transition-all hover:bg-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Submit"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
