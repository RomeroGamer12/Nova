module.exports = {
name: "heal",
code: `
**Successfully restored back to 100%<:heartss:912095745304301628> **
$setGlobalUserVar[hearts;100]
$onlyIf[$getGlobalUserVar[hearts]<5;you need less than 5<:heartss:912095745304301628>]`}