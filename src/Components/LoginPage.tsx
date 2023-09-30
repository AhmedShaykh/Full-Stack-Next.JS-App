"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const LoginPage = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const [buttonDisabled, setButtonDisabled] = useState(false);

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const onLogin = async () => { };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                {loading ? "Processing" : "Login"}
            </h1>

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
                onClick={onLogin}
            >
                Login
            </button>

            <Link href="/register" className="text-blue-700 text-xl cursor-pointer mt-3">
                Visit Register Page
            </Link>
        </div>
    )
};

export default LoginPage;