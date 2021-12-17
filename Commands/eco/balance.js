
module.exports = {
name: "bal",
aliases: ['balance','wallet','cash','money'],
code: `
$if[$getGlobalUserVar[mbt;$findUser[$message]]==normal]
$author[$username[$findUser[$message]];$replaceText[$replaceText[$userAvatar[$findUser[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$footer[Requested by $userTag[$authorid];https://media.discordapp.net/attachments/904055071300542466/905862377541611601/aoiblue.webp]
$thumbnail[$replaceText[$replaceText[$userAvatar[$findUser[$message]];null;$serverIcon];$servericon;null;$userAvatar[$clientid]]]
$color[29befb]
$description[
**Cash:** \`$numberSeparator[$getGlobalUserVar[cash;$findUser[$message]];,]\`$getServerVar[simbol]

**Bank:** \`$numberSeparator[$getGlobalUserVar[bank;$findUser[$message]];,]\` **/** \`$numberSeparator[$getGlobalUserVar[bc;$findUser[$message]];,]\`$getservervar[simbol]
]
$globalCooldown[15s;:stopwatch: hey your on a cooldown of \`%time%\`]
$else
$if[$getGlobalUserVar[mbt;$findUser[$message]]==mars]
$author[$usertag[$findUser[$message]];$replaceText[$replaceText[$userAvatar[$findUser[$message]];null;$servericon];$servericon;null;$userAvatar[$clientid]]]
$color[BLUE]
$description[
**[Currency](https://somehost.xyz)**
**Wallet:** $getservervar[simbol] $numberSeparator[$getGlobalUserVar[cash;$findUser[$message]];,]
**Bank:** $getservervar[simbol] $numberSeparator[$getGlobalUserVar[bank;$findUser[$message]];,] / $numberSeparator[$getGlobalUserVar[bc;$findUser[$message]]]
**Net worth:** $getservervar[simbol] $numberSeparator[$sum[$getGlobalUserVar[bank;$findUser[$message]];$getGlobalUserVar[cash;$findUser[$message]]];,]$getServerVar[simbol]

**[Extras](https://somehost.xyz)**
**Evil points:** $numberSeparator[$getglobaluserVar[evil;$findUser[$message]];,]$getservervar[ssimbol]]
$else
$if[$getglobaluservar[mbt;$findUser[$message]]==dank]
$title[**$username[$findUser[$message]]'s balance**]
$color[BLACK]
$description[
**Wallet**: $getservervar[simbol] $numberSeparator[$getglobaluserVar[cash;$findUser[$message]];,]
**Bank**: $getservervar[simbol] $numberSeparator[$getglobaluserVar[bank;$findUser[$message]];,] / $numberSeparator[$getGlobalUserVar[bc;$findUser[$message]]]]
$footer[😏 $replaceText[$addTimestamp;•;| ]]
$endif
$endif
$endif`}