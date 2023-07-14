const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

const photoCloud = async () => {
  await cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
  });
};

module.exports = {
  connectDB,
  photoCloud,
};
