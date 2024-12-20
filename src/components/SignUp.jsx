/* eslint-disable jsx-a11y/anchor-is-valid */
// SignupPage.js
import React from "react";
import { eyeIcon, facebookIcon, googleIcon, linkdinIcon, lockIcon, mailIcon, userircleIcon, userLeftIcon, userRightIcon } from "../utils/Icons";
import descussLogo from "../assets/images/descussLogo.png";
import { Link } from 'react-router-dom';
const Signup = () => {
    return (
        <div className="bg-gradient-to-r from-black font-inter to-gray-900 min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-8 rounded-lg shadow-lg">
                    {/* Left Section */}
                    <div className="text-white p-8">

                        <div className="flex items-center mb-8">
                            <img
                                src={descussLogo}
                                alt="Discussion Logo"
                                className="w-10 h-8 mr-3" /* Adjust width and height as needed */
                            />
                            <p className="text-xl md:text-2xl font-Rubik-Mono-One font-medium">
                                DESCUSS
                            </p>
                        </div>

                        <h1 className="text-4xl md:text-[56px] leading-none font-bold mb-4">
                            Stay Informed, <br /> Stay Connected
                        </h1>
                        <p className="text-lg mb-8">
                            Create discussion boards for any webpage. Your voice, your platform,
                            your conversation.
                        </p>
                        <div className="flex">
                            <img
                                src={descussLogo}
                                alt="Discussion Icon"
                                className="mt-24"
                            />
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg border border-[#FFFFFF0F] shadow-lg">
                        <h2 className="text-white text-base text-center mb-4">Register with:</h2>
                        <div className="flex space-x-4 mb-4">
                            <button className="flex items-center text-sm justify-center gap-3 border border-[#FFFFFF0F] text-white py-2 px-4 rounded w-1/3">
                                {googleIcon}
                                Google
                            </button>
                            <button className="flex items-center text-sm justify-center gap-3 border border-[#FFFFFF0F] text-white py-2 px-4 rounded w-1/3">
                                {facebookIcon}
                                Facebook
                            </button>
                            <button className="flex items-center text-sm justify-center gap-3 border border-[#FFFFFF0F] text-white py-2 px-4 rounded w-1/3">
                                {linkdinIcon}
                                LinkedIn
                            </button>
                        </div>

                        <div className="flex items-center my-4">
                            <hr className="flex-grow border-[#FFFFFF14]" />
                            <p className="text-[#FFFFFF] mx-4">or</p>
                            <hr className="flex-grow border-[#FFFFFF14]" />
                        </div>

                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col">
                                    <label htmlFor="first-name" className="text-white mb-2">First Name</label>
                                    <div className="flex items-center bg-gray-700 rounded p-2">
                                        <span className="text-gray-400 mr-2">
                                            {userLeftIcon}
                                        </span>
                                        <input
                                            id="first-name"
                                            type="text"
                                            placeholder="First Name"
                                            className="bg-gray-700 w-full text-sm text-[#FFFFFF52] focus:outline-none placeholder-gray-400"
                                        />

                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="last-name" className="text-white mb-2">Last Name</label>
                                    <div className="flex items-center bg-gray-700 rounded p-2">
                                        <span className="text-gray-400 mr-2">
                                            {userRightIcon}
                                        </span>
                                        <input
                                            id="last-name"
                                            type="text"
                                            placeholder="Last Name"
                                            className="bg-gray-700 text-sm text-white w-full focus:outline-none placeholder-gray-400"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="username" className="text-white mb-2">Username</label>
                                <div className="flex items-center bg-gray-700 rounded p-2">
                                    <span className="text-gray-400 mr-2">
                                        {userircleIcon}
                                    </span>
                                    <input
                                        id="username"
                                        type="text"
                                        placeholder="Username"
                                        className="bg-gray-700 text-sm text-white w-full focus:outline-none placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">

                                <label htmlFor="email" className="text-white mb-2">Email</label>
                                <div className="flex items-center bg-gray-700 rounded p-2">
                                    <span className="text-gray-400 mr-2">
                                        {mailIcon}
                                    </span>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                        className="bg-gray-700 text-sm text-white w-full focus:outline-none placeholder-gray-400"
                                    />
                                </div>
                            </div>

                            <div className="flex w-full flex-col mt-4">
                                <label htmlFor="password" className="text-white mb-2">Password</label>
                                <div className="flex justify-between items-center bg-gray-700 rounded">
                                    <div className="flex items-center bg-gray-700 rounded p-2">
                                        <span className="text-gray-400 mr-2">
                                            {lockIcon}
                                        </span>
                                        <input
                                            id="password"
                                            type="password"
                                            placeholder="Password"
                                            className="bg-gray-700 text-sm text-white w-full focus:outline-none placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="mr-4 cursor-pointer">
                                        {eyeIcon}
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col mt-4">
                                <label htmlFor="confirm-password" className="text-white mb-2">Confirm Password</label>
                                <div className="flex justify-between items-center bg-gray-700 rounded">
                                    <div className="flex items-center bg-gray-700 rounded p-2">
                                        <span className="text-gray-400 mr-2">
                                            {lockIcon}
                                        </span>
                                        <input
                                            id="confirm-password"
                                            type="password"
                                            placeholder="Confirm Password"
                                            className="bg-gray-700 text-sm text-white w-full focus:outline-none  placeholder-gray-400"
                                        />
                                    </div>

                                    <div className="mr-4 cursor-pointer">
                                        {eyeIcon}
                                    </div>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#D10000] text-white py-2 px-4 rounded mt-4"
                            >
                                Sign Up
                            </button>
                        </form>


                        <p className="text-[#8996A9] text-sm mt-4">
                            By creating an account, you agree to the{" "}
                            <a href="#" className="text-[#FFFFFF] underline underline-offset-4">
                                Terms of Service
                            </a>
                            . We'll occasionally send you account-related emails.
                        </p>

                        <p className="text-[#FFFFFF] text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/" className="text-[#D10000] font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
