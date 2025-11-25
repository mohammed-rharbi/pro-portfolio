"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { sendEmail } from "../actions/sendEmail";

export default function ContactFooter() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <footer id="contact" className="relative w-full max-w-7xl mx-auto px-6 py-24 sm:px-12 lg:px-20">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-3 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            Get In Touch
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Let's Work <span className="text-blue-500">Together</span>
          </h3>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-md">
            Have a project in mind or just want to say hi? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>

          <div className="flex flex-col gap-6">
            <ContactItem
              icon={<FaEnvelope />}
              label="Email Me"
              value="rharbi383@gmail.com"
              href="mailto:contact@mohammedrharbi.com"
            />
            <ContactItem
              icon={<FaLinkedin />}
              label="LinkedIn"
              value="Mohammed Rharbi"
              href="https://linkedin.com/in/mohammed--rharbi"
            />
            <ContactItem
              icon={<FaGithub />}
              label="GitHub"
              value="mohammed-rharbi"
              href="https://github.com/mohammed-rharbi"
            />
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl"
        >
          <form
            action={async (formData) => {
              setLoading(true);
              setSuccess(false);
              setError("");

              const result = await sendEmail(formData);

              setLoading(false);
              if (result.success) {
                setSuccess(true);
                // Optional: Reset form here if needed, or rely on success state to show a different UI
              } else {
                setError(result.error || "Something went wrong.");
              }
            }}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InputGroup label="Name" name="name" type="text" placeholder="John Doe" required />
              <InputGroup label="Email" name="email" type="email" placeholder="john@example.com" required />
            </div>
            <InputGroup label="Subject" name="subject" type="text" placeholder="Project Discussion" required />

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"
              />
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">Message sent successfully!</p>}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all transform hover:-translate-y-1 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Sending..." : "Send Message"}</span>
              {!loading && <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </button>
          </form>
        </motion.div>

      </div>

      {/* Copyright */}
      <div className="mt-24 pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Mohammed Rharbi. All rights reserved.</p>
      </div>

    </footer>
  );
}

function ContactItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all text-xl">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{label}</p>
        <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{value}</p>
      </div>
    </Link>
  );
}

function InputGroup({ label, name, type, placeholder, required }: { label: string; name: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-slate-300 ml-1">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-6 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
      />
    </div>
  );
}
