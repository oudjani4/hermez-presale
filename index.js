const { Telegraf } = require('telegraf');

const bot = new Telegraf('8652423147:AAEbgqQtMEj8daDCDpl4Sa9bcWcY8Gd4LbQ');
const WEB_APP_URL = 'https://oudjani4.github.io/hermez-presale/';

bot.start((ctx) => {
    return ctx.reply('🚀 Welcome to Hermez ($HMZ) Official Airdrop & Presale Bot!\n\n🔥 Click the button below to open the platform:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🌐 Open Airdrop & Tasks', web_app: { url: WEB_APP_URL } }]
            ]
        }
    });
});

bot.launch();
console.log('Bot is running successfully and waiting for /start...');
