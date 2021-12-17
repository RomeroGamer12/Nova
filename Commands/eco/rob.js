module.exports = {
    name: "rob",
    code: `
    $if[$getGlobalUserVar[joker]>=1]

$setGlobalUserVar[joker;$sub[$getGlobalUserVar[joker;$mentioned[1]];1];$mentioned[1]]

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[0;2500]];$authorID]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1]];$random[0;2500]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$clientid]]
$title[$username stole from $username[$mentioned[1]]]
$description[
<@$authorID> stole a total of $random[0;2500]$getServerVar[simbol] from <@$mentioned[1]> and \`1\`<:jokerr:910339730279903282> has been deducted from your inventory automaticly]
$globalCooldown[60s;You can rob someone again in %time%]
$onlyIf[$getGlobalUserVar[cash;$authorID]>=2500;Your wallet needs to contain at least 2500$getservervar[simbol] to rob someone.]
$onlyIf[$getGlobalUserVar[cash;$mentioned[1]]>=2500;Their wallet needs to contain at least 2500$getservervar[simbol]]
$onlyIf[$mentioned[1]!=$authorID;**:x: You can't rob yourself???**]
$onlyIf[$mentioned[1]!=;**:x: Mention someone to rob**]



$else
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash;$authorID];$random[0;2500]];$authorID]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash;$mentioned[1]];$random[0;2500]];$mentioned[1]]
$color[RANDOM]
$thumbnail[$userAvatar[$clientid]]
$title[$username stole from $username[$mentioned[1]]]
$description[
<@$authorID> stole a total of $random[0;2500]$getServerVar[simbol] from <@$mentioned[1]>]
$globalCooldown[60s;You can rob someone again in %time%]
$onlyIf[$getGlobalUserVar[cash;$authorID]>=2500;Your wallet needs to contain at least 2500$getservervar[simbol] to rob someone.]
$onlyIf[$getGlobalUserVar[cash;$mentioned[1]]>=2500;Their wallet needs to contain at least 2500$getservervar[simbol]]
$onlyIf[$isBot[$mentioned[1;yes]]!=true;**:x: You can't rob bots**]
$onlyIf[$mentioned[1]!=$authorID;**:x: You can't rob yourself???**]
$onlyIf[$mentioned[1]!=;**:x: Mention someone to rob**]
$endif`
}