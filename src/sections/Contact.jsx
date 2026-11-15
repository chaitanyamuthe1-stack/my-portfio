import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquareText } from "lucide-react";
import SectionTitle from "../components/SectionTitle";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState("");

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setFeedback("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please enter a subject.";
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setFeedback("Please correct the highlighted fields and try again.");
      return;
    }

    setFeedback(
      "Your details passed validation, but your message was not sent. This form does not have an email service configured yet.",
    );
  };

  const fields = [
    { name: "name", label: "Name", type: "text", autoComplete: "name" },
    {
      name: "email",
      label: "Email",
      type: "email",
      autoComplete: "email",
    },
    { name: "subject", label: "Subject", type: "text" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-primary/[0.08] blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-secondary/[0.08] blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Connect and Build Something Amazing."
          description="I am interested in technology, learning opportunities, internships and professional collaboration."
          icon={<MessageSquareText size={16} />}
          centered
        />

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          className="glass-panel mx-auto max-w-3xl rounded-3xl p-5 sm:p-8 lg:p-10"
          aria-describedby={
            feedback
              ? "contact-delivery-note contact-feedback"
              : "contact-delivery-note"
          }
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <FormField
                key={field.name}
                {...field}
                value={form[field.name]}
                error={errors[field.name]}
                onChange={updateField}
              />
            ))}

            <div className="sm:col-span-2">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-textLight"
              >
                Message <span aria-hidden="true" className="text-accentCyan">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={updateField}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message ? "contact-message-error" : undefined
                }
                className={`w-full resize-y rounded-xl border bg-[#080b12]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-textMuted/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/15 ${
                  errors.message
                    ? "border-rose-400/70"
                    : "border-white/10"
                }`}
                placeholder="Write your message..."
              />
              {errors.message && (
                <p
                  id="contact-message-error"
                  className="mt-1.5 text-xs text-rose-300"
                >
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          <p
            id="contact-delivery-note"
            className="mt-5 flex items-start gap-2 text-xs leading-5 text-textMuted"
          >
            <Mail size={14} className="mt-0.5 shrink-0 text-accentCyan" />
            This form currently validates your input only. It will not send or
            store a message until an email service is configured.
          </p>

          {feedback && (
            <p
              id="contact-feedback"
              role="status"
              aria-live="polite"
              className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                Object.keys(errors).length > 0
                  ? "border-rose-400/20 bg-rose-400/[0.06] text-rose-200"
                  : "border-accentCyan/20 bg-accentCyan/[0.05] text-textLight"
              }`}
            >
              {feedback}
            </p>
          )}

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-5 py-3 text-sm font-semibold text-white shadow-glow-blue transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accentCyan focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Validate message <ArrowRight size={16} />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function FormField({
  name,
  label,
  type,
  autoComplete,
  value,
  error,
  onChange,
}) {
  const errorId = `contact-${name}-error`;

  return (
    <div>
      <label
        htmlFor={`contact-${name}`}
        className="mb-2 block text-sm font-medium text-textLight"
      >
        {label} <span aria-hidden="true" className="text-accentCyan">*</span>
      </label>
      <input
        id={`contact-${name}`}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-xl border bg-[#080b12]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-textMuted/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/15 ${
          error ? "border-rose-400/70" : "border-white/10"
        }`}
        placeholder={`Your ${label.toLowerCase()}`}
      />
      {error && (
        <p id={errorId} className="mt-1.5 text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}
