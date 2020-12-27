const DiscordJS = require('discord.js')
const client = new DiscordJS.Client()
let ins=process.env.ins
client.once('ready', () => {
  console.log('Ready!');


})

client.on('message', (message) => {
  if(message.content===ins+`!help`){
    message.channel.send(   
    {embed: {
    color: 0x008aff,
    author: {
      name: process.env.name,
      url: "https://discordapp.com", // nameプロパティのテキストに紐付けられるURL
      icon_url: "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    description: "コマンド一覧\n`"+ins+"!my avatar` 発言したユーザーのアバターURL\nNo.+のプログラムにより随時更新していきます！"
    }})

  }
  
  if (message.content === process.env.ins+'!my avatar') {
    let avatar=message.author.avatarURL()
    let name=message.author.username
    message.channel.send(
    {embed: {
      author: {
      name: name,
      url: "https://discordapp.com", // nameプロパティのテキストに紐付けられるURL
      icon_url: avatar
    },
    color: 0x00ff00,
    description: `あなたのアバターのURLは、
    `+avatar
    }}
    );
    // Send the user's avatar URL
  
  }
})
//メンバーが、入った時
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.replay(`こんにちは！ようこそこのギルドへ！, ${member}は、<#769788985236783136>見ましたか？
  見てないなら見てください！`);
});
client.login(process.env.DiscordBotTOKEN)