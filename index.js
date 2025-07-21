const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse JSON
app.use(bodyParser.json());

// ✅ Health check route
app.get("/", (req, res) => {
    res.send("✅ JMC WhatsApp Bot is Running");
});

// ✅ Webhook POST route
app.post("/", (req, res) => {
    const incomingMsg = req.body.payload?.payload?.text?.toLowerCase() || "";
    let reply = "";

    if (incomingMsg.includes("1")) {
        reply = "📝 Please type your complaint in this format:\nType: Garbage / Water / Other\nLocation: Your area\nDescription: Issue details";
    } else if (incomingMsg.includes("2")) {
        reply = "💰 You can check your tax info at: https://priyansh-wankhade-chatbot.lovable.app";
    } else if (incomingMsg.includes("3")) {
        reply = "📄 Please visit the municipal office for birth/death certificate details.";
    } else if (incomingMsg.includes("4")) {
        reply = "📍 You can check ward info from: https://priyansh-wankhade-chatbot.lovable.app";
    } else if (incomingMsg.includes("5")) {
        reply = "📞 Contact: +91-4080202078";
    } else {
        reply = `👋 Welcome to the JMC Chatbot!

Reply with:
1️⃣ Raise a Complaint
2️⃣ View Tax Info
3️⃣ Birth/Death Certificate
4️⃣ Ward Info
5️⃣ Contact Officer`;
    }

    res.json({
        response: reply
    });
});

// ✅ Start server only once
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});
