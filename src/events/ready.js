const { ActivityType } = require("discord.js")
module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
  client.user.setActivity("❤️ | Kingpin#1473")
}};
