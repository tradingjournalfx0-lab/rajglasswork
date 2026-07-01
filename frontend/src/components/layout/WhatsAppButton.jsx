import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phone = "919876543210"; // Replace with your WhatsApp number

  return (
    <motion.a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Pulse Ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

      {/* Main Button */}
      <div className="relative h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl flex items-center justify-center transition-all duration-300">
        <MessageCircle size={32} className="text-white" />
      </div>

      {/* Online Dot */}
      <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-lime-400 border-2 border-white"></span>

      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 text-sm text-white opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 group-hover:right-24">
        💬 Chat With Us
      </div>
    </motion.a>
  );
}