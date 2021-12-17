module.exports = {
name: "adventure",
code: `
$if[$random[1;5]==1]
**$username found and killed $randomText[<:peppa:912093172824440882> evil peppa pig;<:aois:912093245327175730> an evil demon;<:bbdragon:912094433414094939> a baby dragon;<:deaddragon:912094309988311091> white dragon;<:ghoul:912094234964815922> an angry man;<:zombie:912094508823498843> a zombie] and earned**

$getservervar[simbol] \`$random[40;500]\` **coins**
<:exp:912095450163740733> \`$random[40;500]\` **Xp**

**You lost $random[1;$getGlobalUserVar[hearts]] <:heartss:912095745304301628>**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[40;500]]]
$setGlobalUserVar[xpp;$sum[$getGlobalUserVar[xpp];$random[40;500]]]
$setGlobalUserVar[hearts;$sub[$getGlobalUserVar[hearts];$random[1;$getGlobalUserVar[hearts]]]]
$else
$if[$random[1;5]==2]
**$username found and killed $randomText[<:peppa:912093172824440882> evil peppa pig;<:aois:912093245327175730> an evil demon;<:bbdragon:912094433414094939> a baby dragon;<:deaddragon:912094309988311091> white dragon;<:ghoul:912094234964815922> an angry man;<:zombie:912094508823498843> a zombie] and earned**

$getservervar[simbol] \`$random[40;500]\` **coins**
<:exp:912095450163740733> \`$random[40;500]\` **Xp**

**You lost $random[1;$getGlobalUserVar[hearts]] <:heartss:912095745304301628>**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[40;500]]]
$setGlobalUserVar[xpp;$sum[$getGlobalUserVar[xpp];$random[40;500]]]
$setGlobalUserVar[hearts;$sub[$getGlobalUserVar[hearts];$random[1;$getGlobalUserVar[hearts]]]]
$else
$if[$random[1;5]==3]
**$username found and killed $randomText[<:peppa:912093172824440882> evil peppa pig;<:aois:912093245327175730> an evil demon;<:bbdragon:912094433414094939> a baby dragon;<:deaddragon:912094309988311091> white dragon;<:ghoul:912094234964815922> an angry man;<:zombie:912094508823498843> a zombie] and earned**

$getservervar[simbol] \`$random[40;500]\` **coins**
<:exp:912095450163740733> \`$random[40;500]\` **Xp**

**You lost $random[1;$getGlobalUserVar[hearts]] <:heartss:912095745304301628>**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[40;500]]]
$setGlobalUserVar[xpp;$sum[$getGlobalUserVar[xpp];$random[40;500]]]
$setGlobalUserVar[hearts;$sub[$getGlobalUserVar[hearts];$random[1;$getGlobalUserVar[hearts]]]]
$else
$if[$random[1;5]==4]
**$username found and killed $randomText[<:peppa:912093172824440882> evil peppa pig;<:aois:912093245327175730> an evil demon;<:bbdragon:912094433414094939> a baby dragon;<:deaddragon:912094309988311091> white dragon;<:ghoul:912094234964815922> an angry man;<:zombie:912094508823498843> a zombie] and earned**

$getservervar[simbol] \`$random[40;500]\` **coins**
<:exp:912095450163740733> \`$random[40;500]\` **Xp**

**You lost $random[1;$getGlobalUserVar[hearts]] <:heartss:912095745304301628>**
$setGlobalUserVar[cash;$sum[$getGlobalUserVar[cash];$random[40;500]]]
$setGlobalUserVar[xpp;$sum[$getGlobalUserVar[xpp];$random[40;500]]]
$setGlobalUserVar[hearts;$sub[$getGlobalUserVar[hearts];$random[1;$getGlobalUserVar[hearts]]]]
$else
$if[$random[1;5]==5]
**$username tried to kill $randomText[<:peppa:912093172824440882> evil peppa pig;<:aois:912093245327175730> an evil demon;<:bbdragon:912094433414094939> a baby dragon;<:deaddragon:912094309988311091> white dragon;<:ghoul:912094234964815922> an angry man;<:zombie:912094508823498843> a zombie] but they failed horribly** 

**You lost $random[1;$getGlobalUserVar[hearts]] <:heartss:912095745304301628>**
$setGlobalUserVar[hearts;$sub[$getGlobalUserVar[hearts];$random[1;$getGlobalUserVar[hearts]]]]
$endif
$endif
$endif
$endif
$endif
$onlyIf[$getGlobalUserVar[hearts]>=5;You need more than <:heartss:912095745304301628>5]
$globalCooldown[30s;Try again in %time%]`}