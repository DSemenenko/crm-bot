const { Telegraf, Markup } = require('telegraf')

const TOKEN = '5627019585:AAGjFs6GKLJ9RV2VzxzufZI_kfY80eskB-s';
const bot = new Telegraf(TOKEN);

//кнопки
bot.command('start', async (ctx) => {
    ctx.reply('Это тест?', Markup.inlineKeyboard([
        [Markup.button.callback('Да', 'yes')],
        [Markup.button.callback('Нет', 'no')]
    ]))
})

bot.action('yes', async(ctx) =>{
    await ctx.answerCbQuery()
    await ctx.reply('намана', Markup.inlineKeyboard([
        [Markup.button.webApp('Open CRM', 'https://crmbot.axcap.ae/')],
        [Markup.button.callback('Не открывать', 'noopen')]
    ]))
})
bot.action('no', async(ctx) =>{
    await ctx.answerCbQuery()
    await ctx.reply('Ну и лана')
})


bot.launch();