import { config } from "dotenv";
config();
 const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/test";
 const PORT = process.env.PORT|| 3000;

 export {MONGODB_URI, PORT};