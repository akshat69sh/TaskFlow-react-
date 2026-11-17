import connectDB from "./src/config/db.config.js";
import dotenv from "dotenv";
import app from "./src/app.js"


dotenv.config();


const PORT = process.env.PORT || 8000;



const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }

}

startServer();