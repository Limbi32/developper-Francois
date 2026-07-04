import ContactForm from "../ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-white dark:from-black dark:via-zinc-950 dark:to-black px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">Contact</p>
          <h1 className="mt-4 text-4xl font-extrabold text-zinc-900 dark:text-white">Parlons de votre projet</h1>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Utilisez ce formulaire pour m'envoyer directement un message. Je reçois les emails via Resend et je vous répondrai rapidement.
          </p>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
