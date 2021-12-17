module.exports = {
name: "double",
code: `
**You used your <a:doublevil:909946521095667742> and doubled your evil points**
$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[1;$getGlobalUserVar[evil]]]]
$GlobalCooldown[72h;This command is wayyy too **OP** try again in \`%time%\`]
$setGlobalUserVar[double;$sub[$getGlobalUserVar[double];1]]
$onlyIf[$getGlobalUserVar[double]>=1;**You need atleast** \`1\`<a:doublevil:909946521095667742>]

`
}