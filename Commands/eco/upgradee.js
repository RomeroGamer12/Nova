module.exports = {
name: "recharge",
code: `
$if[$message[1]==iron]
**Successfully recharged your $getServerVar[iron] which costed** \`1,000\`$getservervar[simbol]
$setGlobalUserVar[iron_durability;15]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1000]]
$onlyIf[$getGlobalUserVar[iron_pickaxe]>=1;You dont own a $getServerVar[iron]]
$onlyIf[$getGlobalUserVar[iron_durability]<15;Your durability bar is already maxed out or is not low yet]

$else
$if[$message[1]==gold]
**Successfully recharged your $getServerVar[gold] which costed** \`5,000\`$getservervar[simbol]
$setGlobalUserVar[gold_durability;20]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];5000]]
$onlyIf[$getGlobalUserVar[gold_pickaxe]>=1;You dont own a $getServerVar[gold]]
$onlyIf[$getGlobalUserVar[gold_durability]<20;Your durability bar is already maxed out or is not low yet]

$else

$if[$message[1]==diamond]
**Successfully recharged your $getServerVar[dimond] which costed** \`15,000\`$getservervar[simbol]
$setGlobalUserVar[diamond_durability;25]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000]]
$onlyIf[$getGlobalUserVar[diamond_pickaxe]>=1;You dont own a $getServerVar[dimond]]
$onlyIf[$getGlobalUserVar[diamond_durability]<25;Your durability bar is already maxed out or is not low yet]

$else
$getServerVar[error] that type of pickaxe doesnt exist you can choose here
\`iron,gold,diamond\`
$endif
$endif
$endif
`
}