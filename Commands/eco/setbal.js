module.exports = {
name: "settemplate",
aliases: "template",
code: `
$if[$message==normal]
**Successfully set the balance template to normal**
$setGlobalUserVar[mbt;normal]
$else
$if[$message==dank]
**Successfully set the balance template to **<:denk:909475525720936478>\`dank memer\`
$setglobaluservar[mbt;dank]
$onlyif[$getGlobalUserVar[dank]>=1;**You need** \`1\`<:denk:909475525720936478>] 
$else
$if[$message==mars]
**Successfully set the balance template to **<:credit:909486226216726538>\`mars bot\`
$setglobaluservar[mbt;mars]
$onlyif[$getGlobalUserVar[mars]>=1;**You need** \`1\`<:credit:909486226216726538>]
$else
:x: Invalid arguments provided you may only use these 3 as a balance template
\`normal\`,\`dank\`,\`mars\`
$endif
$endif
$endif`}