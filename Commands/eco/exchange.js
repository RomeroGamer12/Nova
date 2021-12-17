module.exports = {
name: "exchange",
aliases: "convert",
code: `
$if[$message[1]==evil]
**You just converted** \`$message[2]\` $getservervar[ssimbol] **to** \`$message[2]\`$getservervar[simbol]




$setGlobalUserVar[evil;$sub[$getGlobalUserVar[evil];$multi[$message[2];1]]]
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$multi[10000;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[evil]>=$multi[$message[2];1];You dont have enough $getservervar[ssimbol] **every** \`1\`$getservervar[ssimbol] **converts to \`10,000\`$getservervar[simbol]]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]
$else
$if[$message[1]==cash]
**You just converted** \`$multi[message[2];10000]\`$getservervar[simbol] **to** \`$message[2]\`$getservervar[ssimbol]




$setGlobalUserVar[evil;$sum[$getGlobalUserVar[evil];$multi[$message[2];1]]]
$setGlobalUserVar[cash;$sub[$getGlobalUserVar[cash];$multi[10000;$message[2]]]]

$onlyIf[$checkContains[$message[2];-;\;/;.;,;[;];_;+;$;?;(;);{;};!;@;#;%;^;&;*;|;>;<]==true;Why would you want to buy that just so you know your message can  not conatin the following charactars
\`\`\`
- ;\ / . ,  _ +  $  ? ( ) { } ! @ # % ^ & * | > <
\`\`\`]
$onlyIf[$getGlobalUserVar[cash]>=$multi[$message[2];10000];You dont have enough $getservervar[ssimbol] **it costs** \`10;000\`$getservervar[simbol] to convert it to \`1\`$getservervar[ssimbol]]
$onlyIf[$message[2]>=1;**please specify the amount you want to sell**]





$else
:x: Invalid arguments provided... you may only exchange
\`evil\` and \`cash\`
if you choose soul you conver $getservervar[ssimbol] to $getservervar[simbol] but if you cboose cash its the other way around
$endif
$endif
`
}