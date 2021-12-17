module.exports = ({
name:"with",
aliases:"withdraw",
category:"Economy",
explanation:"Withdraw cash from your bank!",
bot:"Embed Links",
user:"None",
usage:"with <amount>",
example:"with 1000",
explain:"Withdraw 1000 from your bank!",
code:`$color[GREEN]
$description[I withdrew $getservervar[simbol] **$get[amount]** cash to your wallet]
$setGlobalUserVar[bank;$sub[$getGlobalUserVar[bank];$get[amount]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$get[amount]]]
$onlyif[$get[amount]!=0;{description:Cannot withraw 0!}{color:FF0000}]
$onlyif[$checkcontains[$get[amount];-]==false;{description:Cannot withdraw negative amounts!}{color:FF0000}]
$onlyif[$getGlobalUserVar[bank]>=$get[amount];{description:You do not have that much to withdraw!}{color:FF0000}]
$onlyif[$isnumber[$get[amount]]==true;{description:Not a number!}{color:FF0000}]
$let[amount;$replaceText[$replaceText[$replaceText[$replaceText[$tolowercase[$message[1]];k;000;1];m;000000;1];all;$getGlobalUserVar[bank;$authorID];1];max;$getGlobalUserVar[bank;$authorID];1]]`})