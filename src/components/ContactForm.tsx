import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import validator from "validator";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validate = () => {
    const newErrors = {
      name: validator.isEmpty(formData.name.trim())
        ? "Name is required"
        : "",
      email: validator.isEmpty(formData.email.trim())
        ? "Email is required"
        : !validator.isEmail(formData.email.trim())
        ? "Enter a valid email address"
        : "",
      message: validator.isEmpty(formData.message.trim())
        ? "Message is required"
        : "",
    };
  
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error on typing
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setStatus(null); // clear previous status

    e.preventDefault();
    if (!validate() || !formRef.current) return;
  
    setLoading(true);

    const sanitizedFormData = {
      name: validator.escape(formData.name.trim()),
      email: validator.normalizeEmail(formData.email.trim()) || "", // normalize fixes casing and dots for Gmail
      message: validator.escape(formData.message.trim()),
    };
  
    // Optionally: set values directly to formRef for EmailJS
    (formRef.current.elements.namedItem("name") as HTMLInputElement).value = sanitizedFormData.name;
    (formRef.current.elements.namedItem("email") as HTMLInputElement).value = sanitizedFormData.email;
    (formRef.current.elements.namedItem("message") as HTMLTextAreaElement).value = validator.escape(formData.message.trim());
  
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID!,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
        setStatus({ type: "success", message: "Message sent successfully!" });
        formRef.current?.reset();
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setStatus({ type: "error", message: "Something went wrong. Please try again." });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-gray-700 p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-6">Send us a Message</h3>
      <form ref={formRef} onSubmit={sendEmail} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
            required
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
            required
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full p-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400"
            required
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Time (hidden input) */}
        <input type="hidden" name="time" value={new Date().toUTCString()} />

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className={`w-full text-white font-semibold py-3 rounded-lg focus:outline-none transition duration-200 shadow-md ${
              loading
                ? "bg-gray-800 cursor-not-allowed"
                : "bg-gray-600 hover:bg-slate-800"
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>

        {status && (
          <p
            className={`mt-4 text-sm font-medium text-center ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;