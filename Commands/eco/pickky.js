module.exports = {
name: "pickaxe",
code: `
$if[$message==list]
$author[Pickaxe list]
$thumbnail[https://images-ext-1.discordapp.net/external/_ex-WHoCGnhpQzWdO03AYxTlfytBhoVtX5FupBnO98c/https/cdn.discordapp.com/emojis/848987975660470278.gif]
$color[GREEN]
$description[
<:lives:911943339362897930> Will tell you how much durability it has
$getServervAr[simbol] Is the prize

<:wooden:911934551167750155> **Wooden pickaxe**
<:lives:911943339362897930> 10
$getservervar[simbol] 100

<:iron:911934565516443649> **Iron pickaxe**
<:lives:911943339362897930> 15
$getservervar[simbol] 1,500

<:golden:911934684894744626> **Golden pickaxe**
<:lives:911943339362897930> 20
$getservervar[simbol] 2,500

<:diamond:911934710807142441> **Diamond pickaxe**
<:lives:911943339362897930> 25
$getservervar[simbol] 10,000]
$endif`}