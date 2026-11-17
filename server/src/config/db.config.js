import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MongoDB_URL = process.env.DATABASE_URL;

const connectDB = async () => {
  if (!MongoDB_URL) {
    console.log(`Mongo DB connection URL is empty`);
    
  }

  try {
    const connection = await mongoose.connect(MongoDB_URL, {
      serverSelectionTimeoutMS: 10000,
    });


    console.log(`MongoDB Connected: ${connection.connection.host}`);



  } catch (error) {
    console.log(`Error While connection to Mongo DB`)
  }


}


export default connectDB;