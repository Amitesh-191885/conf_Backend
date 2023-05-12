import app from "./app.js";
import dotenv from "dotenv";
import connectDB from "./config/conectDB.js";
dotenv.config();

// const PORT = process.env.PORT || 5000;
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1)
  })
  
  //Connect to the database before listening
  connectDB()
  const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
  })
  
  //Handling Unhandled Promise Rejection
  process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
      process.exit(1)
    })
  })
