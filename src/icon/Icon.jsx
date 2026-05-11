import { icons } from "./index";

export default function Icon({
  name,
  size = 20,
  color,
  className,
  strokeWidth = 2,
}) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }

  // Font Awesome icons (names starting with 'fa')
  if (name.startsWith("fa")) {
    return <IconComponent size={size} color={color} className={className} />;
  }

  // Lucide icons
  return (
    <IconComponent
      size={size}
      color={color}
      className={className}
      strokeWidth={strokeWidth}
    />
  );
}
