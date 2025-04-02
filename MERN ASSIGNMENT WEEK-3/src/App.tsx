"use client"

import TextUpdater from "./Component/text-updater"
import SimpleForm from "./Component/simple-form"
import UserCard from "./Component/user-card"
import CustomButton from "./Component/custom-button"
import LoginForm from "./Component/login-form"

export default function Home() {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold mb-6">React.js Assignment</h1>

      <section className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">1. Text Updater</h2>
        <TextUpdater />
      </section>

      <section className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">2. Simple Form</h2>
        <SimpleForm />
      </section>

      <section className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">3. User Card</h2>
        <UserCard  />
      </section>

      <section className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">4. Custom Button</h2>
        <CustomButton />
      </section>

      <section className="p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">5. Login Form</h2>
        <LoginForm />
      </section>
    </main>
  )
}


