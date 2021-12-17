module.exports = {
name: "setbg",
aliases: ['bgset','set-bg','bg-set','use-bg','bg-use','usebg','bguse'],
code: `
$if[$message==future]
$title[Background has been set]
$color[hazel]
$description[You have used your future background you can set another bg in \`2m\` heres the preview]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$setUserVar[level_card;https://media.discordapp.net/attachments/896847103647694862/906943460085473300/th.png]
$setGlobalUserVar[future;$sub[$getGlobalUserVar[future];1]]
$let[user;$authorid]
$globalCooldown[2m;You cant set that many bgs at once hey ill tell you what you can try again in \`%time%\`
$onlyIf[$getGlobalUserVar[future]>=1;You need atleast \`future\` background]
$else
$if[$message==nature]
$title[Background has been set]
$color[00ff00]
$description[You have used your nature background you can set another bg in \`2m\` heres the preview]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$setUserVar[level_card;https://media.discordapp.net/attachments/896847103647694862/906943876420489246/th.png]
$setGlobalUserVar[nature;$sub[$getGlobalUserVar[nature];1]]
$let[user;$authorid]
$globalCooldown[2m;You cant set that many bgs at once hey ill tell you what you can try again in \`%time%\`
$onlyIf[$getGlobalUserVar[nature]>=1;You need atleast \`future\` background]
$else
$if[$message==green]
$title[Background has been set]
$color[00ff00]
$description[You have used your plant background you can set another bg in \`2m\` heres the preview]
$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$get[user]]; ;+;-1]&avatar=$userAvatar[$get[user]]?size=4096&level=$getUserVar[rank;$get[user]]&rank=&currentxp=$getUserVar[exp;$get[user]]&nextlevelxp=$getUserVar[req;$get[user]]&previouslevelxp=0&custombg=$getUserVar[level_card]&xpcolor=00FF00&isboosting=false]
$setUserVar[level_card;https://media.discordapp.net/attachments/896847103647694862/906950230019309618/th.png]
$setGlobalUserVar[green;$sub[$getGlobalUserVar[green];1]]
$let[user;$authorid]
$globalCooldown[2m;You cant set that many bgs at once hey ill tell you what you can try again in \`%time%\`
$onlyIf[$getGlobalUserVar[green]>=1;You need atleast \`future\` background]
$else
:x: Invalid arguments provided the only backgrounds you can set at this time are
\`green\`,\`nature\`,\`future\`
$endif
$endif
$endif`}

