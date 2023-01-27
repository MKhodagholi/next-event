export default function Button({
  className,
  children,
  onClick,
  disabled,
  ...props
}) {
  return (
    <button
      className={`flex p-2 rounded-md bg-teal-500 text-white ${className} [&>*]:w-full`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
