import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';
import type { ContactFormData, FormStatus } from '@/types';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) {
    errors.message = 'Message is required.';
  } else if (data.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.';
  }
  return errors;
}

const inputClasses = (hasError: boolean) =>
  cn(
    'w-full rounded-lg border px-4 py-3 text-sm outline-none',
    'bg-slate-50 dark:bg-slate-800/50',
    'text-slate-900 dark:text-slate-100',
    'placeholder-slate-400 dark:placeholder-slate-500',
    'transition-all duration-200',
    'focus:ring-2 focus:ring-primary-500/30',
    hasError
      ? 'border-red-400 dark:border-red-500 focus:border-red-400'
      : 'border-slate-200 dark:border-slate-700 focus:border-primary-400 dark:focus:border-primary-500'
  );

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');

    // ✏️ TODO: Replace this with your actual form submission logic.
    // Options:
    //   - Formspree: fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(formData), headers: { 'Content-Type': 'application/json' } })
    //   - EmailJS: emailjs.send(serviceId, templateId, formData, publicKey)
    //   - Custom API: fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulated delay
    setStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-emerald-200 bg-emerald-50 p-10 text-center dark:border-emerald-500/20 dark:bg-emerald-500/5">
        <CheckCircle2 className="h-12 w-12 text-emerald-500" />
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">Message sent!</h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
        </div>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-medium text-emerald-600 hover:underline dark:text-emerald-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Full Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          autoComplete="name"
          aria-required="true"
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={inputClasses(!!errors.name)}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={12} /> {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Email Address <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          autoComplete="email"
          aria-required="true"
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={inputClasses(!!errors.email)}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={12} /> {errors.email}
          </p>
        )}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Subject <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What is this regarding?"
          aria-required="true"
          aria-describedby={errors.subject ? 'subject-error' : undefined}
          className={inputClasses(!!errors.subject)}
        />
        {errors.subject && (
          <p id="subject-error" role="alert" className="mt-1 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={12} /> {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project, opportunity, or just say hello..."
          aria-required="true"
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClasses(!!errors.message), 'resize-none')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 flex items-center gap-1 text-xs text-red-500">
            <AlertCircle size={12} /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={status === 'loading'}
        rightIcon={<Send size={16} />}
        className="w-full"
      >
        Send Message
      </Button>

      {status === 'error' && (
        <p role="alert" className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle size={14} />
          Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}
