import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socials } from '../data/portfolioData';

const SocialIcon = ({ name }: { name: string }) => {
  switch (name.toLowerCase()) {
    case 'github':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      );

    case 'linkedin':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );

    case 'instagram':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.75 2h8.5C19.55 2 22 4.45 22 7.75v8.5C22 19.55 19.55 22 16.25 22h-8.5C4.45 22 2 19.55 2 16.25v-8.5C2 4.45 4.45 2 7.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5A4.25 4.25 0 0020.5 16.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a1.13 1.13 0 110 2.26 1.13 1.13 0 010-2.26z"/>
        </svg>
      );

    default:
      return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
        </svg>
      );
  }
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // ✅ ONLY LOGIC CHANGE: send form data to Google Sheet
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');

  try {
    const formBody = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    await fetch(
      'https://script.google.com/macros/s/AKfycbz1gbs1S9V2b1And0XDAY3Fo_MT4O3Tm_vi3nuBe5EYBHr0EaUnHTf0fU376RDbEkrgjA/exec',
      {
        method: 'POST',
        body: formBody, // 👈 NO headers
      }
    );

    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus('idle'), 3000);
  } catch (error) {
    console.error(error);
    setStatus('idle');
  }
};


  return (
    <section id="contact" className="py-32 bg-white dark:bg-[#0b0f1a] transition-colors scroll-mt-navbar px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-900 dark:bg-slate-900/50 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 blur-[100px] -mr-48 -mt-48" />

          <div className="grid lg:grid-cols-2 gap-20 relative z-10">
            <div>
              <h2 className="text-5xl font-black text-white mb-8 tracking-tighter">
                Let's make <br />
                <span className="text-gradient">something iconic.</span>
              </h2>

              <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                I'm currently looking for new opportunities and collaborations.
                Whether you have a specific project or just a vague idea, let's talk.
              </p>

              <div className="space-y-8 mb-12">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-1">Direct Mail</p>
                    <p className="text-white font-bold text-lg">rohitkumarrrx@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:bg-indigo-600 transition-all duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-1">Location</p>
                    <p className="text-white font-bold text-lg">Hybrid</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mb-6">Social Connect</p>
                <div className="flex gap-4">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                    >
                      <SocialIcon name={social.icon} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 p-10 rounded-[2.5rem] border border-white/10 backdrop-blur-sm"
            >
              <div className="space-y-6">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500 font-semibold"
                />

                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500 font-semibold"
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-indigo-500 transition-all placeholder:text-slate-500 font-semibold resize-none"
                />

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-500 transition-all shadow-xl hover:shadow-indigo-600/30 flex items-center justify-center gap-3 disabled:bg-slate-700"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    'Message Received!'
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
