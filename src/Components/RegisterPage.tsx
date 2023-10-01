"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const RegisterPage = () => {

    const [username, setUsername] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const router = useRouter();

    const onSignup = async () => {

        try {

            await fetch("/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            toast.success("User Rigister Success...");

            router.push("/login");

        } catch (error: any) {

            console.log("User Rigister Failed", error.message);

            toast.error(error.message);

        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                Register
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
                onChange={(e) => setUsername(e.target.value)}
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
                onClick={onSignup}
            >
                Signup
            </button>

            <Link href="/login" className="text-blue-700 text-xl cursor-pointer mt-3">
                Visit Login Page
            </Link>

            <Toaster />
        </div>
    )
};

export default RegisterPage;