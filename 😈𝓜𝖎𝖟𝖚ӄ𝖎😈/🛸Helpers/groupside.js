`🐙============================================================================================================================<⚡>`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const ℓιєηт = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/catch`);
const _𝔏𝔞𝔟_ = require(`../../🧀𝓜𝖎𝖟𝖚ӄ𝖎🧀/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const vers = require(`../../package.json`);
const moon = [
  `bite`,
  `blush`,
  `bored`,
  `confused`,
  `cry`,
  `cuddle`,
  `goodnight`,
  `happy`,
  `highfive`,
  `hug`,
  `kiss`,
  `pat`,
  `poke`,
  `sad`,
  `slap`,
  `smile`,
  `thinking`,
  `wave`,
  `wink`,
  `yes`,
];
const moonshine = moon[Math.floor(Math.random() * moon.length)];
`🐙`;
`🐙`;
`🐙============================================================================================================================<⚡>`;
`   𝐌𝐢𝐳𝐮𝐤𝐢™   💡𝘈𝘥𝘷𝘢𝘯𝘤𝘦 𝘞𝘩𝘢𝘵𝘴𝘢𝘱𝘱 𝘜𝘴𝘦𝘳𝘣𝘰𝘵 𝘞𝘪𝘵𝘩 80+ 𝘊𝘰𝘮𝘮𝘢𝘯𝘥𝘴 𝘧𝘰𝘳 𝘣𝘰𝘵𝘩 𝘗𝘳𝘪𝘷𝘢𝘵𝘦 𝘢𝘯𝘥 𝘗𝘶𝘣𝘭𝘪𝘤.. `;
`🐙============================================================================================================================<⚡>`;
`🐙`;
`🐙`;
module.exports = {
  name: `groupside`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, arg, 𝓜𝓲𝔃𝓾𝓴𝓲𝓢𝓲𝓽𝓻𝓮𝓹) {
    try {
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      `🐙============================================================================================================================<⚡>`;
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
        { url: `./𝓜𝖎𝖟𝖚ӄ𝖎/Mizuki_Main.png` },
        MessageType.image,
        {
          mimetype: Mimetype.png,
        }
      );
      const buttons = [
        {
          buttonId: `${ᴋᴇɪ}list`,
          buttonText: { displayText: `${ᴋᴇɪ}list` },
          type: 1,
        },
        {
          buttonId: `${ᴋᴇɪ}${moonshine}`,
          buttonText: { displayText: `${ᴋᴇɪ}${moonshine}` },
          type: 1,
        },
      ];
      const buttonMessage = {
        contentText: `•@${ꜱᴇɴᴅᴇʀeceived},
🤖𝘼𝙙𝙙 𝙈𝙞𝙯𝙪𝙠𝙞 𝙄𝙣 𝙔𝙤𝙪𝙧 𝙜𝙧𝙤𝙪𝙥: *${ᴋᴇɪ}request*

┌────⭓ *𝙂𝙧𝙤𝙪𝙥𝙨*  ⦿
│🔰• ${ᴋᴇɪ}promote: _promote member to admin_
│🔰• ${ᴋᴇɪ}demote: _demote member from admin_
│🔰• ${ᴋᴇɪ}spam: _spam messsage in group/private_
│🔰• ${ᴋᴇɪ}invite: _get group invite link_
│🔰• ${ᴋᴇɪ}admins: _get all admins of a group_
│🔰• ${ᴋᴇɪ}disappear: _toggle disappear message in group_
│🔰• ${ᴋᴇɪ}getdesc: _get group description_
│🔰• ${ᴋᴇɪ}groupdp: _change group profile picture_
│🔰• ${ᴋᴇɪ}kick: _ʀᴇᴍᴏᴠᴇ ᴀ ᴘᴇʀꜱᴏɴ ꜰʀᴏᴍ ᴀ ɢʀᴏᴜᴘ_
│🔰• ${ᴋᴇɪ}tagall: _tag everyone in group_
│🔰• ${ᴋᴇɪ}setantilink: _remove any person who sends any links_
│🔰• ${ᴋᴇɪ}setwelcome: _welcome new members with custom message_
│🔰• ${ᴋᴇɪ}setgoodbye: _custom goodbye message for members when they leave_
└───────⭓

*⧪➛𝘾𝙤𝙢𝙞𝙣𝙜 𝙎𝙤𝙤𝙣!*
many many more!`,
        footerText: `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*`,
        buttons: buttons,
        headerType: 4,
        imageMessage: media.message.imageMessage,
      };
      await ӄʀǟӄɨռʐ
        .sendMessage(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ] },
        })
        .catch((ℓαвєяяσя) => ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎));
    } catch (ℓαвєяяσя) {
      ℓιєηт.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎);
      console.log(ℓαвєяяσя);
    }
  },
};
`🐙============================================================================================================================<⚡>`;
