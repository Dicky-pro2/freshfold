import { icons } from "./index";

export default function Icon({ name, size = 20, color, className, strokeWidth = 2 }) {
  const LucideIcon = icons[name];

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  return (
    <LucideIcon
      size={size}
      color={color}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}