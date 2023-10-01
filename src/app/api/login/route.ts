import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function POST(request: NextRequest) {

    try {

        await connectDB();

    } catch (error: any) {

        return NextResponse.json({ error: error.message }, { status: 500 })

    }

};