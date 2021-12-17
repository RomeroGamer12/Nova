module.exports = {
name: "sin",
aliases: "bad",
code: `
$color[RED]
$footer[Why tho -_-]
$title[Bad guy]
$description[**For some reason you felt like it was right to go around and hurt people well...
you $randomText[bullied your mom;stole someones pocket money;stabbed a dinosaur with a toothpick;forced a homeless man to give you money;kidnapped a kidnapper;hacked into a hackers pc] and got** \`$randomText[1;2;3;4;5;1;1;1;1;1;1;1;3;3;3;2;2;2;7;2;9;1;2;5;2;1;1;1;2;2;3;3;3;3;3;3;10]\`$getServerVar[ssimbol] **are you proud of yourself??**]
$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil]$randomText[1;2;3;4;5;1;1;1;1;1;1;1;3;3;3;2;2;2;7;2;9;1;2;5;2;1;1;1;2;2;3;3;3;3;3;3;10];]]
$globalCooldown[2m;**stop hurting peoples feelings try again in \`%time%\`]`
}