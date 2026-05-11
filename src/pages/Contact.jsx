import { useState } from "react";
import { useLocation } from "react-router-dom";
import Icon from "../icon/Icon";
import LocationSearch from "../components/LocationSearch";

const CONTACT_INFO = [
  { icon: "phone", label: "WhatsApp", value: "+234 812 345 6789" },
  { icon: "mail", label: "Email", value: "hello@freshfold.ng" },
  { icon: "clock", label: "Hours", value: "Mon – Sat: 7am – 8pm" },
  { icon: "mapPin", label: "Service Area", value: "Lagos Island & Mainland" },
];

const TIME_SLOTS = [
  "7:00 AM – 9:00 AM",
  "9:00 AM – 12:00 PM",
  "12:00 PM – 3:00 PM",
  "3:00 PM – 6:00 PM",
];

const SERVICES = [
  "Wash & Fold",
  "Dry Cleaning",
  "Ironing Only",
  "All-in-one (Wash, Dry Clean & Iron)",
];

const EMPTY_FORM = {
  name: "",
  phone: "",
  location: "",
  date: "",
  time: "",
  service: "",
  notes: "",
};

export default function Contact() {
  const location = useLocation();
  const selectedService = location.state?.selectedService || "";
  const [form, setForm] = useState({ ...EMPTY_FORM, service: selectedService });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const set = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    setErrors((e) => ({ ...e, [field]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name";
    if (!form.phone.trim()) e.phone = "Please enter your WhatsApp number";
    if (!form.location.trim()) e.location = "Please select your location";
    if (!form.date) e.date = "Please pick a date";
    if (!form.time) e.time = "Please pick a time slot";
    if (!form.service) e.service = "Please select a service";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm(EMPTY_FORM);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-[#EBF5FD] to-[#FFFDF7] dark:from-[#0D1117] dark:to-[#111827] px-6 py-16 text-center">
        <h1 className="font-bold text-[42px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-3">
          Book a <span className="text-[#5BBFEF]">Pickup</span>
        </h1>
        <p className="text-[#6B7280] dark:text-[#8B949E] text-[16px]">
          Fill in your details and we'll confirm within 15 minutes.
        </p>
      </section>

      {/* ─── Body ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16 flex gap-8 flex-wrap">
        {/* ─── Form ─── */}
        <div className="flex-[2] min-w-[280px]">
          {!submitted ? (
            <div className="bg-white dark:bg-[#161B22] rounded-3xl border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8">
              <h3 className="font-bold text-[20px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-7">
                Pickup details
              </h3>

              <div className="flex flex-col gap-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Full Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="e.g. Temi Adeyemi"
                      className={inputClass(errors.name)}
                    />
                  </Field>
                  <Field label="WhatsApp Number" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="08012345678"
                      className={inputClass(errors.phone)}
                    />
                  </Field>
                </div>

                {/* Location search */}
                <Field label="Pickup Location" error={errors.location}>
                  <LocationSearch
                    value={form.location}
                    onChange={(val) => set("location", val)}
                  />
                  {errors.location && (
                    <p className="text-[12px] text-red-500 mt-1">
                      {errors.location}
                    </p>
                  )}
                </Field>

                {/* Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Pickup Date" error={errors.date}>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => set("date", e.target.value)}
                      className={inputClass(errors.date)}
                    />
                  </Field>
                  <Field label="Pickup Time" error={errors.time}>
                    <select
                      value={form.time}
                      onChange={(e) => set("time", e.target.value)}
                      className={inputClass(errors.time)}
                    >
                      <option value="">Select time slot</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                {/* Service */}
                <Field label="Service Type" error={errors.service}>
                  <select
                    value={form.service}
                    onChange={(e) => set("service", e.target.value)}
                    className={inputClass(errors.service)}
                  >
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </Field>

                {/* Notes */}
                <Field label="Special Instructions (optional)">
                  <textarea
                    value={form.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    rows={3}
                    placeholder="Delicate items, stain treatment, specific washing instructions..."
                    className={inputClass()}
                  />
                </Field>

                <button
                  onClick={handleSubmit}
                  className="flex items-center justify-center gap-2 w-full bg-[#FF8C69] text-white font-bold text-[15px] py-4 rounded-2xl hover:opacity-90 transition-opacity shadow-[0_6px_20px_rgba(255,140,105,0.3)]"
                >
                  Confirm Booking <Icon name="arrowRight" size={18} />
                </button>
              </div>
            </div>
          ) : (
            /* ─── Success state ─── */
            <div className="bg-white dark:bg-[#161B22] rounded-3xl border-[1.5px] border-[#5BBFEF]/30 shadow-[0_4px_20px_rgba(91,191,239,0.1)] p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-[#5BBFEF]/10 flex items-center justify-center mx-auto mb-6">
                <Icon name="checkCircle" size={40} className="text-[#5BBFEF]" />
              </div>
              <h3 className="font-bold text-[26px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-3">
                Booking Received!
              </h3>
              <p className="text-[#6B7280] dark:text-[#8B949E] leading-relaxed mb-3">
                We'll send you a confirmation via WhatsApp within 15 minutes.
              </p>
              <p className="text-[14px] font-bold text-[#5BBFEF] mb-8">
                📍 {form.location}
              </p>
              <button
                onClick={handleReset}
                className="flex items-center gap-2 mx-auto bg-[#5BBFEF] text-white font-bold text-[14px] px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Book Another Pickup <Icon name="arrowRight" size={16} />
              </button>
            </div>
          )}
        </div>

        {/* ─── Sidebar ─── */}
        <div className="flex-1 min-w-[220px] flex flex-col gap-5">
          {/* Contact info */}
          <div className="bg-white dark:bg-[#161B22] rounded-3xl border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] p-6">
            <h3 className="font-bold text-[17px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-5">
              Contact us
            </h3>
            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#5BBFEF]/10 flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={15} className="text-[#5BBFEF]" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#6B7280] dark:text-[#8B949E] uppercase tracking-wide">
                      {c.label}
                    </p>
                    <p className="text-[14px] font-bold text-[#2A2A2A] dark:text-[#E6EDF3]">
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-[#5BBFEF] rounded-3xl p-6 text-center">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4">
              <Icon name="messageCircle" size={24} color="#fff" />
            </div>
            <p className="font-bold text-[15px] text-white mb-2">
              Prefer WhatsApp?
            </p>
            <p className="text-white/80 text-[13px] mb-5">
              Chat with us directly and we'll sort you out fast.
            </p>

            <a
              href="https://wa.me/2348123456789"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white font-bold text-[13px] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              <Icon name="messageCircle" size={14} color="#fff" />
              Chat with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── Helpers ───
function Field({ label, error, children }) {
  return (
    <div>
      <label className="block font-bold text-[13px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-1.5">
        {label}
      </label>
      {children}
      {error && <p className="text-[12px] text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full px-4 py-3 rounded-xl border-[1.5px] ${
    error
      ? "border-red-400 dark:border-red-500"
      : "border-[#E5E7EB] dark:border-[#2A3040]"
  } bg-[#FFFDF7] dark:bg-[#0D1117] text-[#2A2A2A] dark:text-[#E6EDF3] text-[14px] outline-none focus:border-[#5BBFEF] transition-colors placeholder:text-[#9CA3AF]`;
}
