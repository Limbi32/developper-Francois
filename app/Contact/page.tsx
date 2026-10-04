'use client'

import { useState } from "react";

export default function Contact() {
    const [messages, setMessages] = useState<string[]>([]);
    const [content, setContent] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim() || status === 'sending') return;

        setStatus('sending');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message: content }),
            });

            if (!res.ok) throw new Error('Erreur serveur');

            setMessages(prev => [...prev, content]);
            setContent('');
            setStatus('idle');
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-slate-900 p-4">
            <div className="w-full max-w-2xl bg-slate-800/60 border border-slate-700 rounded-2xl shadow-xl p-8 flex flex-col gap-6">

                {/* En-tête */}
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl font-bold text-slate-50">
                        Discutons de votre projet
                    </h1>
                    <p className="text-slate-400 text-sm">
                        Écrivez-moi, je vous réponds par email dans les meilleurs délais.
                    </p>
                </div>

                {/* Messages envoyés */}
                {messages.length > 0 && (
                    <div className="flex flex-col gap-3 max-h-60 overflow-y-auto pr-1">
                        {messages.map((mes, i) => (
                            <div key={i} className="flex justify-end">
                                <div className="bg-cyan-500 text-slate-950 max-w-[85%] px-5 py-3 rounded-2xl rounded-br-sm break-words whitespace-pre-wrap">
                                    {mes}
                                </div>
                            </div>
                        ))}
                        <p className="text-cyan-400 text-xs text-right">Message envoyé ✓</p>
                    </div>
                )}

                {/* Formulaire */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm text-slate-300">Nom</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Votre nom"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-slate-900 border border-slate-600 text-slate-50 placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm text-slate-300">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="vous@exemple.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-slate-900 border border-slate-600 text-slate-50 placeholder-slate-500 rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm text-slate-300">Message</label>
                        <textarea
                            id="message"
                            rows={8}
                            placeholder="Décrivez votre projet, vos besoins, vos délais..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="bg-slate-900 border border-slate-600 text-slate-50 placeholder-slate-500 rounded-xl px-4 py-3 outline-none resize-y min-h-40 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition"
                        />
                    </div>

                    {status === 'error' && (
                        <p className="text-red-400 text-sm">
                            Échec de l'envoi, réessayez.
                        </p>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="bg-cyan-400 text-slate-950 font-semibold rounded-xl px-6 py-3 hover:bg-cyan-300 hover:cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
                    </button>
                </form>
            </div>
        </div>
    );
}