import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB();

// second way
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at PORT`);
//     });
//   })
//   .catch((error) => {
//     console.log("MONGODB CONNECTION FAILED!!!", error);
//   });
