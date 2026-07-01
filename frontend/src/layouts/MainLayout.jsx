import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ScrollTop from "../components/layout/ScrollTop";
import WhatsAppButton from "../components/layout/WhatsAppButton";
import ScrollProgress from "../components/layout/ScrollProgress";

export default function MainLayout() {
  return (
    <>
    <ScrollProgress />
      <ScrollTop />

      <Navbar />

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}