interface LogoProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "light" | "dark";
}

export const Logo = ({ size = "md", color = "primary" }: LogoProps) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const colorClasses = {
    primary: "fill-current text-primary",
    light: "fill-current text-black",
    dark: "fill-current text-white",
  };

  return (
    <svg
      className={`${sizeClasses[size]} ${colorClasses[color]}`}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 102.4C56.554 102.4 102.4 56.554 102.4 0H153.6V102.4H256V153.6C199.446 153.6 153.6 199.446 153.6 256H102.4V153.6H0V102.4Z" />
    </svg>
  );
};
