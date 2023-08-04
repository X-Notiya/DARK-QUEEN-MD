const config = require("../config");

require ("../config");
module.exports = {
	name: "kick",
	alias: ["remove", "sick"],
	description: "remove Member from group",
	category: "Group",
	start: async(vorterx, m, { text, prefix, toReact, isBotAdmin, isAdmin, mentionByTag, pushName}) => {
		if(!isAdmin) { await toReact("⭕"); return m.reply(`*🔌This is admin command only*`);
        }
		if(!isBotAdmin) { await toReact("😭"); return m.reply(`*🔌I need to be an admin in order to use this command*`);
        }
		const mention = await mentionByTag
		if(!mention[0]) { await toReact("❌"); return m.reply(`*🤔No user found*`);
        }
		await toReact("🎊");
		await vorterx.groupParticipantsUpdate(m.from, [mention[0]], "remove")
		await vorterx.sendMessage(m.from,{text:`*🎊User has been removed by ${pushName}*`},{quoted:m})
	},
}
