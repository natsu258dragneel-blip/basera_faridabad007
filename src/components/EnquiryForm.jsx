import { useState } from "react";
import { MessageCircle, User, Phone, MapPin, BedDouble, CalendarDays, MessageSquareText } from "lucide-react";
import { locations } from "../data/locations";
import { roomTypes } from "../data/rooms";
import { openWhatsApp, formEnquiryMessage } from "../utils/whatsapp";
import Reveal from "./Reveal";

const INITIAL_STATE = {
  name: "",
  phone: "",
  location: "",
  roomType: "",
  moveInDate: "",
  message: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter your phone number.";
    } else if (!/^[0-9+\s-]{8,15}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    openWhatsApp(formEnquiryMessage(form));
    setSubmitted(true);
    setForm(INITIAL_STATE);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-pad py-20 sm:py-28">
      <div className="container-max grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
        <Reveal className="lg:col-span-2">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-heading mt-3">Send Us an Enquiry</h2>
          <p className="mt-4 text-ink-500 dark:text-cream-400/80 leading-relaxed">
            Fill in a few details and we'll open WhatsApp with your enquiry
            ready to send — no back-and-forth, no waiting on a callback.
          </p>

          <div className="mt-8 rounded-2xl bg-emerald-500/8 border border-emerald-500/15 p-5">
            <p className="text-sm text-ink-700 dark:text-cream-200 leading-relaxed">
              Prefer to skip the form? Message us directly at{" "}
              <span className="font-semibold text-emerald-700 dark:text-emerald-glow">
                +91 95997 14297
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-3">
          <form onSubmit={handleSubmit} noValidate className="card-surface p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="name" className="field-label">
                  <User size={14} className="inline -mt-0.5 mr-1.5" />
                  Full Name <span className="text-emerald-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  placeholder="Your full name"
                  className="input-field"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="phone" className="field-label">
                  <Phone size={14} className="inline -mt-0.5 mr-1.5" />
                  Phone Number <span className="text-emerald-600">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  placeholder="e.g. 98765 43210"
                  className="input-field"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="location" className="field-label">
                  <MapPin size={14} className="inline -mt-0.5 mr-1.5" />
                  Preferred Location
                </label>
                <select
                  id="location"
                  value={form.location}
                  onChange={handleChange("location")}
                  className="input-field appearance-none"
                >
                  <option value="">Select a location</option>
                  {locations.map((loc) => (
                    <option key={loc.slug} value={loc.name}>
                      {loc.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="roomType" className="field-label">
                  <BedDouble size={14} className="inline -mt-0.5 mr-1.5" />
                  Room Type
                </label>
                <select
                  id="roomType"
                  value={form.roomType}
                  onChange={handleChange("roomType")}
                  className="input-field appearance-none"
                >
                  <option value="">Select room type</option>
                  {roomTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="moveInDate" className="field-label">
                  <CalendarDays size={14} className="inline -mt-0.5 mr-1.5" />
                  Expected Move-in Date
                </label>
                <input
                  id="moveInDate"
                  type="date"
                  value={form.moveInDate}
                  onChange={handleChange("moveInDate")}
                  className="input-field"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="field-label">
                  <MessageSquareText size={14} className="inline -mt-0.5 mr-1.5" />
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Anything else we should know?"
                  className="input-field resize-none"
                />
              </div>
            </div>

            <button type="submit" className="btn-whatsapp w-full mt-6 !py-4">
              <MessageCircle size={19} />
              Send Enquiry on WhatsApp
            </button>

            {submitted && (
              <p className="mt-4 text-center text-sm font-medium text-emerald-600 dark:text-emerald-glow" role="status">
                WhatsApp should have opened in a new tab — see you there!
              </p>
            )}

            <p className="mt-4 text-center text-xs text-ink-400 dark:text-cream-400/50">
              Submitting opens WhatsApp with your details pre-filled. We never
              store this information on a server.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
