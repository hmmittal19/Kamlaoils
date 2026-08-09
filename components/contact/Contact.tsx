"use client";

import AnimateIn from "@/components/AnimateIn";
import ContactDetails from "@/components/ContactDetails";
import PageHeader from "@/components/PageHeader";
import { company } from "@/lib/company";
import { FormEvent, useState } from "react";

const recipientEmail = company.email;

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
      <PageHeader title="Contact" description={company.plantLocation} />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <AnimateIn>
          <div className="rounded-xl border border-green-200 bg-green-50 p-6 transition-all duration-300 hover:shadow-md">
            <h2 className="text-lg font-semibold text-green-700">
              Plant Location
            </h2>
            <p className="mt-2 leading-relaxed text-zinc-700">
              {company.plantLocation}
            </p>
            <a
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-green-700 hover:text-green-700"
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
              <p className="mt-2 text-sm text-zinc-500">{company.legalName}</p>
              <p className="mt-2 text-sm text-zinc-600">
                Form messages are delivered only to{" "}
                <a
                  href={`mailto:${recipientEmail}`}
                  className="font-medium text-green-700 hover:underline"
                >
                  {recipientEmail}
                </a>
              </p>
              <ContactDetails className="mt-6" />
            </div>
            </AnimateIn>

            <AnimateIn delay={200}>
            <div className="rounded-xl border border-green-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
              <p className="mb-4 text-sm text-zinc-500">
                <span className="font-medium text-zinc-700">
                  Location:{" "}
                </span>
                {company.plantLocation}
              </p>
              {submitted ? (
                <p className="py-8 text-center text-green-700">
                  Thank you! Your message has been sent to {recipientEmail}. We
                  will get back to you soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                      {error}
                    </p>
                  )}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-zinc-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={loading}
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-zinc-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={loading}
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-zinc-700"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder={company.phone}
                      disabled={loading}
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-60"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-zinc-700"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      disabled={loading}
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-60"
                    >
                      <option>General inquiry</option>
                      <option>Product quote</option>
                      <option>Bulk order</option>
                      <option>Plant visit / Location</option>
                      <option>Technical support</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-zinc-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      disabled={loading}
                      className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 disabled:opacity-60"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-full bg-green-500 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-green-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send message"}
                  </button>
                </form>
              )}
            </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  );
}
