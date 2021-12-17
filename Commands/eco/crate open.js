module.exports = {
name: "crate",
code: `
$if[$message[1]==common]
$customEmoji[chesto;902955744440254464] **$username | is opening** \`$message[2]\`<:commoncrate:908469163863969812> **common crates and got**
\`$numberSeparator[$multi[$random[10;20];$message[2]];,]\` <:cropp:899245624745136159> pepper plants

\`$numberSeparator[$multi[$random[1000;9000];$message[2]];,]\` $getservervar[simbol] cash

\`$numberSeparator[$multi[$random[10;90];$message[2]];,]\` <:gem1:901156013313499156> silver gems

$setGlobalUserVar[plant;$sum[$getGlobalUserVar[plant];$multi[$random[10;20];$message[2]]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[1000;9000];$message[2]]]]

$setGlobalUserVar[common;$sub[$getGlobalUserVar[common];$multi[$message[2];1]]]

$setGlobalUserVar[gem11;$sum[$getGlobalUserVar[gem11];$multi[$random[10;90];$message[2]]]]

$onlyIf[$getGlobalUserVar[common]>=$multi[$message[2];1];You dont have enough $message[1]]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]


$else

$if[$message[1]==uncommon]
$customEmoji[chesto;902955744440254464] **$username | is opening** \`$message[2]\`<:uncommoncrate:908469223750258709>
 **uncommon crates and got**
\`$numberSeparator[$multi[$random[10;20];$message[2]];,]\` <:lazer:899245625722408961> laser grids

\`$numberSeparator[$multi[$random[10000;90000];$message[2]];,]\` $getservervar[simbol] cash

\`$numberSeparator[$multi[$random[1;9];$message[2]];,]\` <:gem2:901157795401961552> mythical gems

$setGlobalUserVar[laser;$sum[$getGlobalUserVar[laser];$multi[$random[10;20];$message[[2]]]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[10000;90000];$message[2]]]]

$setGlobalUserVar[uncommon;$sub[$getGlobalUserVar[uncommon];$multi[$message[2];1]]]

$setGlobalUserVar[gem22;$sum[$getGlobalUserVar[gem22];$multi[$random[10;90];$message[2]]]]

$onlyIf[$getGlobalUserVar[uncommon]>=$multi[$message[2];1];You dont have enough $message[1]]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==rare]
$customEmoji[chesto;902955744440254464] **$username | is opening** \`$message[2]\`<:rarecrate:908469301525237810>
 **rare crates and got**
\`$numberSeparator[$multi[$random[10;20];$message[2]];,]\` <:premiumm:901195964587577395> premium points

\`$numberSeparator[$multi[$random[10000;90000];$message[2]];,]\` $getservervar[simbol] cash

\`$numberSeparator[$multi[$random[1;9];$message[2]];,]\` <:gtrophy:902956931440861224> golden trophies

$setGlobalUserVar[premium;$sum[$getGlobalUserVar[premium];$multi[$random[10;20];$message[2]]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[10000;90000];$message[2]]]]

$setGlobalUserVar[rare;$sub[$getGlobalUserVar[rare];$multi[$message[2];1]]]

$setGlobalUserVar[trophy;$sum[$getGlobalUserVar[trophy];$multi[$random[1;9];$message[2]]]]

$onlyIf[$getGlobalUserVar[rare]>=$multi[$message[2];1];You dont have enough $message[1]]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else


$if[$message[1]==majestic]
$customEmoji[chesto;902955744440254464] **POGGERS $username | is opening** \`$message[2]\`<:Majecsticcrate:908469386183065611> **Majestic crates and got**

\`$numberSeparator[$multi[$random[10;20];$message[2]];,]\` <:commoncrate:908469163863969812> common crates

\`$numberSeparator[$multi[$random[100000;200000];$message[2]];,]\` $getservervar[simbol] cash

\`$numberSeparator[$multi[$random[1;7];$message[2]];,]\` <:looott:901640510458974238> lottery tickets

\`1\` promocode ||$randomString[6]||

\`$numberSeparator[$multi[$random[10;70];$message[2]];,]\` $getservervar[ssimbol] evil points

\`$numberSeparator[$multi[$random[10;90];$message[2]];,]\` <:gtrophy:902956931440861224> golden trophies

$setGlobalUserVar[common;$sum[$getGlobalUserVar[common];$multi[$random[10;20];$message[2]]]]

$setGlobalUserVar[ticket;$sum[$getGlobalUserVar[ticket];$multi[$random[1;7];$message[2]]]]

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$random[10;70];$message[2]]]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$random[100000;200000];$message[2]]]]

$setGlobalUserVar[majestic;$sub[$getGlobalUserVar[majestic];$multi[$message[2];1]]]
$setglobaluservar[promocodes;$randomString[6]]

$setGlobalUserVar[trophy;$sum[$getGlobalUserVar[trophy];$random[10;90]]]

$onlyIf[$getGlobalUserVar[majestic]>=$multi[$message[2];1];You dont have enough $message[1]]
$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else

:x: invalid arguments provided you may only open the following crates
\`common\`,\`uncommon\`,\`rare\`,\`majestic\`
$endif
$endif
$endif
$endif
`
}