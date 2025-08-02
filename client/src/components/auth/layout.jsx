import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

function AuthLayout() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-football.mp4"
          alt="sport background"
          className="w-full h-full object-cover opacity-20 blur-sm"
        />
      </div>

      {/* Brand Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-8 text-center z-10"
      >
        <h1 className="text-4xl font-extrabold text-cyan-400 tracking-widest drop-shadow-lg">
          Sportex
        </h1>
        <p className="text-sm text-gray-400 mt-1">
          Play Bold. Play Fearless.
        </p>
      </motion.div>

      {/* Auth Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-black/40 backdrop-blur-lg border border-cyan-800 text-black p-8 rounded-2xl shadow-lg"
      >
        <Outlet />
      </motion.div>
    </div>
  );
}

export default AuthLayout;
