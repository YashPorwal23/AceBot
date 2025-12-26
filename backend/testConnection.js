import mongoose from "mongoose";

const uri = "mongodb+srv://deepyash415:AceBot123@cluster0.o1srbdu.mongodb.net/testdb?retryWrites=true&w=majority&appName=Cluster0";

console.log("⏳ Trying to connect...");

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connected successfully to MongoDB!");
    process.exit(0);
  })
  .catch(err => {
    console.error("❌ Connection failed:", err.message);
    process.exit(1);
  });
