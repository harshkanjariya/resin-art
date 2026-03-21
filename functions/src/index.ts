import { onRequest } from "firebase-functions/v2/https";
import { setGlobalOptions } from "firebase-functions/v2";
import * as admin from "firebase-admin";
import { getFirestore, FieldValue } from "firebase-admin/firestore"; // Import specifically from firestore
import axios from "axios";

// 1. Initialize Admin SDK
// Check if already initialized to prevent errors during hot-reloads
if (admin.apps.length === 0) {
    admin.initializeApp();
}

const db = getFirestore("art-world-prod");

// 2. Load config
import config from "./config.local.json";
const TELEGRAM_BOT_TOKEN = config.telegram.token;
const TELEGRAM_CHAT_ID = config.telegram.chat_id;

// 3. Set global options
setGlobalOptions({ region: "asia-south1" });

/**
 * v2 HTTPS Function
 */
export const submitCustomOrder = onRequest({
    region: "asia-south1",
    cors: ["https://art-world-official.web.app", "https://art-world-official.firebaseapp.com"],
// @ts-ignore
}, async (req, res) => {
    try {
        if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

        const data = req.body;

        // 1. Save to Firestore
        const orderRef = await db.collection("custom_orders").add({
            ...data,
            createdAt: FieldValue.serverTimestamp(),
        });

        // 2. Build a dynamic Telegram message for ALL fields
        let dynamicContent = "";

        // Loop through keys to ensure every field is visible
        for (const [key, value] of Object.entries(data)) {
            if (key === "additionalSpecs" && Array.isArray(value)) {
                dynamicContent += `\n✨ *Custom Specs:* \n` +
                    value.map((s: any) => `• ${s.label}: ${s.value}`).join("\n");
            } else if (key === "referenceImage" && value) {
                dynamicContent += `\n🖼️ *Reference Image:* [View Image](${value})`;
            } else if (typeof value === "string" || typeof value === "number") {
                // Capitalize key for better reading
                const label = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                dynamicContent += `\n*${label}:* ${value}`;
            }
        }

        const telegramText = `
🎨 *NEW CUSTOM ORDER RECEIVED*
---------------------------
${dynamicContent}
---------------------------
*Order ID:* \`${orderRef.id}\`
`.trim();

        // 3. Send to Telegram
        await axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramText,
            parse_mode: "Markdown",
            disable_web_page_preview: false // Shows image preview in Telegram
        });

        res.status(200).send({ success: true, orderId: orderRef.id });

    } catch (err: any) {
        console.error(err);
        res.status(500).send({ success: false, error: err.message });
    }
});