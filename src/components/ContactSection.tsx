import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, User, Mail, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    // Simulating smooth client-side interaction
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 700);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 lg:py-28 bg-[#0D121F] border-t border-slate-800/80 relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Intro */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-medium mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>

          <h2
            id="contact-section-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4 mb-6" />

          <p
            id="contact-intro-message"
            className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            "I'm always interested in learning, connecting with other students, and exploring opportunities to grow in technology and AI."
          </p>
        </div>

        {/* Contact Form Card */}
        <div
          id="contact-form-card"
          className="bg-[#121927] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl shadow-black/25 relative"
        >
          {isSubmitted ? (
            <div
              id="contact-success-state"
              className="py-12 px-4 text-center space-y-4 animate-fadeIn"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Thank You!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Your message has been recorded. I appreciate you reaching out and connecting with my student journey!
              </p>
              <button
                id="contact-send-another-btn"
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-4 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form id="portfolio-contact-form" onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div
                  id="contact-error-banner"
                  className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-300 text-sm"
                >
                  {errorMessage}
                </div>
              )}

              {/* Name Field */}
              <div>
                <label
                  htmlFor="contact-input-name"
                  className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-slate-400" />
                  <span>Your Name</span>
                </label>
                <input
                  id="contact-input-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g., Alex Morgan"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="contact-input-email"
                  className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span>Your Email Address</span>
                </label>
                <input
                  id="contact-input-email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g., alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-input-message"
                  className="block text-sm font-medium text-slate-300 mb-2 flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-slate-400" />
                  <span>Message</span>
                </label>
                <textarea
                  id="contact-input-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Feel free to share guidance, discuss student projects, or connect..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#090d16] border border-slate-700/80 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm resize-y"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  id="contact-submit-button"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-semibold text-sm sm:text-base shadow-lg shadow-blue-600/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 disabled:opacity-60"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
