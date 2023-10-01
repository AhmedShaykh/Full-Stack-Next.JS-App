"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const LoginPage = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const router = useRouter();

    const onLogin = async () => {

        try {

            await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            toast.success("User Login Success...");

            router.push("/");

        } catch (error: any) {

            console.log("User Login Failed", error.message);

            toast.error(error.message);

        }

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                Login
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
                type="email"
                placeholder="email"
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
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

            <Toaster />
        </div>
    )
};

export default LoginPage;