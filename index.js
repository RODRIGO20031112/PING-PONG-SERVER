import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import axios from "axios";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const makeRequest = () => {
  setTimeout(() => {
    axios
      .get(process.env.URL_STANDUP_SERV)
      .then((response) => {
        console.log("The adjacent answer is:", response.data);
      })
      .catch((error) => {
        console.error("[ERROR] Resuming connection:", error.code);

        setTimeout(() => {
          makeRequest();
        }, 30000);
      });
  }, 30000);
};

app.get("/standup/webhook/ping", (req, res) => {
  makeRequest();
  res.send("TradeGPT says pong");
});

makeRequest();
// setInterval(makeRequest, 30000);

const PORT = process.env.PORT || 5555;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
