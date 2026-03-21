#!/usr/bin/env node
/**
 * setup.js - Save Telegram Bot Token & Chat ID to local JSON
 *
 * Usage:
 *   node setup.js
 *
 * This script will:
 * 1️⃣ Show instructions to create a Telegram Bot
 * 2️⃣ Ask for Bot Token & Chat ID
 * 3️⃣ Save them into config.local.json
 * 4️⃣ Print instructions for new owner
 */

const readline = require("readline");
const fs = require("fs");
const path = require("path");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Helper for asking questions
const ask = (question) => new Promise((resolve) => rl.question(question, resolve));

(async () => {
    console.log("\n=== Firebase Custom Order Project Local Setup ===\n");

    // Step 1: Telegram bot instructions
    console.log("📌 Step 1: Create a Telegram Bot");
    console.log("---------------------------------------------------");
    console.log("1. Open Telegram and search for 'BotFather'.");
    console.log("2. Start a chat and type /newbot");
    console.log("3. Give your bot a name (e.g., MyResinArtBot)");
    console.log("4. Give your bot a username (must end with 'bot', e.g., MyArtBot)");
    console.log("5. BotFather will reply with a token like: 123456789:ABCdefGhIjkLMNopQRstUVWxyz\n");

    // Step 1.5: Firebase project
    let projectId = await ask("Enter Firebase project ID (or leave blank for current): ");
    projectId = projectId.trim() || undefined;

    // Step 2: Telegram Bot Token
    const botToken = await ask("Enter your Telegram Bot Token (from BotFather): ");
    if (!botToken.trim()) {
        console.log("Bot token is required. Exiting.");
        process.exit(1);
    }

    // Step 3: Telegram Chat ID instructions
    console.log("\n📌 Step 2: Get your Telegram Chat ID");
    console.log(" - Start a chat with your bot or your own Telegram user");
    console.log(" - Send a message to your bot first, e.g., 'Hi'");
    console.log(` - Open in browser: https://api.telegram.org/bot${botToken.trim()}/getUpdates`);
    console.log(" - Look for 'chat': { 'id': 123456789 } → This is your Chat ID\n");

    const chatId = await ask("Enter your Telegram Chat ID: ");
    if (!chatId.trim()) {
        console.log("Chat ID is required. Exiting.");
        process.exit(1);
    }

    // Step 4: Write to config.local.json
    const configPath = path.resolve(__dirname, "config.local.json");
    const configData = {
        telegram: {
            token: botToken.trim(),
            chat_id: chatId.trim(),
        },
        firebaseProjectId: projectId || "",
    };

    try {
        fs.writeFileSync(configPath, JSON.stringify(configData, null, 2));
        console.log(`\n✅ Config saved to ${configPath}`);
        console.log("\n📌 Next steps for new owner:");
        console.log("1. Copy this JSON file to their project folder (or use .env).");
        console.log("2. Make sure Firebase CLI is installed: https://firebase.google.com/docs/cli");
        console.log("3. Run: npm install");
        console.log(`4. Deploy functions: firebase deploy --only functions ${projectId ? `--project ${projectId}` : ""}`);
        console.log("5. Update frontend if needed to call the deployed Cloud Function.");
    } catch (err) {
        console.error("❌ Failed to write config file:", err.message);
    } finally {
        rl.close();
    }
})();