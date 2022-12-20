const { Telegraf } = require("telegraf")

const bot = new Telegraf("5660215519:AAHyiEoYZxTpM6RFe4-84FlYMV39lax3h_c")


bot.command("oldschool", (ctx) => ctx.reply("成功了"));
bot.command("hello", (ctx) => ctx.reply("成功了不用测试了1"));
bot.command("test", Telegraf.reply("λ"));
  bot.launch();

const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")

    res.send({hello:"hello11"})
})
app.listen(process.env.PORT || 3000)