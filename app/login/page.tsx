/*"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ADMIN_CREDENTIALS, INTERN_CREDENTIALS } from "@/lib/authConfig";
import { useAuth } from "@/app/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (
      email === ADMIN_CREDENTIALS.email &&
      password === ADMIN_CREDENTIALS.password
    ) {
      login("admin");
      router.push("/admin/dashboard");
      return;
    }

    if (
      email === INTERN_CREDENTIALS.email &&
      password === INTERN_CREDENTIALS.password
    ) {
      login("intern");
      router.push("/intern/dashboard");
      return;
    }

    setError("Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="bg-white p-8 rounded-xl w-full max-w-md space-y-4 shadow">
        <h2 className="text-2xl font-bold">Login</h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-black text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
*/

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email || !password || !role) {
      setError("Please fill all fields");
      return;
    }

    if (role === "intern") router.push("/intern/dashboard");
    if (role === "student") router.push("/student/dashboard");
    if (role === "instructor") router.push("/instructor/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow w-full max-w-md space-y-4">

        <h2 className="text-2xl font-bold text-center">Brain Train Login</h2>

        <input
          className="w-full border p-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-3 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="w-full border p-3 rounded"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="intern">Intern</option>
          <option value="student">Student</option>
          <option value="instructor">Instructor</option>
        </select>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full bg-blue-700 text-white py-3 rounded hover:bg-blue-800"
        >
          Login
        </button>

      </div>
    </div>
  );
}
