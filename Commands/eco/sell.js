module.exports = {
name: "sell",
code: `
$if[$message[1]==zebra]
**$userName sold** \`$message[2]\`🦓 **for $multi[$message[2];29]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];29]]]
$setGlobalUserVar[zebra;$sub[$getGlobalUserVar[zebra];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[zebra]>=$multi[$message[2];1];You dont have enough 🦓]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else
$if[$message[1]==ze]
**$userName sold** \`$message[2]\`🦓 **for $multi[$message[2];29]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];29]]]
$setGlobalUserVar[zebra;$sub[$getGlobalUserVar[zebra];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[zebra]>=$multi[$message[2];1];You dont have enough 🦓]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else
$if[$message[1]==cow]
**$userName sold** \`$message[2]\`🐄 **for $multi[$message[2];23]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];23]]]
$setGlobalUserVar[cow;$sub[$getGlobalUserVar[cow];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cow]>=$multi[$message[2];1];You dont have enough 🐄]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]


$else
$if[$message[1]==bull]
**$userName sold** \`$message[2]\`🐄 **for $multi[$message[2];23]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];23]]]
$setGlobalUserVar[cow;$sub[$getGlobalUserVar[cow];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cow]>=$multi[$message[2];1];You dont have enough 🐄]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]


$else

$if[$message[1]==cat]
**$userName sold** \`$message[2]\`🐈 **for $multi[$message[2];23]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];23]]]
$setGlobalUserVar[cat;$sub[$getGlobalUserVar[cat];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cat]>=$multi[$message[2];1];You dont have enough 🐈]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]


$else
$if[$message[1]==kitty]
**$userName sold** \`$message[2]\`🐈  **for $multi[$message[2];23]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];23]]]
$setGlobalUserVar[cat;$sub[$getGlobalUserVar[cat];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cat]>=$multi[$message[2];1];You dont have enough 🐈]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]


$else

$if[$message[1]==chicken]
**$userName sold** \`$message[2]\`:baby_chick:  **for $multi[$message[2];63]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];63]]]
$setGlobalUserVar[bchick;$sub[$getGlobalUserVar[bchick];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[bchick]>=$multi[$message[2];1];You dont have enough :baby_chick:]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]
$else

$if[$message[1]==bb]
**$userName sold** \`$message[2]\`:baby_chick:  **for $multi[$message[2];63]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];63]]]
$setGlobalUserVar[bchick;$sub[$getGlobalUserVar[bchick];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[bchick]>=$multi[$message[2];1];You dont have enough :baby_chick:]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]
$else


$if[$message[1]==bee]
**$userName sold** \`$message[2]\`:bee:  **for $multi[$message[2];71]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];71]]]
$setGlobalUserVar[bee;$sub[$getGlobalUserVar[bee];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[bee]>=$multi[$message[2];1];You dont have enough :bee:]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]
$else
$if[$message[1]==bb]
**$userName sold** \`$message[2]\`:bee:  **for $multi[$message[2];71]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];71]]]
$setGlobalUserVar[bee;$sub[$getGlobalUserVar[bee];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[bee]>=$multi[$message[2];1];You dont have enough :bee:]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==chipmunk]
**$userName sold** \`$message[2]\`:chipmunk:  **for $multi[$message[2];81]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];81]]]
$setGlobalUserVar[chipmunk;$sub[$getGlobalUserVar[chipmunk];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[chipmunk]>=$multi[$message[2];1];You dont have enough :chipmunk:]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==cm]
**$userName sold** \`$message[2]\`:chipmunk:  **for $multi[$message[2];81]$getservervar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];81]]]
$setGlobalUserVar[chipmunk;$sub[$getGlobalUserVar[chipmunk];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[chipmunk]>=$multi[$message[2];1];You dont have enough :chipmunk:]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==lizard]
**$userName sold** \`$message[2]\`<a:hlizard:908368427385757747>  **for $multi[$message[2];26]$getservervar[ssimbol]**

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];26]]]
$setGlobalUserVar[hlizard;$sub[$getGlobalUserVar[hlizard];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[hlizard]>=$multi[$message[2];1];You dont have enough <a:hlizard:908368427385757747>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==liz]
**$userName sold** \`$message[2]\`<a:hlizard:908368427385757747>  **for $multi[$message[2];26]$getservervar[ssimbol]**

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];26]]]
$setGlobalUserVar[hlizard;$sub[$getGlobalUserVar[hlizard];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[hlizard]>=$multi[$message[2];1];You dont have enough :<a:hlizard:908368427385757747>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==snake]
**$userName sold** \`$message[2]\`<a:hsnake:908368509615087626>  **for $multi[$message[2];70]$getservervar[ssimbol]**

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];70]]]
$setGlobalUserVar[hsnake;$sub[$getGlobalUserVar[hsnake];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[hsnake]>=$multi[$message[2];1];You dont have enough <a:hsnake:908368509615087626>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==snk]
**$userName sold** \`$message[2]\`<a:hsnake:908368509615087626>  **for $multi[$message[2];70]$getservervar[ssimbol]**

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];70]]]
$setGlobalUserVar[hsnake;$sub[$getGlobalUserVar[hsnake];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[hsnake]>=$multi[$message[2];1];You dont have enough <a:hsnake:908368509615087626>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==squid]
**$userName sold** \`$message[2]\`<a:hsquid:908368604452503574>  **for $multi[$message[2];100]$getservervar[ssimbol]**

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];100]]]
$setGlobalUserVar[hsquid;$sub[$getGlobalUserVar[hsquid];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[hsquid]>=$multi[$message[2];1];You dont have enough <a:hsquid:908368604452503574>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else


$if[$message[1]==sq]
**$userName sold** \`$message[2]\`<a:hsquid:908368604452503574>  **for $multi[$message[2];100]$getservervar[ssimbol]**

$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];100]]]
$setGlobalUserVar[hsquid;$sub[$getGlobalUserVar[hsquid];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[hsquid]>=$multi[$message[2];1];You dont have enough <a:hsquid:908368604452503574>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]
$else



$if[$message[1]==iron]
**$userName sold** \`$message[2]\`<:iron:911929448343932989>  **for $multi[$message[2];25]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];25]]]
$setGlobalUserVar[iron_ore;$sub[$getGlobalUserVar[iron_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[iron_ore]>=$multi[$message[2];1];You dont have enough <:iron:911929448343932989>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==bronze]
**$userName sold** \`$message[2]\`<:bronze:911929393214013501>  **for $multi[$message[2];50]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];50]]]
$setGlobalUserVar[bronze_ore;$sub[$getGlobalUserVar[bronze_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[bronze_ore]>=$multi[$message[2];1];You dont have enough <:bronze:911929393214013501>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==gold]
**$userName sold** \`$message[2]\`<:gold:911929526940991508>  **for $multi[$message[2];75]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];75]]]
$setGlobalUserVar[gold_ore;$sub[$getGlobalUserVar[gold_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[gold_ore]>=$multi[$message[2];1];You dont have enough <:gold:911929526940991508>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==diamond]
**$userName sold** \`$message[2]\`<:diamonddd:911929573443264542>  **for $multi[$message[2];100]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];100]]]
$setGlobalUserVar[diamond_ore;$sub[$getGlobalUserVar[diamond_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[diamond_ore]>=$multi[$message[2];1];You dont have enough <:diamonddd:911929573443264542>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]
$else

$if[$message[1]==irn]
**$userName sold** \`$message[2]\`<:iron:911929448343932989>  **for $multi[$message[2];25]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];25]]]
$setGlobalUserVar[iron_ore;$sub[$getGlobalUserVar[iron_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[iron_ore]>=$multi[$message[2];1];You dont have enough <:iron:911929448343932989>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==bnz]
**$userName sold** \`$message[2]\`<:bronze:911929393214013501>  **for $multi[$message[2];50]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];50]]]
$setGlobalUserVar[bronze_ore;$sub[$getGlobalUserVar[bronze_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[bronze_ore]>=$multi[$message[2];1];You dont have enough <:bronze:911929393214013501>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==gd]
**$userName sold** \`$message[2]\`<:gold:911929526940991508>  **for $multi[$message[2];75]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];75]]]
$setGlobalUserVar[gold_ore;$sub[$getGlobalUserVar[gold_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[gold_ore]>=$multi[$message[2];1];You dont have enough <:gold:911929526940991508>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else

$if[$message[1]==dmnd]
**$userName sold** \`$message[2]\`<:diamonddd:911929573443264542>  **for $multi[$message[2];100]$getServerVar[simbol]**

$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[$message[2];100]]]
$setGlobalUserVar[diamond_ore;$sub[$getGlobalUserVar[diamond_ore];$multi[1;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[diamond_ore]>=$multi[$message[2];1];You dont have enough <:diamonddd:911929573443264542>]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]

$else



:x: Invalid argument you may only sell \`zebra\`**(ze)**,\`cow\`**(bull)**,\`cat\`**(kitty)** \`chicken\`**(bb)** \`bee\`**(b)** \`chipmunk\`**(cm)** \`lizard\`**(liz)** \`snake\`**(sn)** \`squid\`**(sq)** \`iron\`**(irn)** \`bronze\`**(bnz)** \`gold\`**(gd)** \`diamond\`**(dmnd)**
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
$endif`}
