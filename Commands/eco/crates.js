module.exports = {
name: "crates",
code: `
$author[$usertag[$findUser[$message]] crates;https://images-ext-1.discordapp.net/external/fWFJRhMZBdk8eG1Es1-Mq28DLKYGpJAzpJRNIPI6fxk/%3Fsize%3D56/https/cdn.discordapp.com/emojis/523771437408845852.gif]
$color[BLUE]
$footer[Crates are cool]
$description[**Welcome to $usertag[$findUser[$message]] crates make sure to use them by doing** \`$getservervar[prefix]crate <type> <amount>\` 

<:commoncrate:908469163863969812> **Common crates:** \`$numberSeparator[$getGlobalUserVar[common;$findUser[$message]];,]\` 

<:uncommoncrate:908469223750258709> **Uncommon crates:** \`$numberSeparator[$getGlobalUserVar[uncommon;$findUser[$message]];,]\`

<:rarecrate:908469301525237810> **Rare crates:** \`$numberSeparator[$getGlobalUserVar[rare;$findUser[$message]];,]\`

<:Majecsticcrate:908469386183065611> **Majestic crates:** \`$numberSeparator[$getGlobalUserVar[majestic;$findUser[$message]];,]\`]`
}