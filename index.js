import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = "8513823374:AAG7vH7hqu8ksXMD0bxJ9A3CQA1s38wsfdE";
const CHAT_ID = "7669402425";

app.post("/checkout", async (req, res) => {
  const { name, phone, address, items, total } = req.body;

  const text = `
🛒 NEW ORDER (WILDSHOP)

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}

📦 Items:
${items}

💰 Total: ${total}
`;

  try {
    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text,
      }
    );

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
