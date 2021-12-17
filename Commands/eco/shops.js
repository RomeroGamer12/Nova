module.exports = {
name: "shop",
code: ` 
$if[$message==]
$color[BLUE]
$title[**Hello $username this my shop**]
$footer[Shop page 1/4]
$description[
**use** \`$getservervar[prefix]buy <item> <amount>\`**to buy**

*Shards can be used for farming*

1. <:cropp:899245624745136159> **Pepper plant**
**Price -** $getServerVar[simbol] \`25\`
**Sell cost -** **Not sellable**
**Id -** \`plant\`
**Description -** **Plants are used for farming you can use it like** \`$getServerVar[prefix]farm <amount>\`

2. <:chandelierr:899245623809810462> **Chandelier**
**Price -** $getServerVar[simbol] \`250\`
**Sell cost -** **Not sellable**
**Id -** \`chandelier\`
**Description -** **Chandeliers do not have a use not yet and never will have a use**

3. <:lazer:899245625722408961> **Laser grids**
**Price -** $getServerVar[simbol] \`7,500\`
**Sell cost -** **Not sellable**
**Id -** \`laser\`
**Description -** **Laser grids are used as a boost for farming they are used like this** \`$getservervar[prefix]use laser\`

4. <:denk:909475525720936478> **Dank balance**
**Price -** $getServerVar[simbol] \`25,000\`
**Sell cost -** **Not sellable**
**Id -** \`dank\`
**Description -** **a dank memer balance template you can use it like this** \`$getservervar[prefix]settemplate dank\` **or reset it by doing** \`$getServerVar[prefix]settemplate normal\`

5. <:credit:909486226216726538> **Mars balance**
**Price -** $getServerVar[simbol] \`250,000\`
**Sell cost -** **Not sellable**
**Id -** \`mars\`
**Description -** **Mars bot balance template you can use it like this** \`$getservervar[prefix]settemplate mars\` **or reset it by doing** \`$getServerVar[prefix]settemplate normal\`]
$else
$if[$message==2]


$color[BLUE]
$title[**Hello $username this my shop**]
$footer[Shop page 2/4]
$description[
**use** \`$getservervar[prefix]buy <item> <amount>\`**to buy**

*Shards can be used for farming*

6. <:gem1:901156013313499156> **Silver gem**
**Price -** $getServerVar[simbol] \`6,500\`
**Sell cost -** **Not sellable**
**Id -** \`silver\`
**Description -** **Silver gems are used as a boost for farming** \`$getServerVar[prefix]use silver\`

7. <:gem2:901157795401961552> **Mythical gem**
**Price -** $getServerVar[simbol] \`9,700\`
**Sell cost -** **Not sellable**
**Id -** \`myth\`
**Description -** **Mythical gems are used as a boost for farming** \`$getServerVar[prefix]use myth\`

8. <:gtrophy:902956931440861224> **Golden trophy**
**Price -** $getServerVar[simbol] \`150,000\`
**Sell cost -** **Not sellable**
**Id -** \`trophy\`
**Description -** **Trophies are just here to flex on those normies use them like this** \`$getservervar[prefix]flex\`

9. <:badge2:903014140593987716> **Noob badge**
**Price -** $getServerVar[simbol] \`2,500\`
**Sell cost -** **Not sellable**
**Id -** \`noob\`
**Description -** **Imagine not buying this badge only for noobs check it out by doing** \`$getServerVar[prefix]profile\`

10. <:badge3:903014250493116428> **Pro badge**
**Price -** $getServerVar[simbol] \`7,500\`
**Sell cost -** **Not sellable**
**Id -** \`pickaxe\`
**Description -** **Imagine not buying this badge only for pros check it out by doing** \`$getServerVar[prefix]profile\`

11. <:badge4:903014386787041360> **God badge**
**Price -** $getServerVar[simbol] \`10,000\`
**Sell cost -** **Not sellable**
**Id -** \`god\`
**Description -** **Imagine not buying this badge only for gods check it out by doing** \`$getServerVar[prefix]profile\`]
$else
$if[$message==3]

$color[BLUE]
$title[**Hello $username this my shop**]
$footer[Shop page 3/4]
$description[
**use** \`$getservervar[prefix]buy <item> <amount>\`**to buy**

*Shards can be used for farming*

12. <:title1:903379667392794674> **Rich guy**
**Price -** $getServerVar[simbol] \`15,000,000\`
**Sell cost -** **Not sellable**
**Id -** \`rich\`
**Description -** **Damn a rich guy title??? thats so cool check it out by doing** \`$getservervar[prefix]titles\`

13. <:title2:903379772355264543> **God's son**
**Price -** $getServerVar[simbol] \`1,500,000\`
**Sell cost -** **Not sellable**
**Id -** \`titan\`
**Description -** **Becoming gods son is so cool check it out by doing** \`$getservervar[prefix]titles\`

14. <:title3:903379793213522011> **God of titles**
**Price -** $getServerVar[simbol] \`150,000,000\`
**Sell cost -** **Not sellable**
**Id -** \`titles\`
**Description -** **Becoming the gods of titles was never meant to exist check it out by doing** \`$getservervar[prefix]titles\`

15. <:hrifile:906261312949084221> **Hunting rifle**
**Price -** $getServerVar[simbol] \`250\`
**Sell cost -** **Not sellable**
**Id -** \`gun\`
**Description -** **Hunting rifles are used for hunting you can use them like** \`$getservervar[prefix]hunt\`
]
$else
$if[$message==4]
$color[BLUE]
$title[**Hello $username this my shop**]
$footer[Shop page 4/4]
$description[
**use** \`$getservervar[prefix]buy <item> <amount>\`**to buy**

***Crates can be used for gaining cool stuff***

16. <:commoncrate:908469163863969812> **Common crate**
**Price -** $getServerVar[simbol] \`5,000\`
**Sell cost -** **Not sellable**
**Id -** \`common\`
**Description -** **A common crate gives common related items open it like this** \`$getServerVar[prefix]crate common\`

17. <:uncommoncrate:908469223750258709> **Uncommon crate**
**Price -** $getServerVar[simbol] \`15,000\`
**Sell cost -** **Not sellable**
**Id -** \`uncommon\`
**Description -** **A uncommon crate gives uncommon related items open it like this** \`$getServerVar[prefix]crate uncommon\`

18. <:rarecrate:908469301525237810> **Rare crate**
**Price -** $getServerVar[simbol] \`75,000\`
**Sell cost -** **Not sellable**
**Id -** \`rare\`
**Description -** **A rare crate gives rare related items open it like this** \`$getServerVar[prefix]crate rare\`

19. <:Majecsticcrate:908469386183065611> **Majestic crate**
**Price -** $getServerVar[simbol] \`2,500,000\`
**Sell cost -** **Not sellable**
**Id -** \`majestic\`
**Description -** **Wow a majestic crate wow  thats cool a majestic crate gives OP items you can use it like this** \`$getServerVar[prefix]crate majestic\`

20. <:birdy:913155711339495474> **Pet birb**
**Price -** $getServerVar[simbol] \`250\`
**Sell cost -** **Not sellable**
**Id -** \`birb\`
**Description -** **a pet**

21. <:birdfood:913155845691437097> **Birb food**
**Price -** $getServerVar[simbol] \`25\`
**Sell cost -** **Not sellable**
**Id -** \`water\`

22. <:waterrr:913155906408177755> **Birb water**
**Price -** $getServerVar[simbol] \`25\`
**Sell cost -** **Not sellable**
**Id -** \`water\`



]
$endif
$endif
$endif
$endif`}
