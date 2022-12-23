const { Telegraf, Markup } = require('telegraf')
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

const TOKEN = '5627019585:AAGjFs6GKLJ9RV2VzxzufZI_kfY80eskB-s';
const bot = new Telegraf(TOKEN);


const id = 742288;

bot.command('lead', async(ctx) => {
    await ctx.reply('Lead Status: ', Markup.inlineKeyboard([
        [Markup.button.webApp('Open Test Lead', 'https://85a9-91-72-172-198.in.ngrok.io/?id=742288')]
    ]))
    console.log(ctx)
    fetch('https://crm.axcap.ae/rest/1/y9x9q1wmj1mwq5bu/crm.lead.get?id=' + id)
        .then((response) => response.json())
        .then((data) => console.log(data.result.STATUS_ID));
})

bot.use((ctx) => {
    console.log(ctx)
})



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
    const chatid = ctx.message.chat.id
    ctx.reply([chatid])
    console.log(ctx.message.chat.id);
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
        [Markup.button.webApp('Open CRM 🛑🛑🛑', 'https://crmbot.axcap.ae/?id=721446')],
        [Markup.button.callback('Не открывать', 'noopen')]
    ]))
})
bot.action('no', async(ctx) =>{
    await ctx.answerCbQuery()
    await ctx.reply('Ну и лана')
})


bot.launch();