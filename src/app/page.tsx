"use client";
import { useUserStore } from "@/store/user-store";

export default function Home() {
  const { user, update } = useUserStore();

  const handleUpdateUser = () => {
    const user = {
      id: 3,
      name: "Developer",
      email: "dev.gmail.com",
    };
    update(user);
  };

  return (
    <main className="flex flex-col justify-center items-center mt-8">
      <h1>Zustand State Managment</h1>
      <p>User: {JSON.stringify(user)}</p>
      <button onClick={handleUpdateUser} className="p-4 bg-blue-600 rounded-sm">
        Update User
      </button>
    </main>
  );
}
