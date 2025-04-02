"use client"

import { useState, type FormEvent } from "react"

export default function SimpleForm() {
  const [inputValue, setInputValue] = useState("")

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("Form submitted with value:", inputValue)
    // You can add an alert here to show the user that something happened
    alert(`Form submitted with: ${inputValue}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="form-input" className="text-sm font-medium">
          Input value:
        </label>
        <input
          id="form-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="px-3 py-2 border rounded-md"
          placeholder="Enter value..."
        />
      </div>

      <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
        Submit
      </button>
    </form>
  )
}

