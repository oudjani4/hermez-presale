const { Telegraf } = require('telegraf');
const bot = new Telegraf('8652423147:AAEbgqQtMEj8daDCDpl4Sa9bcWcY8Gd4LbQ');
const CHANNEL_USERNAME = '@Hermez_AR';
const WEB_APP_URL = 'https://oudjani4.github.io/hermez-presale/';

bot.start(async (ctx) => {
    await ctx.reply('🚀 مرحباً بك في أيردروب وبيع عملة Hermez ($HMZ) الرسمية!\n\n' +
                    '🎁 كل إحالة ناجحة = 10 $HMZ\n' +
                    '⚠️ الحد الأدنى للسحب = 500 $HMZ\n' +
                    '🔥 مرحلة البيع المسبق مستمرة حتى 1 نوفمبر.\n\n' +
                    'اضغط على الزر بالأسفل لفتح منصة الأيردروب وربط محفظتك:', {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🌐 فتح منصة الأيردروب والـ Presale', web_app: { url: WEB_APP_URL } }],
                [{ text: '✅ التحقق من الاشتراك في القناة', callback_data: 'check_sub' }]
            ]
        }
    });
});

bot.action('check_sub', async (ctx) => {
    try {
        const member = await ctx.telegram.getChatMember(CHANNEL_USERNAME, ctx.from.id);
        if (['member', 'creator', 'administrator'].includes(member.status)) {
            await ctx.answerCbQuery('✅ أهلاً بك! تم التحقق من اشتراكك بنجاح.');
        } else {
            await ctx.answerCbQuery('❌ عذراً، يجب عليك الاشتراك في القناة أولاً!', { show_alert: true });
        }
    } catch (e) {
        await ctx.answerCbQuery('حدث خطأ، تأكد أن البوت مشرف بالقناة.');
    }
});

bot.launch();
console.log('Bot is running successfully...');
