import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2, Github, Linkedin, Twitter } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';
import { profileData } from '../data/profile';
import { fadeUp } from '../utils/motion';

const initialForm = { name: '', email: '', message: '' };
const inputClass =
  'w-full rounded-xl border border-slate-800 bg-slate-900/90 px-4 py-3 text-sm text-white placeholder:text-slate-600 transition-colors focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/40';

const socials = [
  { icon: Github, href: profileData.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: profileData.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: profileData.socials.twitter, label: 'Twitter' },
];

export const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | opened | error

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      if (profileData.formEndpoint) {
        const res = await fetch(profileData.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) throw new Error('Request failed');
        setStatus('sent');
      } else {
        const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
        const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
        window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${body}`;
        setStatus('opened');
      }
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative scroll-mt-24 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Great Together"
          subtitle="Have a project in mind or want to collaborate? Drop a message below."
        />

        <div className="grid gap-10 lg:grid-cols-5">
          <motion.div {...fadeUp()} className="space-y-6 lg:col-span-2">
            <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Email</p>
                <a href={`mailto:${profileData.email}`} className="font-medium text-white hover:text-cyan-300">
                  {profileData.email}
                </a>
              </div>
            </div>
            <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
              <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-400">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500">Location</p>
                <p className="font-medium text-white">{profileData.location}</p>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-xl p-3 text-slate-400 transition-colors hover:text-cyan-400"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.15)}
            className="glass-card relative overflow-hidden rounded-3xl p-8 shadow-2xl lg:col-span-3"
          >
            <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            <form onSubmit={onSubmit} className="relative space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold text-slate-300">Name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={onChange} placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold text-slate-300">Email</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={onChange} placeholder="john@example.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold text-slate-300">Message</label>
                <textarea id="message" name="message" rows="5" required value={form.message} onChange={onChange} placeholder="Tell me about your project..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all hover:bg-cyan-400 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </button>

              <AnimatePresence mode="wait">
                {(status === 'sent' || status === 'opened') && (
                  <motion.div
                    key="ok"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 rounded-xl border border-cyan-500/30 bg-cyan-950/40 p-4 text-sm text-cyan-200"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-cyan-400" />
                    {status === 'sent'
                      ? 'Message sent successfully. I will get back to you soon!'
                      : 'Your email app has been opened with the message. Press send there to deliver it.'}
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="err"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-950/30 p-4 text-sm text-red-200"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 text-red-400" />
                    Something went wrong. Please try again or email me directly.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};