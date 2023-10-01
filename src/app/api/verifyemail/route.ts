import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";

export async function POST(request: NextRequest) {

    try {

        await connectDB();

        const reqBody = await request.json();

        const { token } = reqBody;

        const user = await User.findOne({ verifyToken: token, verifyTokenExpiry: { $gt: Date.now() } });

        if (!user) {

            return NextResponse.json({ error: "Invalid Token" }, { status: 400 });

        }

        user.isVerfied = true;

        user.verifyToken = undefined;

        user.verifyTokenExpiry = undefined;

        await user.save();

        return NextResponse.json({
            message: "Email Verified Successfully...",
            success: true
        });

    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 })

    }

};