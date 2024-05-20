"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");

  const validate = () => {
    const errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
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
    if (!confirmPassword) {
      errors.confirmPassword = "Confirm Password is required";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };

  async function onHandleSubmit (data) {
    try {

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      });
      console.log(res);
      res.status === 201 &&
        router.push("/login");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onHandleSubmit(JSON.stringify({
        name,
        email,
        password,
      }))
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-4/5 lg:w-2/3">
        <div
          className="hidden lg:block lg:w-1/2 bg-cover"
          style={{ backgroundImage: `url('/signup.png')` }}
        ></div>
        <div className="w-full p-8 lg:w-1/2">
        <div className="text-xl text-red-500 text-center">{error && error}</div>
          <h2 className="text-2xl font-bold text-gray-700 text-center">
            Sign Up
          </h2>
          <form className="mt-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your email"
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
                placeholder="Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Sign Up
              </button>
            </div>
          </form>
          <p className="mt-8 text-xs font-light text-center text-gray-400">
            {" "}
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
