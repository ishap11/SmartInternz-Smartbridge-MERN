"use client"

import { motion } from "framer-motion"

interface UserCardProps {
  name: string
  email: string
}

const users: UserCardProps[] = [
  { name: "Isha Prajatapi", email: "alice@example.com" },
  { name: "Isha Prajatapi", email: "bob@example.com" },
  { name: "Isha Prajatapi", email: "charlie@example.com" },
  { name: "Isha Prajatapi", email: "david@example.com" },

]

// Different background gradient styles
const bgColors = [
  "bg-gradient-to-r from-blue-500 to-indigo-500",
  "bg-gradient-to-r from-green-400 to-teal-500",
  "bg-gradient-to-r from-purple-500 to-pink-500",
  "bg-gradient-to-r from-orange-400 to-red-500",
  
]

// Different hover animations
const animations = [
  { y: [0, -10, 0] }, // Bounce
  { rotate: [0, 5, -5, 5, 0] }, // Wobble
  { scale: [1, 1.1, 0.9, 1.05, 1] }, // Pop
  { opacity: [0.5, 1, 0.5] }, // Fade
  { x: [-10, 10, -10, 10, 0] }, // Shake
]

export default function UserCardList() {
  return (
    <div className="flex flex-wrap gap-4   min-s-screen bg-gray-100 p-5">
      {users.map((user, index) => (
        <motion.div
          key={index}
          whileHover={animations[index]}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className={`max-w-xs p-6 text-white border rounded-lg shadow-lg ${bgColors[index]} transform hover:scale-105 transition-all`}
        >
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">{user.name.charAt(0)}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">{user.name}</h3>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
