module.exports = ({
name:"gift",
aliases:"share",
category:"Economy",
explanation:"Pay money to someone!",
bot:"Embed Links",
user:"None",
usage:"pay <amount> <user>",
example:"pay 1000 Stickman",
explain:"Pay 1000 money to the user Stickman!",
code:`
$if[$message[3]==plant]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:cropp:899245624745136159> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[plant;$sub[$getglobaluservar[plant];$get[amount]]]
$setglobaluservar[plant;$sum[$getglobaluservar[plant;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[plant];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[plant;$authorID];1];max;$getglobalUserVar[plant;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==chandelier]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:chandelierr:899245623809810462> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[chand;$sub[$getglobaluservar[chand];$get[amount]]]
$setglobaluservar[chand;$sum[$getglobaluservar[chand;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[chand];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[chand;$authorID];1];max;$getglobalUserVar[chand;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==laser]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted $customemoji[lazer;896847103647694859] **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[lase;$sub[$getglobaluservar[lase];$get[amount]]]
$setglobaluservar[lase;$sum[$getglobaluservar[lase;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[lase];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[lase;$authorID];1];max;$getglobalUserVar[lase;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==silver]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:gem1:901156013313499156> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[gem11;$sub[$getglobaluservar[gem11];$get[amount]]]
$setglobaluservar[gem11;$sum[$getglobaluservar[gem11;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[gem11];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[gem11;$authorID];1];max;$getglobalUserVar[gem11;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==myth]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:gem2:901157795401961552> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[gem22;$sub[$getglobaluservar[gem22];$get[amount]]]
$setglobaluservar[gem22;$sum[$getglobaluservar[gem22;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[gem22];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[gem22;$authorID];1];max;$getglobalUserVar[gem22;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==trophy]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:gtrophy:902956931440861224> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[trophy;$sub[$getglobaluservar[trophy];$get[amount]]]
$setglobaluservar[trophy;$sum[$getglobaluservar[trophy;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[tropht];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[trophy;$authorID];1];max;$getglobalUserVar[trophy;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==common]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:commoncrate:908469163863969812> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[common;$sub[$getglobaluservar[common];$get[amount]]]
$setglobaluservar[common;$sum[$getglobaluservar[common;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[common];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[common;$authorID];1];max;$getglobalUserVar[common;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==uncommon]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:uncommoncrate:908469223750258709> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[uncommon;$sub[$getglobaluservar[uncommon];$get[amount]]]
$setglobaluservar[uncommon;$sum[$getglobaluservar[uncommon;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[uncommon];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[uncommon;$authorID];1];max;$getglobalUserVar[uncommon;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==rare]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:rarecrate:908469301525237810> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[rare;$sub[$getglobaluservar[rare];$get[amount]]]
$setglobaluservar[rare;$sum[$getglobaluservar[rare;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[rare];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[rare;$authorID];1];max;$getglobalUserVar[rare;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else
$if[$message[3]==majestic]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:Majecsticcrate:908469386183065611> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[majestic;$sub[$getglobaluservar[majestic];$get[amount]]]
$setglobaluservar[majestic;$sum[$getglobaluservar[majestic;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[majestic];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[majestic;$authorID];1];max;$getglobalUserVar[majestic;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else

$if[$message[3]==lottery]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <:looott:901640510458974238> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[ticket;$sub[$getglobaluservar[ticket];$get[amount]]]
$setglobaluservar[ticket;$sum[$getglobaluservar[ticket;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[ticket];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[ticket;$authorID];1];max;$getglobalUserVar[ticket;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]





$else

$if[$message[3]==double]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <a:doublevil:909946521095667742> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[double;$sub[$getglobaluservar[double];$get[amount]]]
$setglobaluservar[double;$sum[$getglobaluservar[double;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[double];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[double;$authorID];1];max;$getglobalUserVar[double;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]




$else


$if[$message[3]==bag]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted <a:moneybag:909868416838545469> **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[bag;$sub[$getglobaluservar[bag];$get[amount]]]
$setglobaluservar[bag;$sum[$getglobaluservar[bag;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[bag];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[bag;$authorID];1];max;$getglobalUserVar[bag;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]
$else


$if[$message[3]==evil]
$sendmessage[{author:Success!:$authoravatar}{description:Successfully gifted $getServerVar[ssimbol] **$get[amount]** to **$usertag[$get[user]]**}{color:RANDOM}{footer:Executed by $usertag}{timestamp}{thumbnail:$authoravatar};no]
$setglobaluservar[evil;$sub[$getglobaluservar[evil];$get[amount]]]
$setglobaluservar[evil;$sum[$getglobaluservar[evil;$get[user]];$get[amount]];$get[user]]
$onlyif[$get[amount]!=0;{description:Cannot gift 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot gift negative amounts!}{color:FF0000}]
$onlyif[$get[amount]<=$getglobaluservar[evil];{description:You do not have that much to give!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];all;$getglobalUserVar[evil;$authorID];1];max;$getglobalUserVar[evil;$authorID];1]]
$onlyif[$get[user]!=$authorid;{description:Cannot gift yourself!}{color:FF0000}]
$onlyif[$isbot[$get[user]]==false;{description:Cannot remove money from a bot!}{color:FF0000}]
$onlyif[$memberexists[$get[user]]==true;{description:Member not found!}{color:FF0000}]
$let[user;$findmember[$message[2];no]]
$onlyIf[$getglobalUserVar[passive]==false;you cant \`gift\` \`pay\`,\`rob\` that user]

$onlyIf[$getglobalUserVar[passive;$findMember[$message[2]]]==false;you cant \`gift\` \`pay\`,\`rob\` that user]
$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]




$else
:x: try this format
\`$getServerVar[prefix]gift <amount> @user <item>\`

\`\`\`xml
| Item list |
plant,chandelier,laser,silver,myth,trophy,common,uncommon,rare,majestic,lottery,bag,double

(REMEMEBER USE ITEMS IN THE 3TH ARGUMENT)\`\`\`
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif
$endif 
`})