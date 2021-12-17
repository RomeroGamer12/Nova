module.exports = {

name: "buy",

aliases: ['buyy' , 'koop' , 'acheter' , '買' , '买' , 'Kaufen' , 'αγορά' , 'खरीदना' , '구입'],

code: ` 

$if[$message[1]==plant]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25]]]

$setGlobalUserVar[plant;$sum[$getGlobalUserVar[plant];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:cropp:899245624745136159> \`plant's\` **for $numberSeparator[$multi[$message[2];25];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]


$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]


$else

$if[$message[1]==chandelier]



$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[250;$message[2]]]]

$setGlobalUserVar[chand;$sum[$getGlobalUserVar[chand];$message[2]]]


**$username Purchased $message[2]** <:chandelierr:899245623809810462> \`Chandelier's\` **for $numberSeparator[$multi[$message[2];250];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > < 

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];250];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]


$else


$if[$message[1]==laser]








$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];7500]]]

$setGlobalUserVar[lase;$sum[$getGlobalUserVar[lase];$multi[1;$message[2]]]]



**$username Purchased $message[2]** $customemoji[lazer;896847103647694859] \`Laser grid's\` **for $numberSeparator[$multi[$message[2];7500];,]**$getservervar[simbol]



$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];7500];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else


$if[$message[1]==silver]








$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];6500]]]

$setGlobalUserVar[gem1;$sum[$getGlobalUserVar[gem1];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:gem1:901156013313499156> \`Silver gem's\` **for $numberSeparator[$multi[$message[2];6500];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];6500];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]




$else



$if[$message[1]==myth]




$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];9700]]]

$setGlobalUserVar[gem2;$sum[$getGlobalUserVar[gem2];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:gem2:901157795401961552> \`Mythical gem's\` **for $numberSeparator[$multi[$message[2];9700];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];9700];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else



$if[$message[1]==premium]








$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]

$setGlobalUserVar[premi;$sum[$getGlobalUserVar[premi];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:premiumm:901195964587577395>

 \`Premium's\` **for $numberSeparator[$multi[$message[2];25000];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else


$if[$message[1]==pickaxe]








$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];750]]]

$setGlobalUserVar[pickaxe;$sum[$getGlobalUserVar[pickaxe];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:pickaxe:901797142610473011> \`Pickaxe's\` **for $numberSeparator[$multi[$message[2];750];,]**$getservervar[simbol]



$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];750];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]


$else

$if[$message[1]==trophy]




**You successFully purchased $message[2] $message[1]<:gtrophy:902956931440861224> for the price of $numberSeparator[$multi[$message[2];150000];,]$getservervar[esimbol]**



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];150000]]]

$setGlobalUserVar[trophy;$sum[$getGlobalUserVar[trophy];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];150000];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else 


$if[$message[1]==noob]




**You successFully purchased your <:badge2:903014140593987716> noob badge your getting there **



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];2500]]

$setGlobalUserVar[badge1;<:badge2:903014140593987716>]

$setGlobalUserVar[bought1;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=2500;You dont have enough cash]

$onlyIf[$getGlobalUserVar[bought1]==false;already a noob lol]

$else 



$if[$message[1]==pro]




**You successFully purchased your <:badge3:903014250493116428> pro badge your almost there **



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];7500]]

$setGlobalUserVar[badge2;<:badge3:903014250493116428>]


$setGlobalUserVar[bought2;true]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=7500;You dont have enough cash]

$onlyIf[$getGlobalUserVar[bought2]==false;already a pro lol]

$else 




$if[$message[1]==god]




**You successFully purchased your <:badge4:903014386787041360> god badge mission accomplished **



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];10000]]

$setGlobalUserVar[badge3;<:badge4:903014386787041360>]


$setGlobalUserVar[bought3;true]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=10000;You dont have enough cash]

$onlyIf[$getGlobalUserVar[bought3]==false;already a god lol]

$else 


$if[$message[1]==rich]




**Pog now you are a <:title1:903379667392794674>

rich guy your getting there **



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];15000000]]

$setGlobalUserVar[title1;titlev1]

$setGlobalUserVar[t1;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=15000000;You dont have enough cash]

$onlyIf[$getGlobalUserVar[t1]==false;imagine wanting another one???]





$else


$if[$message[1]==titan]




**Pog now you are a <:title2:903379772355264543>

God's son your almost there **



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];1500000]]

$setGlobalUserVar[title2;titlev2]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$setGlobalUserVar[t2;true]

$onlyIf[$getGlobalUserVar[cash]>=1500000;You dont have enough cash]

$onlyIf[$getGlobalUserVar[t2]==false;imagine wanting another one???]





$else


$if[$message[1]==titles]




**omg you are now <:title3:903379793213522011>

 God of titles guys worship this guyy**



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];150000000]]

$setGlobalUserVar[title3;titlev3]

$setGlobalUserVar[t3;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=150000000;You dont have enough]

$onlyIf[$getGlobalUserVar[t3]==false;imagine wanting another one???]

$else

$if[$message[1]==gun]


**$username bought 1 rifle <:hrifile:906261312949084221> for **\`250\`$getservervar[simbol]

$setGlobalUserVar[gun;1]


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250]]




$setGlobalUserVar[gun1;true]

$onlyIf[$getGlobalUserVar[gun1]==false;imagine wanting another one???]

$onlyIf[$getGlobalUserVar[cash]>=250;You dont have enough cash]

$else


$if[$message[1]==common]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];5000]]]

$setGlobalUserVar[common;$sum[$getGlobalUserVar[common];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:commoncrate:908469163863969812> \`common crates\` **for $numberSeparator[$multi[$message[2];5000];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];5000];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]






$else




$if[$message[1]==uncommon]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];15000]]]

$setGlobalUserVar[uncommon;$sum[$getGlobalUserVar[uncommon];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:uncommoncrate:908469223750258709> \`uncommon crates\` **for $numberSeparator[$multi[$message[2];15000];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];15000];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]








$else




$if[$message[1]==rare]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];75000]]]

$setGlobalUserVar[rare;$sum[$getGlobalUserVar[rare];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:rarecrate:908469301525237810> \`rare crates\` **for $numberSeparator[$multi[$message[2];75000];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];75000];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]







$else


$if[$message[1]==majestic]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];2500000]]]

$setGlobalUserVar[majestic;$sum[$getGlobalUserVar[majestic];$multi[1;$message[2]]]]



**POG $username Purchased $message[2]** <:Majecsticcrate:908469386183065611> \`majestic crates\` **for $numberSeparator[$multi[$message[2];2500000];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];2500000];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]




$else




$if[$message[1]==dank]




**You just bought 1** <:denk:909475525720936478>\`dank badge\` **for** \`25000\` **go use it or check it out in your profile**



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];25000]]

$setGlobalUserVar[dank;1]

$setGlobalUserVar[t4;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=25000;You dont have enough]

$onlyIf[$getGlobalUserVar[t4]==false;imagine wanting another one???]

$else




$if[$message[1]==mars]




**You just bought 1** <:credit:909486226216726538>\`mars badge\` **for** \`250000\` **go use it or check it out in your profile**



$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250000]]

$setGlobalUserVar[mars;1]

$setGlobalUserVar[t5;true]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[cash]>=250000;You dont have enough]

$onlyIf[$getGlobalUserVar[t5]==false;imagine wanting another one???]

$else

$if[$message[1]==lottery]




**You successFully purchased \`$message[2]\`<:looott:901640510458974238> for the price of $numberSeparator[$multi[$message[2];15];,]$getServerVar[ssimbol]**



$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil];$multi[$message[2];15]]]

$setGlobalUserVar[ticket;$sum[$getGlobalUserVar[ticket];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[evil]>=$multi[$message[2];15];You dont have enough ]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else


$if[$message[1]==bag]




**You successFully purchased \`$message[2]\`<a:moneybag:909868416838545469>

 for the price of $numberSeparator[$multi[$message[2];10];,]$getServerVar[ssimbol]**



$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil];$multi[$message[2];10]]]

$setGlobalUserVar[bag;$sum[$getGlobalUserVar[bag];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[evil]>=$multi[$message[2];10];You dont have enough]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else



$if[$message[1]==double]




**You successFully purchased \`$message[2]\`<a:doublevil:909946521095667742>

 for the price of $numberSeparator[$multi[$message[2];50];,]$getServerVar[ssimbol]**



$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil];$multi[$message[2];50]]]

$setGlobalUserVar[double;$sum[$getGlobalUserVar[double];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[evil]>=$multi[$message[2];50];You dont have enough]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==joker]




**You successFully purchased \`$message[2]\`<:jokerr:910339730279903282>

 for the price of $numberSeparator[$multi[$message[2];250];,]$getServerVar[ssimbol]**



$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil];$multi[$message[2];250]]]

$setGlobalUserVar[joker;$sum[$getGlobalUserVar[joker];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[evil]>=$multi[$message[2];250];You dont have enough]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else


$if[$message[1]==godgem]




**You successFully purchased \`$message[2]\`<:godgem:912674465496830002>
 for the price of $numberSeparator[$multi[$message[2];250000];,]$getServerVar[xpsimbol]**



$setGlobalUserVar[xpp;$sub[$getGlobalUserVar[xpp];$multi[$message[2];250000]]]

$setGlobalUserVar[godgem;$sum[$getGlobalUserVar[godgem];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[xpp]>=$multi[$message[2];250000];You dont have enough]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]

$else


$if[$message[1]==goldkey]




**You successFully purchased \`$message[2]\`<:goldenkey:912675659971698718>
 for the price of $numberSeparator[$multi[$message[2];25000];,]$getServerVar[xpsimbol]**



$setGlobalUserVar[xpp;$sub[$getGlobalUserVar[xpp];$multi[$message[2];25000]]]

$setGlobalUserVar[goldkey;$sum[$getGlobalUserVar[goldkey];$multi[1;$message[2]]]]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]

$onlyIf[$getGlobalUserVar[xpp]>=$multi[$message[2];25000];You dont have enough]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else



$if[$message[1]==food]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25]]]

$setGlobalUserVar[birb_food;$sum[$getGlobalUserVar[birb_food];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:birdfood:913155845691437097> \`birb food's\` **for $numberSeparator[$multi[$message[2];25];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]


$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else

$if[$message[1]==water]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25]]]

$setGlobalUserVar[birb_water;$sum[$getGlobalUserVar[birb_water];$multi[1;$message[2]]]]



**$username Purchased $message[2]** <:waterrr:913155906408177755> \`birb food's\` **for $numberSeparator[$multi[$message[2];25];,]**$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]


$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25];You dont have enough money]

$onlyIf[$message[2]>=1;**SPECIFY AN AMOUNT**]
$else


$if[$message[1]==birb]





$suppressErrors[{author:Error occurred;https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png} {description:$customemoji[redtickk;896847103647694859] And unexpected error occured while buying your item try \`$getServerVar[prefix]buy <item> <amount>\`} {color:RED} {thumbnail:https://emoji.discord.st/emojis/8979fc53-9fd7-4042-b91b-fa61b9eb3601.png}]

$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];250]]

$setGlobalUserVar[birb;$sum[$getGlobalUserVar[birb];1]]



**you adopted a <:birdy:913155711339495474> for** \`250\`$getservervar[simbol]


$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars

\`\`\`

- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <

\`\`\`]


$onlyIf[$getGlobalUserVar[cash]>=250;You dont have enough money]

$onlyIf[$getGlobalUserVar[birb]<1; already owned]




$else


That item does not exist you can only buy

\`trophy\`,\`noob\`,\`pro\`,\`god\`,\`rich\`,\`titan\`,\`titles\`,\`plant\`,\`chandelier\`,\`laser\`,\`silver\`,\`myth\`,\`premium\`,\`pickaxe\`,\`gun\`,\`common\`,\`uncommon\`,\`rare\`,\`majestic\`,\`dank\`,\`mars\`,\`lottery\`,\`bag\`,\`double\`,\`joker\`,\`godgem\`,\`goldkey\`,\`birb\`,\`food\`,\`water\`

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
$endif
$endif

$onlyIf[$getGlobalUserVar[Blacklist;$authorID]==false;{author:Oh no} {color:RED} {thumbnail:https://media.discordapp.net/attachments/903038778229268541/903415958243246100/22841a994e9477aaf121a8844c07ebf0.png} {description:Oh no <@$authorID> you are blacklisted from using my commands make sure to dm my Owner $userTag[$botownerid] for more info}]


`}




