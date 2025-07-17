import React from "react";
import { motion } from "framer-motion";
import hanslg from "../assets/images/hanslg.png";

export default function BrandedLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#fefcf9]">
      <motion.img
        src={hanslg}
        alt="Hans Organic Shea Butter Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-24 h-24 mb-4"
      />
      <motion.p
        className="text-[#836953] text-xl font-medium tracking-wide"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        Nourishing your skin... Please wait
      </motion.p>
    </div>
  );
}
