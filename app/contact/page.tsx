'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans p-8">
      <div className="max-w-3xl mx-auto">
        <a href="/" className="text-[#007FFF] hover:text-white mb-4 inline-block">&larr; Back to Home</a>
        <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
        {formStatus === 'success' ? (
          <div className="text-center py-20 glass p-12 rounded-[3rem] relative overflow-hidden">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold mb-4">Message Sent!</h2>
            <p className="text-[#FFF0F5]/60">We'll get back to you within 24 hours.</p>
            <button
              onClick={() => setFormStatus('idle')}
              className="mt-8 px-8 py-3 rounded-xl glass border-[#007FFF]/30 text-sm font-bold"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form className="space-y-6 glass p-12 rounded-[3rem]" onSubmit={handleSubmit} aria-label="Contact Form">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white/50 ml-2">Name</label>
                <input required id="name" name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#007FFF]/50 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white/50 ml-2">Email</label>
                <input required id="email" name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#007FFF]/50 transition-colors" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white/50 ml-2">Message</label>
              <textarea required id="message" name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-[#007FFF]/50 transition-colors" placeholder="Tell us about your project..." />
            </div>
            <button
              disabled={formStatus === 'submitting'}
              className="w-full py-5 rounded-2xl bg-white text-black font-black text-lg hover:bg-[#FFF0F5] transition-all disabled:opacity-50 relative overflow-hidden group"
            >
              <span className={formStatus === 'submitting' ? 'opacity-0' : 'opacity-100'}>
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
              {formStatus === 'submitting' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin" />
                </div>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}