import "dotenv/config";
import app from "./app";
import connectDB from "./db/index";
import { port as defaultPort } from "./constants";

const port = process.env.PORT || defaultPort;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`The server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed!", err);
  });
