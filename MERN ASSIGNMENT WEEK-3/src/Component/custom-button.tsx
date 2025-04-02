"use client"

import { motion } from "framer-motion"

export default function CustomButton() {
  const buttons = [
    {
      label: "Bounce",
      animation: { y: [0, -10, 0] },
      style: "bg-blue-500 hover:bg-blue-600",
    },
    {
      label: "Shake",
      animation: { x: [0, -5, 5, -5, 5, 0] },
      style: "bg-green-500 hover:bg-green-600",
    },
    {
      label: "Spin",
      animation: { rotate: [0, 360] },
      style: "bg-red-500 hover:bg-red-600",
    },
    {
      label: "Wobble",
      animation: { scale: [1, 1.2, 0.9, 1.1, 1] },
      style: "bg-purple-500 hover:bg-purple-600",
    },
    {
      label: "Wave",
      animation: { rotate: [0, 10, -10, 10, 0] },
      style: "bg-yellow-500 hover:bg-yellow-600",
    },
  ]

  return (
    <div className="flex  gap-4 p-5 bg-gray-100 min-s-screen items-center">
      {buttons.map((btn, index) => (
        <motion.button
          key={index}
          onClick={() => console.log(`${btn.label} Button Clicked!`)}
          whileHover={btn.animation}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className={`px-6 py-3 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all ${btn.style}`}
        >
          {btn.label}
        </motion.button>
      ))}
    </div>
  )
}
