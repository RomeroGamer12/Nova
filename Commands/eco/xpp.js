module.exports = {
name: "$alwaysExecute",
code: `
$setGlobalUserVar[xpp;$sum[$getGlobalUserVar[xpp];$random[40;500]]]
$globalCooldown[7s;]`
}