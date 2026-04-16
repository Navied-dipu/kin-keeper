"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">

        {/* Animated 404 */}
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-7xl md:text-9xl font-extrabold text-primary"
        >
          404
        </motion.h1>

        {/* Floating message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl font-semibold"
        >
          Oops! Page not found 🚧
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 max-w-md mx-auto"
        >
          The page you are looking for might have been removed, renamed, or does not exist.
        </motion.p>

        {/* Animated button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/">
            <button className="btn btn-primary btn-wide hover:scale-105 transition-transform">
              Go Back Home 🏠
            </button>
          </Link>
        </motion.div>

        {/* Floating dots animation */}
        <div className="flex justify-center gap-2 mt-6">
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-primary rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    </div>
  );
}