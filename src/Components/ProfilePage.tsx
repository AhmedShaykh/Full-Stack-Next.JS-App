"use client";
import React from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const ProfilePage = () => {

    const router = useRouter();

    const logOut = async () => {

        try {

            await fetch("/api/logout");

            toast.success("User Log Out...");

            router.push("/login");

        } catch (error: any) {

            console.log(error.message);

            toast.error(error.message);

        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                Profile
            </h1>

            <button
                className="py-2 px-5 rounded-lg my-4 font-bold text-black bg-white cursor-pointer"
                onClick={logOut}
            >
                Log Out
            </button>
        </div >
    )
};

export default ProfilePage;