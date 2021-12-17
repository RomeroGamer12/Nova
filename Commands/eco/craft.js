module.exports = {
name: "craft",
code: `
$if[$message[1]==god]
**You just crafted the god** <:godpick:912678449531994172>
$setGlobalUserVar[godgem;$sum[$getGlobalUserVar[godgem];3]]
$setGlobalUserVar[godpickaxe;1]
$setGlobalUserVar[goldkey;$sum[$getGlobalUserVar[goldkey];2]]
$onlyIf[$getGlobalUserVar[godgem]>=3;You need atleast \`3\`<:godgem:912674465496830002>]
$onlyIf[$getGlobalUserVar[goldkey]>=2; you need atleast \`2\`<:goldenkey:912675659971698718>]
$onlyIf[$getGlobalUserVar[godpickaxe]==1;already owned]
$endif`
}