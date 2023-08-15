cmd({
            pattern: "song",
            alias: ["music"],
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
async(Void, citel, text) => {
   const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`; };    
   if (text.length == 0 && !citel.quoted) return citel.reply(`Give Song Name, Ex ${prefix}song back in black*`);
   try {
            let urlYt = text;
            if(!text){ text=citel.quoted.text; }

            if (!urlYt.startsWith("http")) 
            {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let anu = search.videos[0];
                urlYt = anu.url; 
            }
            let infoYt = await ytdl.getInfo(urlYt);
            if (infoYt.videoDetails.lengthSeconds >= 1200) return citel.reply(`*song not Found, Try Differ Name*`);
            let titleYt = infoYt.videoDetails.title;   
	    citel.reply(`╭───────────────◆\n│🎗️\n│🎗️ *💃 DARK-QUEEN-MD 💃* 🦚\n│🎗️ \n│🎗️ *SONG DOWNLOAD*\n│🎗️\n│🎗️ *TITLE: _${infoYt.videoDetails.title}?_*\n│🎗️ \n╰────────────────◆\n\n  ⦿ *CREATED BY X-NOTIYA* 🧚‍♂️`);
            let randomName = getRandom(".mp3");
            const stream = ytdl(urlYt, {
                 filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128, })
                 .pipe(fs.createWriteStream(`./${randomName}`));
                
	   await new Promise((resolve, reject) => { stream.on("error", reject);  stream.on("finish", resolve);  });
            
            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) 
            {
                let yts = require("secktor-pack");
                let search = await yts(text);
                let buttonMessage = 
				{
				    audio: fs.readFileSync(`./${randomName}`),
				    mimetype: 'audio/mpeg',
				    fileName: titleYt + ".mp3",
				    headerType: 4,
				 }
                 
                await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                return fs.unlinkSync(`./${randomName}`);
            } 
            else {   citel.reply(`❌ File size bigger than 100mb.`);    }
             return fs.unlinkSync(`./${randomName}`);
   
   }catch (e) { return citel.reply(`Error While Downloading Your Song`);  }
})
