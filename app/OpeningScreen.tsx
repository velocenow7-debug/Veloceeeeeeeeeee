import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function OpeningScreen() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="opening-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/logo2.svg"
            alt="Logo"
            className="logo"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{
              scale: [0.4, 1.05, 1],
              opacity: 1
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut"
            }}
          />

          {/* Glow pulse */}
          <motion.div
            className="glow"
            animate={{ opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}