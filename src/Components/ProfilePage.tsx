"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const ProfilePage = () => {

    const [data, setData] = useState("nothing");

    const router = useRouter();

    const logout = async () => { };

    const getUserDetails = async () => { };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl font-semibold mt-3 mb-8">
                Profile
            </h1>
        </div>
    )
};

export default ProfilePage;