import React from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg p-8">
        {/* Logo and Title */}
        <div className="text-center mb-6">
          <img
            src="logo_placeholder.png" // Replace with your actual logo image
            alt="Logo"
            className="mx-auto w-16 h-16 mb-4"
          />
          <h1 className="text-2xl font-bold text-white">Login to Descuss</h1>
        </div>

        {/* Login Form */}
        <form>
          {/* Username or Email */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">
              Username or email
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Username or email"
              />
              <span className="absolute right-3 top-2 text-gray-500">
                <i className="fas fa-user" />
              </span>
            </div>
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                className="w-full p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-red-600"
                placeholder="Password"
              />
              <span className="absolute right-3 top-2 text-gray-500">
                <i className="fas fa-eye-slash" />
              </span>
            </div>
            <div className="text-right mt-1">
              <a href="#" className="text-red-500 text-sm">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="remember-me"
              className="w-4 h-4 text-red-600 bg-gray-700 rounded focus:ring-red-600"
            />
            <label htmlFor="remember-me" className="ml-2 text-gray-400 text-sm">
              Remember Me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
          >
            Log In
          </button>
        </form>

        {/* Footer Links */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Do not have an account?{" "}
            <Link to="/signup" className="text-red-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
