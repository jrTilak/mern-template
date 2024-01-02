import { app } from "./app.js";
import { connectDB } from "./db/connect.js";

const PORT = process.env.PORT || 4657;

// app
connectDB()
  .then((res) => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
