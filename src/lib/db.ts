import mongoose from "mongoose";

export async function connectDB() {

    try {

        mongoose.connect(process.env.MONGO_URL!);

        const connection = mongoose.connection;

        connection.on("Connected", () => {

            console.log("MongoDB Connected Successfully");

        });

        connection.on("Error", (err) => {

            console.log("MongoDB Connection Error. Please Make Sure MongoDB Is Running... " + err);

            process.exit();

        });

    } catch (error) {

        console.log("Something Went Wrong!");

        console.log(error);

    }
};