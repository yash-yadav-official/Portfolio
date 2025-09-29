import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import InteractiveParticleExplosion from "./InteractiveParticleExplosion";

export default function AppLayout({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <InteractiveParticleExplosion
            key="splash"
            onFinish={() => setShowSplash(false)}
          />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}

