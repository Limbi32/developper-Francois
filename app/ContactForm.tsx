"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erreur lors de l'envoi");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erreur inconnue");
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto py-20">
      <div className="rounded-3xl border border-zinc-200 bg-white/90 p-8 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/90">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Envoie-moi un message directement depuis le portfolio. Je reçois le mail via Resend.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <label className="col-span-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Nom</span>
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              placeholder="François"
            />
          </label>

          <label className="col-span-2 sm:col-span-1">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Email</span>
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              placeholder="bonjour@exemple.com"
            />
          </label>

          <label className="col-span-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">Message</span>
            <textarea
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="mt-2 h-40 w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              placeholder="Décris ton projet, ta mission ou ta demande..."
            />
          </label>

          <div className="col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Envoi..." : "Envoyer le message"}
            </button>

            {status === "success" && (
              <p className="text-sm text-emerald-600">Message envoyé ! Je te répondrai vite.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-rose-600">Erreur : {error}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
