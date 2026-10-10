const { Telegraf } = require('telegraf');

// ضع توكن البوت الخاص بك هنا بين علامتي التنصيص
const bot = new Telegraf('8652423147:AAEbgqQtMEj8daDCDpl4Sa9bcWcY8Gd4LbQ');
const WEB_APP_URL = 'https://oudjani4.github.io/hermez-presale/';

bot.start(async (ctx) => {
    try {
        await ctx.reply('🚀 أهلاً بك في بوت أيردروب وبيع عملة Hermez ($HMZ) الرسمية!\n\n' +
                        '🔥 اضغط على الزر أدناه لفتح المنصة وإتمام المهام:', {
            reply_markup: {
                inline_keyboard: [
                    [{ text: '🌐 فتح منصة الأيردروب والمهام', web_app: { url: WEB_APP_URL } }]
                ]
            }
        });
    } catch (error) {
        console.error("Error sending start message:", error);
    }
});

bot.launch();
console.log('Bot is running successfully and waiting for /start...');
