import express from "express";
import cors from "cors";
import { generateMockData } from "./mockFactory";

const app = express();
app.use(cors());

app.get("/api/learning-content", (req, res) => {
  const data = generateMockData();
  res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
