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
 //---------------------------------------------------------------------------
cmd({
            pattern: "video",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example : ${prefix}video Back in black`)
            let yts = require("secktor-pack")
            let search = await yts(text)
	    let i = search.all[1] ;
	    	
            const getRandom = (ext) => { return `${Math.floor(Math.random() * 10000)}${ext}`;   };
            try {
		let urlYt = i.url ; 
                let infoYt = await ytdl.getInfo(urlYt);

                let VidTime = Math.floor(i.timestamp* 60);
		if( VidTime  >= videotime) return await citel.reply(`❌ Video file too big!`);
                let titleYt = infoYt.videoDetails.title;
                let randomName = getRandom(".mp4");
                const stream = ytdl(urlYt, {   filter: (info) => info.itag == 22 || info.itag == 18, })
                    .pipe(fs.createWriteStream(`./${randomName}`));
                await new Promise((resolve, reject) => {
                    stream.on("error", reject);
                    stream.on("finish", resolve);
                });
                   
		let buttonMessage = {
                        video: fs.readFileSync(`./${randomName}`),
                        mimetype: 'video/mp4',
                        caption: "💃 DARK-QUEEN-MD 💃\n💜CREATED BY X-NOTIYA" + Config.caption ,
                    }
                 Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                 return fs.unlinkSync(`./${randomName}`);

                }catch(e){return await citel.reply("Error While Downloading Video : " + e ); }
		    
		    
		    
		    
		    
		    
		    
		    /*  let listSerch = []
            let teskd = `\nResult got from ${text}.\n`
            for (let i of search.all) {
                    listSerch.push({
				    title: i.title,
				    rowId: `${prefix}ytvideo ${i.url}`,
				    description: `*DARK-QUEEN-MD* / ${i.timestamp}`
		    		   })
            }
            const sections = [{
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }]
	    
            const listMessage = {
                text: teskd,
                footer: Config.caption,
                title: ` *Youtube Search results by  ${tlang().title}.*`,
                buttonText: "Videos",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {quoted: citel })
*/
        }
    )
