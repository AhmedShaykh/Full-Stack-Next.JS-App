"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Email = () => {

    const [token, setToken] = useState("");

    const [verified, setVerified] = useState(false);

    const [error, setError] = useState(false);

    const verifyUserEmail = async () => {

        try {

            await fetch("/api/verifyemail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    token
                })
            });

            setVerified(true);

        } catch (error: any) {

            setError(true);

            console.log(error.reponse.data);

        }
    };

    useEffect(() => {

        const urlToken = window.location.search.split("=")[1];

        setToken(urlToken || "");

    }, []);

    useEffect(() => {

        if (token.length > 0) {

            verifyUserEmail();

        }

    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify Email</h1>

            <h2 className="p-2 bg-cyan-700 rounded-md text-black my-6 font-semibold">
                {token ? `${token}` : "No Token"}
            </h2>

            {verified && (
                <div className="flex justify-center flex-col items-center gap-3">
                    <h2 className="text-2xl">Email Verified</h2>

                    <Link
                        className="text-xl p-3 bg-white text-black font-bold rounded-lg"
                        href="/login"
                    >
                        Login
                    </Link>
                </div>
            )}
            {error && (
                <div className="flex justify-center">
                    <h2 className="text-2xl bg-red-500 text-black">Error</h2>
                </div>
            )}
        </div>
    )
};

export default Email;