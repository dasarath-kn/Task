import mongoose from "mongoose";
const dbUrl = "mongodb://127.0.0.1:27017/User"
const connectDB = async () => {
  try {
    const connect = await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
    });
    if (connect) {
      console.log(`Database Connected`);

    }
  } catch (error) {
    console.error(error.message);
  }
}
export default connectDB