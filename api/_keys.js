export const KEYS = {
  pakasir: {
    project: "newproject",
    apiKey: "AsyIISrYJ67r9M8ZAAE33n5XvWaI9Fa9",
    baseUrl: "https://app.pakasir.com/api",
  },

  pterodactyl: {
    domain: "https://",
    apiKey: "",
    clientKey: "",
    egg: 15,
    nestId: 5,
    locationId: 1,
  },

  digitalocean: {
    apiKey: "",
    region: "sgp1",
    image: "ubuntu-24-04-x64",
  },

  // MongoDB Atlas (backend only)
  mongodb: {
    uri: "mongodb+srv://cahyaadi679_db_user:58QH3I3WKqKnwcON@cluster0.gfcudzj.mongodb.net/?appName=Cluster0", // contoh: mongodb+srv://user:pass@cluster0.xxxx.mongodb.net/?appName=Cluster0
    dbName: "shop",
    ordersCollection: "orders",
    reviewsCollection: "reviews",
  },

  // Telegram (backend only)
  telegram: {
    botToken: "8129299272:AAFz7ZhH4ZV-et1oNE9fOjlW0WjqwWyIS7E",      // contoh: 123456:ABC-DEF...
    ownerChatId: "8218627647",   // contoh: 123456789
    channelChatId: "1003165606817", // contoh: -1001234567890 atau @usernamechannel
    websiteUrl: "https://fasturl.my.id", // untuk ditampilkan di struk
  },
};
