"use client"

import { useState } from "react"

export default function TextUpdater() {
  const [text, setText] = useState("")

  return (
    <div className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="text-input" className="text-sm font-medium">
          Enter some text:
        </label>
        <input
          id="text-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-3 py-2 border rounded-md"
          placeholder="Type something..."
        />
      </div>

      <div className="p-4 border rounded-md bg-gray-50">
        <p className="font-medium">Display:</p>
        <p>{text || "Nothing typed yet"}</p>
      </div>
    </div>
  )
}

