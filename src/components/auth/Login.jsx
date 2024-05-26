"use client";
import { login } from "@/app/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const router = useRouter();

  const validate = () => {
    const errors = {};
    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email address is invalid";
    }
    if (!password) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  async function onHanldeSubmit(data) {

    try {
      const response = await login(data);
      if (!!response.error) {
        setError(response.error);
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onHanldeSubmit({email, password})
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-3/4 lg:w-1/2">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover min-h-[450px]"
          style={{ backgroundImage: `url('/login.png')` }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
          {error && (
            <div className="text-xl text-red-500 text-center">{error}</div>
          )}
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Login
          </h2>
          <div className="mt-4">
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mt-6">
              <button
                onClick={handleSubmit}
                className="w-full px-4 py-2 tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Login
              </button>
            </div>
          </div>
          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
