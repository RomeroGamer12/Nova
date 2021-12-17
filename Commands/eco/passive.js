module.exports = {
name: "passive",
code: `
$if[$message==on]
\`$userTag[$authorid]\` is  a passive user
$wait[3s]
$setGlobalUserVar[passive;true]
$globalCooldown[1h;Try again in \`%time%\`]

$setTimeout[1w;
userID: $authorID]

$onlyIf[$getGlobalUserVar[passive]==false;you are already passive?]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]

$else
$if[$message==off]
\`$userTag[$authorid]\` is no longer a passive user
$wait[3s]
$setGlobalUserVar[passive;false]
$globalCooldown[1h;Try again in \`%time%\`]
$onlyIf[$getGlobalUserVar[passive]==true;you are not passive?]
$onlyIf[$getGlobalUserVar[prem;$authorID]==true;**⛔ You need \`premium\` to use this command**]

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]

$else
you can only enable / disable passive mode with
\`on\` for enable and \`off\` to disable
$endif
$endif
`}