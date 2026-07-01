import { Link } from "react-router-dom";

export default function Button({
  to,
  children,
  className = "",
}) {
  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-xl bg-sky-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-sky-700 ${className}`}
    >
      {children}
    </Link>
  );
}