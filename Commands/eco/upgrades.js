module.exports = {
name: "upgrade",
code: `
$if[$getGlobalUserVar[iron_pickaxe]==1]
$author[Upgraded!!!!;https://cdn.discordapp.com/emojis/911934684894744626.png?size=128]
$thumbnail[https://cdn.discordapp.com/emojis/911934684894744626.png?size=128]
$color[RED]
$description[**You upgraded from $getServerVar[pickaxe1] to $getServerVar[goldenpick] which costed** \`70\`$getServerVar[copper] **and** \`2,500\`$getservervar[simbol]]
$setGlobalUserVar[wood_pickaxe;0]
$setGlobalUserVar[iron_pickaxe;0]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]
$setGlobalUserVar[bronze_ore;$sub[$getGlobalUserVar[bronze_ore];70]]
$setGlobalUserVar[gold_pickaxe;1]
$setGlobalUserVar[gold_durability;20]
$onlyIf[$getGlobalUserVar[bronze_ore]>=70;You need \`70\`$getServerVar[copper]]
$onlyIf[$getGlobalUserVar[cash]>=2500; you need \`2,500\`$getservervar[simbol]]

$else

$if[$getGlobalUserVar[gold_pickaxe]==1]
$author[Upgraded!!!!;https://cdn.discordapp.com/emojis/911934684894744626.png?size=128]
$thumbnail[https://cdn.discordapp.com/emojis/911934684894744626.png?size=128]
$color[RED]
$description[**You upgraded from $getServerVar[goldenpick] to $getServerVar[dimondpickaxe] which costed** \`35\`$getServerVar[gold] **and** \`10,000\`$getservervar[simbol]]
$setGlobalUserVar[wood_pickaxe;0]
$setGlobalUserVar[gold_pickaxe;0]
$setGlobalUserVar[iron_pickaxe;0]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]
$setGlobalUserVar[gold_ore;$sub[$getGlobalUserVar[gold_ore];35]]
$setGlobalUserVar[diamond_pickaxe;1]
$setGlobalUserVar[diamond_durability;25]
$onlyIf[$getGlobalUserVar[gold_ore]>=35;You need \`35\`$getServerVar[gold]]
$onlyIf[$getGlobalUserVar[cash]>=10000; you need \`10,000\`$getservervar[simbol]]
$endif
$endif`}