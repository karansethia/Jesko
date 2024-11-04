import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import { connectDb } from "./db/connection";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/health", async (req: Request, res: Response) => {
  res.json({ message: "Hello" });
});

app.listen(3000, async () => {
  connectDb(process.env.MONGO_URI as string);
  console.log("App running");
});
