import logging
from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, ContextTypes

logging.basicConfig(
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    level=logging.INFO
)

TOKEN = "8652423147:AAEbgqQtMEj8daDCDpl4Sa9bcWcY8Gd4LbQ"
MINI_APP_URL = "https://oudjani4.github.io/hermez-presale/"

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user = update.effective_user
    args = context.args
    
    if args and args[0].startswith("ref_"):
        referrer_id = args[0].replace("ref_", "")
        if referrer_id != str(user.id):
            logging.info(f"User {user.id} was referred by user {referrer_id}")

    my_ref_link = f"t.me/{context.bot.username}?start=ref_{user.id}"
    
    keyboard = [[InlineKeyboardButton("🚀 Open Hermez App", url=MINI_APP_URL)]]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    welcome_message = (
        f"Welcome to Hermez ($HMZ) Airdrop & Presale!\n\n"
        f"🔗 Your Personal Referral Link:\n`{my_ref_link}`\n\n"
        "Share this link with your friends to earn extra rewards!"
    )
    
    await update.message.reply_text(welcome_message, reply_markup=reply_markup, parse_mode="Markdown")

def main():
    application = ApplicationBuilder().token(TOKEN).build()
    application.add_handler(CommandHandler("start", start))
    print("Bot is running...")
    application.run_polling()

if __name__ == '__main__':
    main()
