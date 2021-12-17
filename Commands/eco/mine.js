module.exports = {
name: "mine",
code: `
$if[$getGlobalUserVar[iron_pickaxe]==1]
$color[RED]
$description[
$getServerVar[dot] **$username** you mined $getServerVar[iron]**$random[1;10]x** iron $getServerVar[copper]**$random[1;9]x** bronze thanks to your $getServerVar[pickaxe1] iron pickaxe 
$getServerVar[dot] Now you have $getServerVar[copper]$random[1;9]x $getServerVar[iron]$random[1;10]x $getServerVar[gold]0x $getServerVar[dimond]0x
$getServerVar[dot] Durability: [$replaceText[$get[durability11];$get[durability11];$repeatMessage[$get[durability11];■]]](https://fakelink.com)]

$setGlobalUserVar[iron_ore;$sum[$getGlobalUserVar[iron_ore];$random[1;10]]]
$setGlobalUserVar[bronze_ore;$sum[$getGlobalUserVar[bronze_ore];$random[1;9]]]
$setGlobalUserVar[iron_durability;$sub[$getGlobalUserVar[iron_durability];1]]
$onlyIf[$get[durability11]>=1;Your $getServerVar[pickaxe1] durability is at 0 go upgrade it or buy a new pickaxe]
$let[durability11;$getGlobalUserVar[iron_durability]]
$let[emote11;<:iron:911934565516443649>]

$else

$if[$getGlobalUserVar[gold_pickaxe]==1]
$color[RED]
$description[
$getServerVar[dot] **$username** you mined $getServerVar[iron]**$random[1;10]x** iron $getServerVar[copper]**$random[1;9]x** bronze $getServerVar[gold]**$random[1;15]x** gold thanks to your $get[emote111]golden pickaxe 
$getServerVar[dot] Now you have $getServerVar[copper]$random[1;10]x $getServerVar[iron]$random[1;10]x $getServerVar[gold]$random[1;15]x $getServerVar[dimond]0x
$getServerVar[dot] Durability: [$replaceText[$get[durability111];$get[durability111];$repeatMessage[$get[durability111];■]]](https://fakelink.com)]

$setGlobalUserVar[iron_ore;$sum[$getGlobalUserVar[iron_ore];$random[1;10]]]
$setGlobalUserVar[gold_ore;$sum[$getGlobalUserVar[gold_ore];$random[1;15]]]
$setGlobalUserVar[bronze_ore;$sum[$getGlobalUserVar[bronze_ore];$random[1;9]]]
$setGlobalUserVar[gold_durability;$sub[$getGlobalUserVar[gold_durability];1]]
$onlyIf[$get[durability111]>=1;Your $get[emote111] durability is at 0 go upgrade it or buy a new pickaxe]
$let[durability111;$getGlobalUserVar[gold_durability]]
$let[emote111;<:golden:911934684894744626>]
$else
$if[$getGlobalUserVar[diamond_pickaxe]==1]
$color[RED]
$description[
$getServerVar[dot] **$username** you mined $getServerVar[iron]**$random[1;10]x** iron $getServerVar[copper]**$random[1;9]x** bronze $getServerVar[gold]**$random[1;15]x** gold $getServerVar[dimond]**$random[1;7]x** diamonds thanks to your $get[emote1111]diamond pickaxe 
$getServerVar[dot] Now you have $getServerVar[copper]$random[1;9]x $getServerVar[iron]$random[1;10]x $getServerVar[gold]$random[1;15]x $getServerVar[dimond]$random[1;7]x
$getServerVar[dot] Durability: [$replaceText[$get[durability1111];$get[durability1111];$repeatMessage[$get[durability1111];■]]](https://fakelink.com)]
$setGlobalUserVar[diamond_ore;$sum[$getGlobalUserVar[diamond_ore];$random[1;7]]]
$setGlobalUserVar[gold_ore;$sum[$getGlobalUserVar[gold_ore];$random[1;15]]]
$setGlobalUserVar[iron_ore;$sum[$getGlobalUserVar[iron_ore];$random[1;10]]]
$setGlobalUserVar[bronze_ore;$sum[$getGlobalUserVar[bronze_ore];$random[1;9]]]
$setGlobalUserVar[diamond_durability;$sub[$getGlobalUserVar[diamond_durability];1]]
$onlyIf[$get[durability1111]>=1;Your $get[emote1111] durability is at 0 go upgrade it or buy a new pickaxe]
$let[durability1111;$getGlobalUserVar[diamond_durability]]
$let[emote1111;<:diamond:911934710807142441>]
$endif
$endif
$endif
$suppressErrors[ {error}]
$globalCooldown[30s; wait %time%]`}