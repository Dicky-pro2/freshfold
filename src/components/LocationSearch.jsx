import { useState, useEffect, useRef } from "react";
import Icon from "../icon/Icon";
import lagosLocations from "../data/LagosLocations";

const STORAGE_KEY = "freshfold-saved-location";

export default function LocationSearch({ value, onChange }) {
  const [query, setQuery] = useState(value || "");
  const [filtered, setFiltered] = useState([]);
  const [open, setOpen] = useState(false);
  const [savedLocation, setSavedLocation] = useState(null);
  const wrapperRef = useRef(null);

  // Load saved location from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSavedLocation(saved);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleInput = (e) => {
    const val = e.target.value;
    setQuery(val);
    onChange(val);
    setFiltered(
      val.length > 0
        ? lagosLocations.filter((l) =>
            l.toLowerCase().includes(val.toLowerCase()),
          )
        : [],
    );
    setOpen(true);
  };

  const handleSelect = (location) => {
    setQuery(location);
    onChange(location);
    setFiltered([]);
    setOpen(false);
    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, location);
    setSavedLocation(location);
  };

  const handleUseSaved = () => {
    handleSelect(savedLocation);
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Saved location banner */}
      {savedLocation && savedLocation !== query && (
        <button
          type="button"
          onClick={handleUseSaved}
          className="w-full flex items-center gap-2 mb-2 px-4 py-2.5 rounded-xl bg-[#5BBFEF]/10 dark:bg-[#5BBFEF]/5 border border-[#5BBFEF]/30 text-left hover:bg-[#5BBFEF]/15 transition-colors"
        >
          <Icon name="mapPin" size={15} className="text-[#5BBFEF] shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold text-[#5BBFEF] uppercase tracking-wide">
              Use saved location
            </p>
            <p className="text-[13px] text-[#2A2A2A] dark:text-[#E6EDF3] truncate">
              {savedLocation}
            </p>
          </div>
          <Icon
            name="arrowRight"
            size={14}
            className="text-[#5BBFEF] shrink-0"
          />
        </button>
      )}

      {/* Input */}
      <div className="relative">
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
          <Icon name="mapPin" size={16} className="text-[#6B7280]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={handleInput}
          onFocus={() => {
            if (filtered.length > 0) setOpen(true);
            if (!query) {
              setFiltered(lagosLocations.slice(0, 8));
              setOpen(true);
            }
          }}
          placeholder="Search your area in Lagos..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border-[1.5px] border-[#E5E7EB] dark:border-[#2A3040] bg-[#FFFDF7] dark:bg-[#0D1117] text-[#2A2A2A] dark:text-[#E6EDF3] text-[14px] outline-none focus:border-[#5BBFEF] transition-colors placeholder:text-[#9CA3AF]"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              onChange("");
              setFiltered([]);
              setOpen(false);
            }}
            className="absolute right-3.5 top-1/2 -translate-y-1/2"
          >
            <Icon
              name="close"
              size={15}
              className="text-[#9CA3AF] hover:text-[#6B7280]"
            />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && filtered.length > 0 && (
        <div className="absolute z-50 mt-1.5 w-full bg-white dark:bg-[#161B22] border-[1.5px] border-[#FFE8CC] dark:border-[#2A3040] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] overflow-hidden max-h-56 overflow-y-auto">
          {filtered.map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => handleSelect(location)}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#EBF5FD] dark:hover:bg-[#1A1F2E] transition-colors text-left border-b border-[#FFE8CC] dark:border-[#2A3040] last:border-none"
            >
              <Icon
                name="mapPin"
                size={14}
                className="text-[#5BBFEF] shrink-0"
              />
              <span className="text-[14px] text-[#2A2A2A] dark:text-[#E6EDF3]">
                {location}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
