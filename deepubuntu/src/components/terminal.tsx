"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  "DeepUbuntuAV Data Processing",
  "> Initializing DeepUbuntuAV Data Platform...",
  "> Loading sensor fusion modules...",
  "> Processing real-world terrain datasets...",
  "> Analyzing challenging traffic scenarios...",
  "> Generating synthetic Unity environments...",
  "> Validating perception algorithms...",
  "> Dataset status: VALIDATION COMPLETE",
  "> Next-generation AV training data ready for deployment█",
];

export default function TerminalSection() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, terminalLines[i]]);
      i++;
      if (i >= terminalLines.length) clearInterval(interval);
    }, 2000); // each line appears every second
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-2xl bg-black text-white-400 font-mono p-6 shadow-xl border border-neutral-800">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="space-y-2"
      >
        {visibleLines.map((line, idx) => (
          <motion.p
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.3 }}
            className="whitespace-pre-wrap"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
