"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const RegisterPage = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const onSignup = async () => { };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                {loading ? "Processing" : "Signup"}
            </h1>

            <label
                className="text-xl font-medium my-2"
                htmlFor="username"
            >
                Username:
            </label>
            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="username"
                type="text"
                placeholder="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />

            <label
                className="text-xl font-medium my-2"
                htmlFor="email"
            >
                Email:
            </label>
            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="email"
                type="text"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="email"
            />

            <label
                className="text-xl font-medium my-2"
                htmlFor="password"
            >
                Password:
            </label>
            <input
                className="p-2 w-[40%] border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                id="password"
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="password"
            />

            <button
                className="py-2 px-5 rounded-lg my-4 font-bold text-black bg-white cursor-pointer"
                onClick={onSignup}
            >
                {buttonDisabled ? "No Signup" : "Signup"}
            </button>

            <Link href="/login" className="text-blue-700 text-xl cursor-pointer mt-3">
                Visit Login Page
            </Link>
        </div>
    )
};

export default RegisterPage;