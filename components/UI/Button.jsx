export default function Button({
  className,
  children,
  onClick,
  disabled,
  ...props
}) {
  return (
    <button
      className={`p-2 rounded-md bg-teal-500 text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
