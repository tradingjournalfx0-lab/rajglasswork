import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">

      <h1 className="text-8xl font-bold">404</h1>

      <p className="mt-4 text-gray-600">

        Page Not Found

      </p>

      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-lg bg-blue-600 text-white"
      >
        Go Home
      </Link>

    </div>
  );
}