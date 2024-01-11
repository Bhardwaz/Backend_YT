import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import { app } from "../app.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );

    console.log(`CONNECTED TO DATABASE, ${connectionInstance.connection.host}`);
    // console.log(connectionInstance);

    app.on("error", (error) => {
      console.log("ERR Not able to talk to database", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("ERROR IN CONNECTING WITH DATABASE", error);
    process.exit(1);
  }
};
export default connectDB;
