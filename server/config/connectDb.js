import mongoose from "mongoose";
export const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((mongo) => {
      console.log(`Mongodb connected with server`);
    });
};
