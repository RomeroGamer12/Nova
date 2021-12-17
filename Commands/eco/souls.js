module.exports = {
name: "evil",
code: `
$author[$username[$findUser[$message]];$replaceText[$replaceText[$userAvatar[$findUser[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$footer[Evil points can be used in evil shop;https://media.discordapp.net/attachments/904055071300542466/905862377541611601/aoiblue.webp]
$thumbnail[$replaceText[$replaceText[$userAvatar[$findUser[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$color[29befb]
$description[
**Evil points:** \`$numberSeparator[$getGlobalUserVar[evil;$findUser[$message]];,]\`$getServerVar[ssimbol]]
$onlyIf[$isBot[$findUser[$message]]!=true;<:sender:904162273650704414> **bots dont have any amount of evil points and they do not need it**]
$globalCooldown[15s;:stopwatch: hey your on a cooldown of \`%time\`]`}