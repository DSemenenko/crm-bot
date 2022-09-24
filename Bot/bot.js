const { Telegraf, Markup } = require('telegraf')

const TOKEN = '5708943995:AAE9clSNeeOHVUNHE7gvimr98_uKu8RMLBQ';
const bot = new Telegraf(TOKEN);
const test = 2;
//кнопки
bot.command('start', async (ctx) => {
    ctx.reply('Это тест?', Markup.inlineKeyboard([
        [Markup.button.callback('Да', 'yes')],
        [Markup.button.callback('Нет', 'no')]
    ]))
})

bot.command('check', async (ctx) => {
    // bot.telegram(ctx.message.chat.id,)
    // ctx.reply('ID: ', chatid , Markup.inlineKeyboard([
    //     [Markup.button.callback('Да', 'yes')],
    //     [Markup.button.callback('Нет', 'no')]
    // ]))
    console.log(ctx.message.chat.id);
    const chatid = ctx.message.chat.id
    ctx.reply('Your chat id: ', chatid)
})

// bot.command('', async(ctx) => {
//     await ctx.answerCbQuery()
//     //const chatid = bot.telegram(ctx.message.chat.id,)
//     await ctx.reply(chatid, Markup.inlineKeyboard([
//         [Markup.button.webApp('Open CRM 🛑🛑🛑', 'https://crmbot.axcap.ae/')],
//         [Markup.button.callback('Не открывать', 'noopen')]
//     ]))
// })

bot.action('yes', async(ctx) =>{
    await ctx.answerCbQuery()
    await ctx.reply('намана', Markup.inlineKeyboard([
        [Markup.button.webApp('Open CRM 🛑🛑🛑', 'https://crmbot.axcap.ae/')],
        [Markup.button.callback('Не открывать', 'noopen')]
    ]))
})
bot.action('no', async(ctx) =>{
    await ctx.answerCbQuery()
    await ctx.reply('Ну и лана')
})


bot.launch();