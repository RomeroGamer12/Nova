module.exports = {
name: "lottery",
code: `
$channelSendMessage[$channelID;you entered the 150k <:looott:901640510458974238> lottery;no]
$useChannel[901639832093208626]
$userTag[$authorid] 
<@$authorID>
ID - $authorid

$setGlobalUserVar[lotto;true]

$setGlobalUserVar[ticket;$sum[$getGlobalUserVar[ticket;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[lotto]==false;you already joined the lottery???]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$onlyIf[$getglobaluservar[ticket]>=1;you need atleast \`1\`<:looott:901640510458974238> to enter]
`}