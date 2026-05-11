import { useTheme } from "../context/ThemeContext";
import Icon from "../icon/Icon";

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ];

  const services = ["Wash & Fold", "Dry Cleaning", "Ironing Only"];

  const contact = [
    { icon: "phone", text: "+234 812 345 6789" },
    { icon: "mail", text: "hello@freshfold.ng" },
    { icon: "mapPin", text: "Lagos, Nigeria" },
  ];

  return (
    <footer className="bg-[#2A2A2A] dark:bg-[#0D1117] text-white border-t border-[#3A3A3A] dark:border-[#1A1F2E]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12 animate-fadeInUp">
          {/* Brand */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-full bg-[#5BBFEF] flex items-center justify-center">
                <Icon name="waves" size={16} color="#fff" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-[18px]">
                Fresh<span className="text-[#5BBFEF]">Fold</span>
              </span>
            </div>
            <p className="text-[13px] text-white/70 leading-relaxed">
              Making laundry easy for Lagos. Fresh clothes, zero stress.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold text-[14px] mb-4 text-[#5BBFEF]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/70 hover:text-[#5BBFEF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold text-[14px] mb-4 text-[#5BBFEF]">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[13px] text-white/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <h4 className="font-bold text-[14px] mb-4 text-[#5BBFEF]">
              Contact
            </h4>
            <ul className="space-y-3">
              {contact.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon
                    name={item.icon}
                    size={14}
                    className="text-[#5BBFEF] mt-1 shrink-0"
                  />
                  <span className="text-[13px] text-white/70">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div
          className="flex justify-center gap-4 mb-8 pb-8 border-b border-[#3A3A3A] dark:border-[#1A1F2E] animate-fadeInUp"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#5BBFEF]/20 flex items-center justify-center hover:bg-[#5BBFEF]/40 transition-colors group"
          >
            <Icon
              name="faFacebook"
              size={16}
              className="text-[#5BBFEF] group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#5BBFEF]/20 flex items-center justify-center hover:bg-[#5BBFEF]/40 transition-colors group"
          >
            <Icon
              name="faInstagram"
              size={16}
              className="text-[#5BBFEF] group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#5BBFEF]/20 flex items-center justify-center hover:bg-[#5BBFEF]/40 transition-colors group"
          >
            <Icon
              name="faTwitter"
              size={16}
              className="text-[#5BBFEF] group-hover:scale-110 transition-transform"
            />
          </a>
          <a
            href="https://wa.me/2348123456789"
            className="w-10 h-10 rounded-full bg-[#5BBFEF]/20 flex items-center justify-center hover:bg-[#5BBFEF]/40 transition-colors group"
          >
            <Icon
              name="faWhatsapp"
              size={16}
              className="text-[#5BBFEF] group-hover:scale-110 transition-transform"
            />
          </a>
        </div>

        {/* Bottom */}
        <div
          className="text-center animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-[12px] text-white/50">
            © {currentYear} FreshFold. All rights reserved. Made with ❤️ in
            Lagos.
          </p>
        </div>
      </div>
    </footer>
  );
}
