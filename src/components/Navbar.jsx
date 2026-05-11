import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Icon from "../icon/Icon";

const NAV_LINKS = [
  { label: "Home", key: "home", path: "/" },
  { label: "Services & Pricing", key: "services", path: "/services" },
  { label: "How It Works", key: "how", path: "/how-it-works" },
  { label: "Contact", key: "contact", path: "/contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-[#FFFDF7] dark:bg-[#0D1117] border-b-2 border-[#FFE8CC] dark:border-[#2A3040]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <button
          onClick={() => handleNav("/")}
          className="flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-full bg-[#5BBFEF] flex items-center justify-center">
            <Icon name="waves" size={18} color="#fff" strokeWidth={2.5} />
          </div>
          <span className="font-bold text-[20px] text-[#2A2A2A] dark:text-[#E6EDF3]">
            Fresh<span className="text-[#5BBFEF]">Fold</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.path)}
              className={`font-bold text-sm pb-0.5 border-b-2 transition-colors ${
                isActive(l.path)
                  ? "text-[#5BBFEF] border-[#5BBFEF]"
                  : "text-[#6B7280] dark:text-[#8B949E] border-transparent hover:text-[#5BBFEF] hover:border-[#5BBFEF]"
              }`}
            >
              {l.label}
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-[#FFF8EE] dark:bg-[#1A1F2E] border border-[#FFE8CC] dark:border-[#2A3040] hover:scale-110 transition-transform"
          >
            {theme === "light" ? (
              <Icon name="moon" size={16} className="text-[#6B7280]" />
            ) : (
              <Icon name="sun" size={16} className="text-[#FFD166]" />
            )}
          </button>

          <button
            onClick={() => handleNav("/contact")}
            className="bg-[#FF8C69] text-white font-bold text-sm px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Book Now
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-[#FFF8EE] dark:bg-[#1A1F2E] border border-[#FFE8CC] dark:border-[#2A3040]"
          >
            {theme === "light" ? (
              <Icon name="moon" size={15} className="text-[#6B7280]" />
            ) : (
              <Icon name="sun" size={15} className="text-[#FFD166]" />
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#2A2A2A] dark:text-[#E6EDF3] w-8 h-8 flex items-center justify-center"
          >
            {menuOpen ? (
              <Icon name="close" size={22} />
            ) : (
              <Icon name="menu" size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#FFFDF7] dark:bg-[#0D1117] border-t border-[#FFE8CC] dark:border-[#2A3040] px-6 pb-4">
          {NAV_LINKS.map((l) => (
            <button
              key={l.key}
              onClick={() => handleNav(l.path)}
              className={`block w-full text-left py-3 font-bold text-sm border-b border-[#FFE8CC] dark:border-[#2A3040] ${
                isActive(l.path)
                  ? "text-[#5BBFEF]"
                  : "text-[#6B7280] dark:text-[#8B949E] hover:text-[#5BBFEF]"
              }`}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav("/contact")}
            className="mt-4 w-full bg-[#FF8C69] text-white font-bold text-sm py-3 rounded-full"
          >
            Book Now
          </button>
        </div>
      )}
    </nav>
  );
}
