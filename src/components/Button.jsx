const Button = ({
  children,
  variant = "primary",
  outline = false,
  onClick,
}) => {
  const colors = {
    primary: "#062340",
    secondary: "#16a085",
    text: "#4a4a4a",
    bg: "#d9d7d7",
    accent: "#e74c3c",
  };

  const bgColor = outline ? "transparent" : colors[variant];
  const textColor = outline ? colors[variant] : "#ffffff";
  const borderColor = colors[variant];

  return (
    <button
      onClick={onClick}
      className={`w-full md:w-auto px-20 py-3 rounded-xl font-semibold 
        transition-all duration-300 border-2
        ${outline ? "bg-transparent" : ""}
        hover:brightness-110 active:scale-95
      `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderColor: borderColor,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
