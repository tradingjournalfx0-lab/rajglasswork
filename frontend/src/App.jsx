import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return <AppRoutes />;
}