import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {

    try {

        await connectDB();

        const reqBody = await request.json();

        const { username, email, password } = reqBody;

        const user = await User.findOne({ email });

        if (user) {

            return NextResponse.json({ error: "User Already Exists..." }, { status: 400 });

        }

        const salt = await bcryptjs.genSalt(10);

        const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();

        await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

        return NextResponse.json({
            message: "User Created Successfully...",
            success: true,
            savedUser
        });

    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 })

    }
};