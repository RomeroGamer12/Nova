module.exports = {
name: "inv",
aliases: "inventory",
code: `
$if[$message[1]==]
$author[$usertag[$findUser[$message[2]]]'s inventory]
$color[RANDOM]
$footer[page 1 of 2]
$description[
<:cropp:899245624745136159> **Pepper plant ─** \`$numberSeparator[$getGlobalUserVar[plant;$findUser[$message[2]]];,]\`
**ID** \`plant\` 
**Type ─** \`farmable\`

<:chandelierr:899245623809810462> **Chandelier ─** \`$numberSeparator[$getGlobalUserVar[chand;$findUser[$message[2]]];,]\`
**ID** \`chandelier\` 
**Type ─** \`Useless\`

<:lazer:899245625722408961> **Laser grid ─** \`$numberSeparator[$getGlobalUserVar[lase;$findUser[$message[2]]];,]\`
**ID** \`laser\` 
**Type ─** \`boost\`

<:gem1:901156013313499156> **Silver gem ─** \`$numberSeparator[$getGlobalUserVar[gem11;$findUser[$message[2]]];,]\`
**ID** \`silver\` 
**Type ─** \`boost\`

<:gem2:901157795401961552> **Mythical gem ─** \`$numberSeparator[$getGlobalUserVar[gem22;$findUser[$message[2]]];,]\`
**ID** \`myth\` 
**Type ─** \`boost\`]
$else
$if[$message[1]==2]
$author[$usertag[$findUser[$message[2]]]'s inventory]
$color[RANDOM]
$footer[page 2 of 2]
$description[
<:gtrophy:902956931440861224> **Golden trophy ─** \`$numberSeparator[$getGlobalUserVar[trophy;$findUser[$message[2]]];,]\`
**ID** \`trophy\` 
**Type ─** \`flex\`

<:pickaxe:901845453086285865> **Pickaxe ─** \`$numberSeparator[$getGlobalUserVar[pickaxe;$findUser[$message[2]]];,]\`
**ID** \`pickaxe\` 
**Type ─** \`tool\`

<:hrifile:906261312949084221> **Hunting rifle ─** \`$numberSeparator[$getGlobalUserVar[gun;$findUser[$message[2]]];,]\`
**ID** \`gun\` 
**Type ─** \`tool\`

<:looott:901640510458974238> **Lottery ticket ─** \`$numberSeparator[$getGlobalUserVar[ticket;$findUser[$message[2]]];,]\`
**ID** \`lottery\` 
**Type ─** \`boost\`

<a:moneybag:909868416838545469> **Money bag ─** \`$numberSeparator[$getGlobalUserVar[bag;$findUser[$message[2]]];,]\`
**ID** \`bag\` 
**Type ─** \`boost\`

<a:doublevil:909946521095667742> **Double evil ─** \`$numberSeparator[$getGlobalUserVar[double;$findUser[$message[2]]];,]\`
**ID** \`double\` 
**Type ─** \`Epic boost\`

<:jokerr:910339730279903282> **Joker hat ─** \`$numberSeparator[$getGlobalUserVar[joker;$findUser[$message[2]]];,]\`
**ID** \`joker\` 
**Type ─** \`Epic boost\`

<:godgem:912674465496830002> **God gem ─** \`$numberSeparator[$getGlobalUserVar[godgem;$findUser[$message[2]]];,]\`
**ID** \`godgem\` 
**Type ─** \`godly\`

<:goldenkey:912675659971698718> **Gold key ─** \`$numberSeparator[$getGlobalUserVar[goldkey;$findUser[$message[2]]];,]\`
**ID** \`goldkey\` 
**Type ─** \`godly\`

<:birdfood:913155845691437097> **Birb food ─** \`$numberSeparator[$getGlobalUserVar[birb_food;$findUser[$message[2]]];,]\`
**ID** \`food\` 
**Type ─** \`pet food\`

<:waterrr:913155906408177755> **Birb water ─** \`$numberSeparator[$getGlobalUserVar[birb_water;$findUser[$message[2]]];,]\`
**ID** \`water\` 
**Type ─** \`pet water\`

<:godpick:912678449531994172> **God pickaxe ─** \`$numberSeparator[$getGlobalUserVar[godpickaxe;$findUser[$message[2]]];,]\`
**ID** \`godpickaxe\` 
**Type ─** \`godly\`]

$else
$if[$message[1]==1]
$author[$usertag[$findUser[$message[2]]]'s inventory]
$color[RANDOM]
$footer[page 1 of 2]
$description[
<:cropp:899245624745136159> **Pepper plant ─** \`$numberSeparator[$getGlobalUserVar[plant;$findUser[$message[2]]];,]\`
**ID** \`plant\` 
**Type ─** \`farmable\`

<:chandelierr:899245623809810462> **Chandelier ─** \`$numberSeparator[$getGlobalUserVar[chand;$findUser[$message[2]]];,]\`
**ID** \`chandelier\` 
**Type ─** \`Useless\`

<:lazer:899245625722408961> **Laser grid ─** \`$numberSeparator[$getGlobalUserVar[lase;$findUser[$message[2]]];,]\`
**ID** \`laser\` 
**Type ─** \`boost\`

<:gem1:901156013313499156> **Silver gem ─** \`$numberSeparator[$getGlobalUserVar[gem11;$findUser[$message[2]]];,]\`
**ID** \`silver\` 
**Type ─** \`boost\`

<:gem2:901157795401961552> **Mythical gem ─** \`$numberSeparator[$getGlobalUserVar[gem22;$findUser[$message[2]]];,]\`
**ID** \`myth\` 
**Type ─** \`boost\`

]
$else
:x: \`invalid arguments provided you might wanna try this format\`
\`\`\`kt
$getservervar[prefix]inventory <page> @user\`\`\`
$endif
$endif
$endif`}
