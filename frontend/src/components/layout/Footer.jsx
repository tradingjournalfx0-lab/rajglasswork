import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-white mt-24">
      {/* Top */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

        {/* Company */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-12 h-12 rounded-xl bg-sky-600 flex items-center justify-center text-2xl font-bold">
              G
            </div>

            <div>
              <h2 className="text-2xl font-bold">GlassPro</h2>
              <p className="text-gray-400 text-sm">
                Premium Glass Solutions
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-7">
            We provide premium glass installation services for homes,
            offices, shops, partitions, railings, shower cubicles and
            commercial buildings.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <div className="flex flex-col gap-3">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Our Services</h3>

          <div className="space-y-2 text-gray-300">
            <p>Toughened Glass</p>
            <p>Glass Door</p>
            <p>Office Partition</p>
            <p>Spider Glazing</p>
            <p>Shower Cubicle</p>
            <p>Glass Railing</p>
            <p>ACP Work</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <div className="space-y-4">

            <div className="flex gap-3">
              <Phone className="text-sky-400" />
              <span>+91 9876543210</span>
            </div>

            <div className="flex gap-3">
              <Mail className="text-sky-400" />
              <span>glasspro@gmail.com</span>
            </div>

            <div className="flex gap-3">
              <MapPin className="text-sky-400" />
              <span>Deoria, Uttar Pradesh</span>
            </div>

          </div>

          {/* Social */}
          <div className="flex gap-4 mt-8">

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-pink-600 flex items-center justify-center transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-11 h-11 rounded-full bg-slate-800 hover:bg-red-600 flex items-center justify-center transition"
            >
              <FaYoutube />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">

          <p className="text-gray-400">
            © {year} GlassPro. All Rights Reserved.
          </p>

          <button
            onClick={scrollTop}
            className="w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 flex items-center justify-center"
          >
            <ArrowUp size={20} />
          </button>

        </div>
      </div>
    </footer>
  );
}