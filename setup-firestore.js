const admin = require("./functions/node_modules/firebase-admin");

process.env.GOOGLE_CLOUD_PROJECT = "art-world-official";

admin.initializeApp({ projectId: "art-world-official" });

const db = admin.firestore();
db.settings({ databaseId: "art-world-prod" });

async function setup() {
  await db.collection("custom_orders").doc("_init").set({
    _init: true,
    createdAt: new Date(),
  });
  console.log("custom_orders collection created");
  process.exit(0);
}

setup().catch((e) => {
  console.error(e.message);
  process.exit(1);
});


/*

curl "https://api.telegram.org/bot8647145122:AAGd0VCfw1oUjones8PWqUcNaYtDq9FhFnY/getUpdates"

* */