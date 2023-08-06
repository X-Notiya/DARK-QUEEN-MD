/**
 Copyright (C) 2022.
 Licensed under the  GPL-3.0 License;
 You may not use this file except in compliance with the License.
 It is supplied in the hope that it may be useful.
 * @project_name : Secktor-Md
 * @author : SamPandey001 <https://github.com/SamPandey001>
 * @description : Secktor,A Multi-functional whatsapp bot.
 * @version 0.0.6
 **/
const { tlang, botpic,cmd, prefix, runtime,Config } = require('../lib')
const axios = require('axios')
const speed = require('performance-now')
//---------------------------------------------------------------------------
cmd({
        pattern: "chat",
        desc: "chat with an AI",
        category: "general",
        use: '<Hii,QuenNethu>',
        filename: __filename,
    },
    async(Void, citel,text) => {
        let zx = text.length;
        if (zx < 8) {
            let {data} = await axios.get(`http://api.brainshop.ai/get?bid=167991&key=aozpOoNOy3dfLgmB&uid=[${citel.sender.split("@")[0]}]&msg=[${text}]`);
            return citel.reply(data.cnt);  
        }
        if (!text) return citel.reply(`Hey there! ${citel.pushName}. How are you doing these days?`);
        const { Configuration, OpenAIApi } = require("openai");
        const configuration = new Configuration({
            apiKey: Config.OPENAI_API_KEY || "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",
        });
        const openai = new OpenAIApi(configuration);
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: text,
            temperature: 0.5,
            max_tokens: 80,
            top_p: 1.0,
            frequency_penalty: 0.5,
            presence_penalty: 0.0,
            stop: ['"""'],
        });
        citel.reply(completion.data.choices[0].text);
    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "repo",
        alias: ["git", "sc", "script"],
        desc: "Sends info about repo.",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        let { data } = await axios.get('https://api.github.com/repos/X-Notiya/DARK-QUEEN-MD')
        let cap = `╔══════════❍
║ 💕 𝐃𝚫𝚪𝐊 𝐐𝐔𝚵𝚵𝚴 𝚳𝐃💕
╠═══════❍
║🤓 🄷🄴🅈* ${citel.pushName}\n
║✨:🅃🄾🅃🄰🄻 🅂🅃🄰🅁🅂 : ${data.stargazers_count} stars
║👑🄶🄾🅁🄺🅂 : ${data.forks_count} forks
║🔥 🅁🄴🄿🄾 : Cᴏᴍᴍɪɴɢ Sᴏᴏɴ/Rᴇᴘᴏ
║🥏 🄶🅁🄾🅄🄿: Cᴏᴍᴍɪɴɢ Sᴏᴏɴ/Sᴜᴘᴘᴏʀᴛt
║👨🏻‍💻 🄱🄾🅃 🄾🅆🄽🄴🅁:-ᴍʀ.ɴᴏᴛɪʏᴀ
║ ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍʀ.ɴᴏᴛɪʏᴀ
╚══════════❍`
        let buttonMessaged = {
            image: { url: await botpic() },
            caption: cap,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: "Queen-Nethu-Repo",
                    body: "MR>Hansamala",
                    thumbnail: log0,
                    mediaType: 4,
                    mediaUrl: '',
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
//---------------------------------------------------------------------------
cmd({
        pattern: "status",
        alias: ["about"],
        desc: "To check bot status",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        const uptime = process.uptime();
        timestampe = speed();
        latensie = speed() - timestampe;
        let ter = `
┎─┈─┈──┈─┈─◈❁◈─┈─┈─┈─┈─◍
│🧚 *${tlang().title}* 🧚
◍┈─┈──┈─◈❁◈─┈─┈─┈─◍
│*🌟​🇩​​🇪​​🇸​​🇨​​🇷​​🇮​​🇵​​🇹​​🇮​​🇴​​🇳​⦂* ​🇦​ ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ ​🇧​​🇴​​🇹​ ​🇼​​🇮​​🇹​​🇭​ ​🇷​​🇮​​🇨​​🇭​ ​🇫​​🇪​​🇦​​🇹​​🇺​​🇷​​🇪​​🇸​, ​🇧​​🇺​​🇮​​🇱​​🇩​ ​🇮​​🇳​ ​🇳​​🇴​​🇩​​🇪​​🇯​​🇸​ ​🇹​​🇴​ ​🇲​​🇦​​🇰​​🇪​ ​🇾​​🇴​​🇺​​🇷​ ​🇼​​🇭​​🇦​​🇹​​🇸​​🇦​​🇵​​🇵​ ​🇪​​🇳​​🇯​​🇴​​🇾​​🇦​​🇧​​🇱​​🇪​.
┖┬─┈─┈─┈──┈──◈◎◈─┈─┈─┈──┈──«
│*⚡​🇸​​🇵​​🇪​​🇪​​🇩​⦂* ${latensie.toFixed(4)} 🇲​​🇸*
│*🚦​🇺​​🇵​​🇹​​🇮​​🇲​​🇪​⦂* ${runtime(process.uptime())}
│*🕸​🇻​​🇪​​🇷​​🇸​​🇮​​🇴​​🇳​⦂* 1.0.0
│*👤​🇴​​🇼​​🇳​​🇪​​🇷​⦂*  ${Config.ownername}
┎─┈─┈─┈──┈──◈◎◈─┈─┈─┈──┈──«
│*​🇵​​🇴​​🇼​​🇪​​🇷​​🇪​​🇩​ ​🇧​​🇾​*
│◍◈◎ *${tlang().title}* ◍◈◎
┖┬─┈─┈─┈──┈─◈◎◈─┈─┈─┈──┈─»
       (っ◔◡◔)っ 
 💕⃢🧚‍♂️𝐃𝚫𝚪𝐊 𝐐𝐔𝚵𝚵𝚴 𝚳𝐃🧚‍♂️⃢ 💕
┖─┈─┈──┈─┈─◈❁◈─┈─┈─┈─┈─◍
`;
        let buttonMessaged = {
            image: {
                url: await botpic(),
            },
            caption: ter,
            footer: tlang().footer,
            headerType: 4,
            contextInfo: {
                externalAdReply: {
                    title: tlang().title,
                    body: `Bot-Status`,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: ``,
                    sourceUrl: ``,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)
