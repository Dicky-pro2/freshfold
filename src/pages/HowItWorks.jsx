import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../icon/Icon";

const STEPS = [
  {
    number: "01",
    icon: "calendar",
    title: "Schedule a Pickup",
    desc: "Fill out our quick booking form or send us a WhatsApp message. Choose your preferred pickup time and the services you need.",
    color: "text-[#5BBFEF]",
    bg: "bg-[#5BBFEF]/10",
    border: "border-[#5BBFEF]",
    connector: "bg-[#5BBFEF]/20",
  },
  {
    number: "02",
    icon: "truck",
    title: "We Come to You",
    desc: "Our friendly driver picks up your laundry at your door. We provide a bag and receipt for every item collected — no guesswork.",
    color: "text-[#FF8C69]",
    bg: "bg-[#FF8C69]/10",
    border: "border-[#FF8C69]",
    connector: "bg-[#FF8C69]/20",
  },
  {
    number: "03",
    icon: "sparkles",
    title: "We Get to Work",
    desc: "Your clothes are washed, dry cleaned, or ironed using premium products by our professional team at our facility.",
    color: "text-[#A78BFA]",
    bg: "bg-[#A78BFA]/10",
    border: "border-[#A78BFA]",
    connector: "bg-[#A78BFA]/20",
  },
  {
    number: "04",
    icon: "package",
    title: "Delivered Fresh",
    desc: "Within 24 hours, your clothes are packaged and delivered back — fresh, clean, and neatly organized. You'll love it.",
    color: "text-[#9A6F0A]",
    bg: "bg-[#FFD166]/15",
    border: "border-[#FFD166]",
    connector: null,
  },
];

const FAQS = [
  {
    q: "What areas in Lagos do you cover?",
    a: "We currently serve Lekki, VI, Ikoyi, Surulere, Yaba, Ikeja, and surrounding areas. Enter your address during booking to confirm availability.",
  },
  {
    q: "How do I know my clothes are safe?",
    a: "Every item is logged with a photo when collected. We're fully insured and have never lost a customer's clothing in 3 years of service.",
  },
  {
    q: "What if I'm not home for delivery?",
    a: "You can designate a trusted person (security, family member) to receive your laundry. We'll confirm details with you before delivery.",
  },
  {
    q: "Can I request specific washing instructions?",
    a: "Absolutely! Add special instructions during booking or call us directly. We handle delicate fabrics with extra care.",
  },
  {
    q: "How do I pay?",
    a: "We accept bank transfer, card payment, and cash on delivery. Payment is confirmed before we begin processing your order.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white dark:bg-[#161B22] hover:bg-[#FFF5E6] dark:hover:bg-[#1A1F2E] transition-colors text-left"
      >
        <span className="font-bold text-[15px] text-[#2A2A2A] dark:text-[#E6EDF3]">
          {q}
        </span>
        <Icon
          name={open ? "chevronUp" : "chevronDown"}
          size={18}
          className="text-[#5BBFEF] shrink-0 ml-4"
        />
      </button>
      {open && (
        <div className="px-6 py-4 bg-[#FAFAFA] dark:bg-[#0D1117] text-[14px] text-[#6B7280] dark:text-[#8B949E] leading-relaxed border-t border-[#FFE8CC] dark:border-[#2A3040]">
          {a}
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-[#EBF5FD] to-[#FFFDF7] dark:from-[#0D1117] dark:to-[#111827] px-6 py-16 text-center">
        <h1 className="font-bold text-[42px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-3">
          How It <span className="text-[#5BBFEF]">Works</span>
        </h1>
        <p className="text-[#6B7280] dark:text-[#8B949E] text-[16px] max-w-md mx-auto">
          Getting fresh laundry is as easy as 1-2-3. We handle everything else.
        </p>
      </section>

      {/* ─── Steps ─── */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="flex flex-col gap-0">
          {STEPS.map((s, i) => (
            <div key={s.number} className="flex gap-6">
              {/* Left: number + connector */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-14 h-14 rounded-full ${s.bg} border-2 ${s.border} flex items-center justify-center font-bold text-[16px] ${s.color} shrink-0`}
                >
                  {s.number}
                </div>
                {s.connector && (
                  <div
                    className={`w-0.5 flex-1 my-2 ${s.connector} min-h-[40px]`}
                  />
                )}
              </div>

              {/* Right: card */}
              <div
                className={`bg-white dark:bg-[#161B22] rounded-3xl border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-6 flex-1 ${i !== STEPS.length - 1 ? "mb-2" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-xl ${s.bg} flex items-center justify-center mb-4`}
                >
                  <Icon name={s.icon} size={20} className={s.color} />
                </div>
                <h3 className="font-bold text-[20px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-2">
                  {s.title}
                </h3>
                <p className="text-[14px] text-[#6B7280] dark:text-[#8B949E] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ─── FAQ ─── */}
        <div className="mt-20">
          <h2 className="font-bold text-[28px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-8">
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {FAQS.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-[#5BBFEF] to-[#3A9ED4] py-16 px-6 text-center">
        <h2 className="font-bold text-[32px] text-white mb-3">
          Ready to get started?
        </h2>
        <p className="text-white/85 text-[15px] mb-8">
          Book your first pickup today and get 20% off.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="flex items-center gap-2 mx-auto bg-[#FFD166] text-[#2A2A2A] font-bold text-[15px] px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Book a Pickup <Icon name="arrowRight" size={18} />
        </button>
      </section>
    </div>
  );
}
