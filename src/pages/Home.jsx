import { useNavigate } from "react-router-dom";
import Icon from "../icon/Icon";

const STATS = [
  ["5,000+", "Happy Customers"],
  ["15min", "Avg. Pickup Time"],
  ["99%", "Satisfaction Rate"],
  ["3 yrs", "Serving Lagos"],
];

const FEATURES = [
  {
    icon: "car",
    title: "Free Pickup & Delivery",
    desc: "We come to you anywhere in Lagos. No extra charges, no hidden fees — ever.",
  },
  {
    icon: "zap",
    title: "24-Hour Turnaround",
    desc: "Get your clothes back fresh and clean within 24 hours, guaranteed.",
  },
  {
    icon: "droplets",
    title: "Premium Products",
    desc: "Soft, skin-friendly detergents that are gentle on your fabrics and family.",
  },
  {
    icon: "smartphone",
    title: "Real-time Updates",
    desc: "Track your laundry status from pickup to delivery via WhatsApp.",
  },
];

const TESTIMONIALS = [
  {
    name: "Temi A.",
    role: "Busy mum, Lekki",
    text: "FreshFold has been a lifesaver! My family's clothes come back perfectly clean and neatly folded every time.",
  },
  {
    name: "Emeka O.",
    role: "Corporate professional, VI",
    text: "My shirts have never looked this crisp. The dry cleaning service is exceptional — worth every kobo.",
  },
  {
    name: "Chisom N.",
    role: "Student, Yaba",
    text: "Super affordable and the pickup is always on time. I recommended FreshFold to all my hostel mates!",
  },
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="bg-gradient-to-br from-[#EBF5FD] to-[#FFFDF7] dark:from-[#0D1117] dark:to-[#111827] px-6 pt-20 pb-24 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-8 right-[8%] w-64 h-64 rounded-full bg-[#5BBFEF]/20 blur-3xl pointer-events-none animate-[float1_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 left-[4%] w-52 h-52 rounded-full bg-[#FFD166]/25 blur-3xl pointer-events-none animate-[float2_8s_ease-in-out_infinite]" />
        <div className="absolute top-28 right-[22%] w-36 h-36 rounded-full bg-[#FF8C69]/20 blur-2xl pointer-events-none animate-[float3_7s_ease-in-out_infinite]" />
        <div className="absolute bottom-10 right-[35%] w-28 h-28 rounded-full bg-[#5BBFEF]/15 blur-2xl pointer-events-none animate-[float1_9s_ease-in-out_infinite_reverse]" />

        <div className="max-w-6xl mx-auto flex items-center gap-12 flex-wrap">
          {/* Copy */}
          <div className="flex-1 min-w-[280px] animate-slideInLeft">
            <span className="inline-block bg-[#FFD166]/25 text-[#9A6F0A] dark:bg-[#FFD166]/10 dark:text-[#FFD166] font-bold text-[13px] px-4 py-1.5 rounded-full mb-6">
              ✨ Lagos #1 Laundry Service
            </span>
            <h1 className="font-bold text-[clamp(34px,5vw,58px)] leading-[1.15] text-[#2A2A2A] dark:text-[#E6EDF3] mb-5">
              Fresh Clothes,
              <br />
              <span className="text-[#5BBFEF]">Zero Stress.</span>
            </h1>
            <p className="text-[#6B7280] dark:text-[#8B949E] text-[16px] leading-[1.75] mb-8 max-w-[420px]">
              We wash, dry clean, and iron your clothes so you don't have to.
              Schedule a pickup in seconds — we'll handle the rest.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center gap-2 bg-[#5BBFEF] text-white font-bold text-[15px] px-8 py-3.5 rounded-full shadow-[0_6px_20px_rgba(91,191,239,0.35)] hover:opacity-90 transition-opacity"
              >
                Schedule Pickup <Icon name="arrowRight" size={16} />
              </button>
              <button
                onClick={() => navigate("/services")}
                className="bg-transparent text-[#2A2A2A] dark:text-[#E6EDF3] border-2 border-[#E5E7EB] dark:border-[#2A3040] font-bold text-[15px] px-8 py-3.5 rounded-full hover:border-[#5BBFEF] transition-colors"
              >
                See Pricing
              </button>
            </div>
            <div className="flex gap-6 mt-9 flex-wrap">
              {[
                { icon: "star", text: "4.9 Rating" },
                { icon: "rocket", text: "Same-day pickup" },
                { icon: "shield", text: "Fully insured" },
              ].map((b) => (
                <span
                  key={b.text}
                  className="flex items-center gap-1.5 font-bold text-[13px] text-[#6B7280] dark:text-[#8B949E]"
                >
                  <Icon name={b.icon} size={14} className="text-[#5BBFEF]" />
                  {b.text}
                </span>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="flex-1 min-w-[240px] flex justify-center animate-slideInRight">
            <div className="relative w-[280px] h-[280px]">
              <div className="w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#5BBFEF]/15 to-[#FFD166]/20 flex items-center justify-center">
                <Icon
                  name="shirt"
                  size={120}
                  className="text-[#5BBFEF]"
                  strokeWidth={1}
                />
              </div>
              <div className="absolute top-2 -right-4 bg-white dark:bg-[#161B22] rounded-2xl px-3.5 py-2.5 shadow-[0_4px_18px_rgba(0,0,0,0.1)] font-bold text-[13px] text-[#2A2A2A] dark:text-[#E6EDF3] border border-[#FFE8CC] dark:border-[#2A3040] flex items-center gap-2 whitespace-nowrap">
                <Icon name="package" size={14} className="text-[#5BBFEF]" />{" "}
                Wash & Fold
              </div>
              <div className="absolute bottom-5 -left-6 bg-white dark:bg-[#161B22] rounded-2xl px-3.5 py-2.5 shadow-[0_4px_18px_rgba(0,0,0,0.1)] font-bold text-[13px] text-[#2A2A2A] dark:text-[#E6EDF3] border border-[#FFE8CC] dark:border-[#2A3040] flex items-center gap-2 whitespace-nowrap">
                <Icon name="sparkles" size={14} className="text-[#FF8C69]" />{" "}
                Dry Cleaning
              </div>
              <div className="absolute top-[42%] -right-8 bg-[#FFD166] rounded-2xl px-3.5 py-2.5 shadow-[0_4px_18px_rgba(0,0,0,0.08)] font-bold text-[13px] text-[#2A2A2A] flex items-center gap-2 whitespace-nowrap">
                <Icon name="zap" size={14} /> Ironing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats bar ─── */}
      <section className="bg-[#5BBFEF] py-7 px-6">
        <div className="max-w-4xl mx-auto flex justify-around flex-wrap gap-5">
          {STATS.map(([num, label]) => (
            <div key={label} className="text-center">
              <p className="font-bold text-[28px] text-white">{num}</p>
              <p className="text-[13px] text-white/80">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14 animate-fadeInUp">
          <h2 className="font-bold text-[36px] text-[#2A2A2A] dark:text-[#E6EDF3]">
            Why Lagos loves <span className="text-[#5BBFEF]">FreshFold</span>
          </h2>
          <p className="text-[#6B7280] dark:text-[#8B949E] text-[16px] mt-3">
            We make laundry the easiest part of your week
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
          {FEATURES.map((f, i) => (
            <div
              key={f.title}
              className="bg-[#FFF8EE] dark:bg-[#1A1F2E] rounded-3xl p-7 border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] hover:-translate-y-1.5 transition-transform animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#5BBFEF]/10 flex items-center justify-center mb-4">
                <Icon name={f.icon} size={22} className="text-[#5BBFEF]" />
              </div>
              <h3 className="font-bold text-[17px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-2">
                {f.title}
              </h3>
              <p className="text-[14px] text-[#6B7280] dark:text-[#8B949E] leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="bg-[#EEF7FD] dark:bg-[#111827] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-bold text-[34px] text-[#2A2A2A] dark:text-[#E6EDF3] text-center mb-12 animate-fadeInUp">
            What our customers say
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={t.name}
                className="bg-white dark:bg-[#161B22] rounded-3xl p-7 border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] shadow-[0_4px_16px_rgba(0,0,0,0.05)] animate-fadeInUp"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="star"
                      size={15}
                      className="text-[#FFD166]"
                      fill="#FFD166"
                    />
                  ))}
                </div>
                <p className="text-[14px] text-[#2A2A2A] dark:text-[#8B949E] leading-[1.75] mb-5 italic">
                  "{t.text}"
                </p>
                <p className="font-bold text-[14px] text-[#2A2A2A] dark:text-[#E6EDF3]">
                  {t.name}
                </p>
                <p className="text-[12px] text-[#6B7280] dark:text-[#8B949E]">
                  {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="bg-gradient-to-r from-[#5BBFEF] to-[#3A9ED4] py-16 px-6 text-center animate-fadeInUp">
        <h2 className="font-bold text-[34px] text-white mb-3">
          Ready for fresh, clean clothes?
        </h2>
        <p className="text-white/85 text-[16px] mb-8">
          Your first order gets 20% off. No catch — just clean laundry.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="flex items-center gap-2 mx-auto bg-[#FFD166] text-[#2A2A2A] font-bold text-[16px] px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Book Your First Pickup <Icon name="arrowRight" size={18} />
        </button>
      </section>
    </div>
  );
}
