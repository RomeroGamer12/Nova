module.exports = {
name: "purchase",
code: `


$if[$message[1]==future]


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];15000]]]
$setGlobalUserVar[future;$sum[$getGlobalUserVar[future];$multi[1;$message[2]]]]


You just bought the \`$message[2]\` future backgrounds for \`$multi[15000;$message[2]]\`$getservervar[simbol] make sure to set it 

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];15000];You dont have enough money]
$onlyIf[$message[2]>=1;you might want to specify an amount]
$else
$if[$message[1]==nature]


$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[$message[2];25000]]]
$setGlobalUserVar[nature;$sum[$getGlobalUserVar[nature];$multi[1;$message[2]]]]


You just bought the \`$message[2]\` nature backgrounds for \`$multi[25000;$message[2]]\`$getservervar[simbol] make sure to set it 

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];25000];You dont have enough money]
$onlyIf[$message[2]>=1;you might want to specify an amount]
$else

$if[$message[1]==green]


$setGlobalUserVar[soul;$sub[$getGlobalUserVar[soul];$multi[$message[2];1000]]]
$setGlobalUserVar[green;$sum[$getGlobalUserVar[green];$multi[1;$message[2]]]]


You just bought the \`$message[2]\` plant backgrounds for \`$multi[1000;$message[2]]\`$getservervar[ssimbol] make sure to set it 

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[soul]>=$multi[$message[2];1000];You dont have enough money]
$onlyIf[$message[2]>=1;you might want to specify an amount]
$else
:x: Invalid arguments provided \`$message[1]\` isnt purchasable you may only buy
\`nature\`,\`future\`,\`green\`
$endif
$endif
$endif`}
