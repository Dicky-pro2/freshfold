import { useNavigate } from "react-router-dom";
import Icon from "../icon/Icon";

const WASH_FOLD = [
  ["Per KG (Regular)", "₦800/kg"],
  ["Per KG (Express 12hr)", "₦1,200/kg"],
  ["Bedsheets & Linens", "₦1,500/set"],
  ["Towels", "₦500 each"],
];

const DRY_CLEAN = [
  ["Suit (2-piece)", "₦4,500"],
  ["Suit (3-piece)", "₦5,500"],
  ["Dress / Gown", "₦3,000 – ₦6,000"],
  ["Traditional Attire", "₦3,500 – ₦7,000"],
  ["Blazer / Jacket", "₦2,500"],
];

const IRONING = [
  ["Shirts / Tops", "₦300 each"],
  ["Trousers / Skirts", "₦350 each"],
  ["Dress", "₦400 – ₦700"],
  ["Suits (per piece)", "₦600"],
  ["Bulk Bundle (10 items)", "₦2,500"],
];

const ADDONS = [
  ["Fabric softener", "₦200"],
  ["Stain treatment", "₦500+"],
  ["Scent booster", "₦300"],
  ["Hanger return", "Free"],
];

const SERVICES = [
  {
    icon: "package",
    title: "Wash & Fold",
    desc: "Your everyday clothes washed, dried, and neatly folded — ready to go straight into your wardrobe.",
    color: "text-[#5BBFEF]",
    bg: "bg-[#5BBFEF]/10",
    btnClass:
      "bg-[#5BBFEF] text-white shadow-[0_6px_20px_rgba(91,191,239,0.3)]",
    priceColor: "text-[#5BBFEF]",
    items: WASH_FOLD,
  },
  {
    icon: "sparkles",
    title: "Dry Cleaning",
    desc: "Professional dry cleaning for suits, gowns, traditional attire, and delicate fabrics.",
    color: "text-[#FF8C69]",
    bg: "bg-[#FF8C69]/10",
    btnClass:
      "bg-[#FF8C69] text-white shadow-[0_6px_20px_rgba(255,140,105,0.3)]",
    priceColor: "text-[#FF8C69]",
    items: DRY_CLEAN,
  },
  {
    icon: "zap",
    title: "Ironing Only",
    desc: "Already washed? We'll iron your clothes to perfection and have them back crisp and ready.",
    color: "text-[#A78BFA]",
    bg: "bg-[#A78BFA]/10",
    btnClass:
      "bg-[#A78BFA] text-white shadow-[0_6px_20px_rgba(167,139,250,0.3)]",
    priceColor: "text-[#A78BFA]",
    items: IRONING,
  },
];

function PriceTable({ items, priceColor }) {
  return (
    <div className="bg-[#FFFDF7] dark:bg-[#0D1117] rounded-2xl p-5 border border-[#FFE8CC] dark:border-[#2A3040]">
      <p className="font-bold text-[11px] text-[#6B7280] uppercase tracking-widest mb-4">
        Pricing
      </p>
      {items.map(([label, price], i) => (
        <div
          key={label}
          className={`flex justify-between items-center py-3 ${
            i !== items.length - 1
              ? "border-b border-[#FFE8CC] dark:border-[#2A3040]"
              : ""
          }`}
        >
          <span className="text-[14px] text-[#2A2A2A] dark:text-[#8B949E]">
            {label}
          </span>
          <span className={`font-bold text-[14px] ${priceColor}`}>{price}</span>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const navigate = useNavigate();
  return (
    <div>
      {/* ─── Header ─── */}
      <section className="bg-gradient-to-br from-[#EBF5FD] to-[#FFFDF7] dark:from-[#0D1117] dark:to-[#111827] px-6 py-16 text-center animate-fadeInUp">
        <h1 className="font-bold text-[42px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-3">
          Services & <span className="text-[#5BBFEF]">Pricing</span>
        </h1>
        <p className="text-[#6B7280] dark:text-[#8B949E] text-[16px] max-w-md mx-auto">
          Simple, transparent pricing. No surprises, no hidden fees ever.
        </p>
      </section>

      {/* ─── Service cards ─── */}
      <section className="max-w-5xl mx-auto px-6 py-16 flex flex-col gap-6">
        {SERVICES.map((s, i) => (
          <div
            key={s.title}
            className="bg-white dark:bg-[#161B22] rounded-3xl border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] shadow-[0_4px_20px_rgba(0,0,0,0.05)] p-8 flex gap-10 flex-wrap animate-fadeInUp"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {/* Left */}
            <div className="flex-1 min-w-[200px] flex flex-col justify-between gap-6">
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-5`}
                >
                  <Icon name={s.icon} size={26} className={s.color} />
                </div>
                <h2 className="font-bold text-[24px] text-[#2A2A2A] dark:text-[#E6EDF3] mb-3">
                  {s.title}
                </h2>
                <p className="text-[14px] text-[#6B7280] dark:text-[#8B949E] leading-relaxed">
                  {s.desc}
                </p>
              </div>
              <button
                onClick={() =>
                  navigate("/contact", { state: { selectedService: s.title } })
                }
                className={`flex items-center gap-2 self-start cursor-pointer font-bold text-[14px] px-6 py-3 rounded-full hover:opacity-90 transition-opacity ${s.btnClass}`}
              >
                Book This Service <Icon name="arrowRight" size={15} />
              </button>
            </div>

            {/* Right */}
            <div className="flex-[2] min-w-[260px]">
              <PriceTable items={s.items} priceColor={s.priceColor} />
            </div>
          </div>
        ))}

        {/* ─── Add-ons ─── */}
        <div
          className="bg-[#FFD166]/10 dark:bg-[#FFD166]/5 rounded-3xl border-[1.5px] border-[#FFD166]/50 dark:border-[#FFD166]/20 p-8 animate-fadeInUp"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#FFD166]/20 flex items-center justify-center">
              <Icon name="sparkles" size={22} className="text-[#9A6F0A]" />
            </div>
            <h3 className="font-bold text-[20px] text-[#2A2A2A] dark:text-[#E6EDF3]">
              Add-ons & Special Requests
            </h3>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
            {ADDONS.map(([label, price]) => (
              <div
                key={label}
                className="bg-white dark:bg-[#161B22] rounded-2xl px-4 py-3 flex justify-between items-center border border-[#FFE8CC] dark:border-[#2A3040]"
              >
                <span className="text-[13px] text-[#2A2A2A] dark:text-[#8B949E]">
                  {label}
                </span>
                <span className="font-bold text-[13px] text-[#9A6F0A] dark:text-[#FFD166]">
                  {price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="bg-gradient-to-r from-[#5BBFEF] to-[#3A9ED4] py-16 px-6 text-center">
        <h2 className="font-bold text-[32px] text-white mb-3">
          Not sure which service you need?
        </h2>
        <p className="text-white/85 text-[15px] mb-8">
          Chat with us on WhatsApp and we'll figure it out together.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="flex items-center gap-2 cursor-pointer mx-auto bg-[#FFD166] text-[#2A2A2A] font-bold text-[15px] px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Talk to Us <Icon name="messageCircle" size={18} />
        </button>
      </section>
    </div>
  );
}
