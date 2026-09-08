import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Clock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactForm } from '@/components/ui/ContactForm';
import { isPlaceholder, createMailtoLink } from '@/lib/utils';
import { profile } from '@/data/profile';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactInfoItem({ icon, label, value, href }: ContactInfoItemProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500 dark:bg-primary-500/10 dark:text-primary-400">
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            className="mt-0.5 text-sm font-medium text-slate-800 transition-colors hover:text-primary-500 dark:text-slate-200 dark:hover:text-primary-400"
          >
            {value}
          </a>
        ) : (
          <p className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">{value}</p>
        )}
      </div>
    </div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind, an opportunity to share, or just want to connect? I'd love to hear from you."
          centered
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="sticky top-28 flex flex-col gap-8">
              <div>
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">
                  Contact Information
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {!isPlaceholder(profile.email) && (
                  <ContactInfoItem
                    icon={<Mail size={18} />}
                    label="Email"
                    value={profile.email}
                    href={createMailtoLink(profile.email)}
                  />
                )}
                {!isPlaceholder(profile.location) && (
                  <ContactInfoItem
                    icon={<MapPin size={18} />}
                    label="Location"
                    value={profile.location}
                  />
                )}
                {!isPlaceholder(profile.github) && (
                  <ContactInfoItem
                    icon={<Github size={18} />}
                    label="GitHub"
                    value={profile.github.replace('https://', '')}
                    href={profile.github}
                  />
                )}
                {!isPlaceholder(profile.linkedin) && (
                  <ContactInfoItem
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                    value={profile.linkedin.replace('https://www.', '').replace('https://', '')}
                    href={profile.linkedin}
                  />
                )}
                <ContactInfoItem
                  icon={<Clock size={18} />}
                  label="Response Time"
                  value="Usually within 24–48 hours"
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700/50 dark:bg-slate-800/30 sm:p-8">
              <h3 className="mb-6 font-semibold text-slate-900 dark:text-slate-100">
                Send a Message
              </h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
