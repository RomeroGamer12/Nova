module.exports = {
name: "godmine",
code: `
$thumbnail[$replaceText[$userAvatar[$authorid];null;https://images-ext-1.discordapp.net/external/ekGrufHQuHjK3wPHic50nrxN6fIiG_l5ZlTCQCveWow/%3Fsize%3D56/https/cdn.discordapp.com/emojis/853338273916649503.png]]
$color[YELLOW]
$description[ **While mining with your god pickaxe you earned** x\`$random[10;31]\`<:bronze:911929393214013501>  x\`$random[12;21]\`<:iron:911929448343932989>  x\`$random[1;99]\`<:diamonddd:911929573443264542> **all thanks to your <:godpick:912678449531994172>**
]
$setGlobalUserVar[bronze_ore;$sum[$getGlobalUserVar[bronze_ore];$random[10;31]]]
$setGlobalUserVar[iron_ore;$sum[$getGlobalUserVar[iron_ore];$random[12;21]]]
$setGlobalUserVar[diamond_ore;$sum[$getGlobalUserVar[diamond_ore];$random[1;99]]]





$onlyIf[$getGlobalUserVar[godpickaxe]>=1;you do not own a <:godpick:912678449531994172>]`
}