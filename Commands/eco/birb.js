module.exports = {
name: "birb",
aliases: ['pet','bird','birdy'],
code: `
$if[$message[1]==]
$thumbnail[https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$color[YELLOW]
$footer[Birdy bird bird;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$author[Your pet birb;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$description[
**==Pet birby==**

- <:bird_hunger:913156154660642926> **hunger**: \`$getGlobalUserVar[birb_hungry]%\`

- <:birdy_thirts:913156268359831593> **thirst**: \`$getGlobalUserVar[birb_thirst]%\`

- <:sleepy:913156081876865025> **sleep**: \`$getGlobalUserVar[birb_sleep]%\`

- <:bird_love:913156214089728031> **love**: \`$getGlobalUserVar[birb_love]%\`

- <:birdyname:913156358025662464> **name**: \`$getGlobalUserVar[birb_name]\`]
$onlyIf[$getGlobalUserVar[birb_thirst]>5;birb needs some <:birdy_thirts:913156268359831593>]
$onlyIf[$getGlobalUserVar[birb_sleep]>5;birb needs some <:sleepy:913156081876865025>]
$onlyIf[$getGlobalUserVar[birb_hungry]>5;birb needs some <:bird_hunger:913156154660642926>]
$onlyIf[$getGlobalUserVar[birb]>=1; go buy a birb first :)]
$else
$if[$message[1]==play]
$thumbnail[https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$color[YELLOW]
$footer[Birdy bird bird;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$author[Your pet birb;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$description[
**==Birb is happy==**

**You took ** \`$getGlobalUserVar[birb_name]\` **$randomText[to the theater;for a walk;for dinner;to play]** 

**────────────────────**
**Rewards!**

+ <:bird_love:913156214089728031> \`$random[1;10]\`]

$setGlobalUserVar[birb_love;$sum[$getGlobalUserVar[birb_love];$random[1;10]]]
$onlyIf[$getGlobalUserVar[birb]>=1; go buy a birb first :)]
$else
$if[$message[1]==sleep]
$thumbnail[https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$color[YELLOW]
$footer[Birdy bird bird;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$author[Your pet birb;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$description[
**==Birb is sleepy==**

**You made ** \`$getGlobalUserVar[birb_name]\` **go to sleep** 

**────────────────────**
**Rewards!**

+ <:sleepy:913156081876865025> \`$random[1;15]\`]
$onlyIf[$getGlobalUserVar[birb_sleep]<100;**Birb dont wanna sleep right now :)**]
$setGlobalUserVar[birb_sleep;$sum[$getGlobalUserVar[birb_sleep];$random[1;15]]]
$onlyIf[$getGlobalUserVar[birb]>=1; go buy a birb first :)]
$else
$if[$message[1]==feed]

$thumbnail[https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$color[YELLOW]
$footer[Birdy bird bird;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$author[Your pet birb;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$description[
**==Birb is hungry==**

**You feed ** \`$getGlobalUserVar[birb_name]\` \`$multi[$message[2];1]\` <:birdfood:913155845691437097> 

**────────────────────**
**Rewards!**

+ <:bird_hunger:913156154660642926> \`$multi[$message[2];2]\`]
$onlyIf[$getGlobalUserVar[birb_food]>=$multi[$message[2];1];you need atleast 1 food]
$setGlobalUserVar[birb_food;$sub[$getGlobalUserVar[birb_food];$multi[$message[2];1]]]
$setGlobalUserVar[birb_hungry;$sum[$getGlobalUserVar[birb_hungry];$multi[$message[2];2]]]
$onlyIf[$getGlobalUserVar[birb]>=1; go buy a birb first :)]
$onlyIf[$message[2]>=1;**Specify an amount to feed** ]
$else
$if[$message[1]==water]

$thumbnail[https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$color[YELLOW]
$footer[Birdy bird bird;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$author[Your pet birb;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$description[
**==Birb is thirsty==**

**You gave ** \`$getGlobalUserVar[birb_name]\` \`$multi[$message[2];1]\` <:waterrr:913155906408177755> **to drink** 

**────────────────────**
**Rewards!**

+ <:birdy_thirts:913156268359831593> \`$multi[$message[2];2]\`]
$onlyIf[$getGlobalUserVar[birb_water]>=$multi[$message[2];1];you need atleast 1 birb water]
$setGlobalUserVar[birb_water;$sub[$getGlobalUserVar[birb_water];1]]
$setGlobalUserVar[birb_thirst;$sum[$getGlobalUserVar[birb_thirst];$multi[$message[2];2]]]
$onlyIf[$getGlobalUserVar[birb]>=1; go buy a birb first :)]
$onlyIf[$message[2]>=1;**Specify an amount**]
$else
$if[$message[1]==rename]


$thumbnail[https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$color[YELLOW]
$footer[Birdy bird bird;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$author[Your pet birb;https://images-ext-1.discordapp.net/external/N8817teQKSTfdUMHLWwKR0NYhCBFjPyWDyp_sjljfdI/https/cdn.discordapp.com/avatars/855415827725942805/e13a3f2744daccf5c5edc2f3d2bfb6b8.png]
$description[
== Birb has new name==

**You changed birbs name to** \`$removeSpecialChars[$message[2]]\`]
$onlyIf[$charCount[$message[2]]=<15;birbs name cant be more than \`15\` charactars]
$setGlobalUserVar[birb_name;$removeSpecialChars[$message[2]]]
$onlyIf[$getGlobalUserVar[birb]>=1; go buy a birb first :)]
$endif
$endif
$endif
$endif
$endif
$endif`}