module.exports = {
name: "bag",
code: `
**You used** \`$multi[$message;1]\`<a:moneybag:909868416838545469> **money bags which expanded your bankspace by an extra** \`$numberSeparator[$multi[$random[2000;25000];$message];,]\`$getservervar[simbol]




$setglobaluservar[bc;$sum[$getglobaluservar[bc];$multi[$random[2000;25000];$message]]]
$setglobaluservar[bag;$sub[$getglobaluservar[bag];$multi[$message;1]]]
$onlyIf[$getGlobalUserVar[bag]>=$multi[$message;1];**You need atleast** \`1\`<a:moneybag:909868416838545469>]
$onlyIf[$message>=1;**SPECIFY AN AMOUNT**]
$onlyIf[$isNumber[$message]==true;:x: that is not a number]`
}