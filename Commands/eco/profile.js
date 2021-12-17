module.exports = {
name: "profile",
aliases: "prof",
code: `
$thumbnail[https://images-ext-1.discordapp.net/external/oTnUiOw1P-M2u610xC0D9lBVtxXZpHSKqNVZQm8BOYs/%3Fwidth%3D512%26format%3Dpng%26auto%3Dwebp%26s%3D78fa554869f19dfafc592ea8a280768a3e350b45/https/preview.redd.it/twjrfgjn68f71.png?width=92&height=92]
$title[$userTag[$findUser[$message]]'s profile;https://nonexistendwebsite.com]
$color[RANDOM]
$addTimeStamp
$description[
**welcome to $userTag[$findUser[$message]] profile lets see their stats**
<:heart:914372501642051616> **HP:** \`$getGlobalUserVar[hearts] / 100\`

\`Badges\`: $replaceText[$replaceText[$getGlobalUserVar[badge1;$findUser[$message]];empty; ];<:noobBadge:914161692617875456>;<:noobBadge:914161692617875456>] $replaceText[$replaceText[$getGlobalUserVar[badge3;$findUser[$message]];empty; ];<:proBadge:914161785890828318>;<:proBadge:914161785890828318>] $replaceText[$replaceText[$getGlobalUserVar[badge2;$findUser[$message]];empty; ];<:pros_badge:914161785890828318>;<:pros_badge:914161785890828318>] $replaceText[$replaceText[$getGlobalUserVar[badge4;$findUser[$message]];empty; ];gained;<:golden_briefcase:914161830912483348>] $replaceText[$replaceText[$getGlobalUserVar[badge5;$findUser[$message]];empty; ];praid;<:golden_hands:914161843168231444>] $replaceText[$replaceText[$getGlobalUserVar[dank;$findUser[$message]];0; ];1;<:dank_bal:914163434784956437>] $replaceText[$replaceText[$getGlobalUserVar[mars;$findUser[$message]];0; ];1;<:mars_bal:914163464346431509>]
]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]`}


