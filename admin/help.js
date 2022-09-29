async function menubot(nayla, satu, listmenu, nay1, from, prefix ) {
var menu = "[ *BOT-MENU* ]\n"
if (satu == "utama"){  var menu1 = listmenu.utama } 
if (satu == "randomtag"){ var menu1 = listmenu.randomtag }  
if (satu == "cek"){ var menu1 = listmenu.cek } 
if (satu == "kerangajaib"){ var menu1 = listmenu.kerangajaib } 
if (satu == "group"){ var menu1 = listmenu.group } 
if (satu == "storage"){ var menu1 = listmenu.storage } 
if (satu == "ownerr"){ var menu1 = listmenu.owner } 
if (satu == "hacker"){ var menu1 = listmenu.hacker } 
if (satu == "tagx"){ var menu1 = listmenu.tagx } 
if (satu == "tagv"){ var menu1 = listmenu.tagv } 
if (satu == "creatif"){ var menu1 = listmenu.creatif } 
if (satu == "download"){ var menu1 = listmenu.download } 
if (satu == "audio"){ var menu1 = listmenu.audio } 
if (satu == "game"){ var menu1 = listmenu.game } 
if (satu == "maker"){ var menu1 = listmenu.maker } 
if (satu == "search"){ var menu1 = listmenu.search } 
if (satu == "stress"){ var menu1 = listmenu.stress } 
if (satu == "random"){ var menu1 = listmenu.random } 

Object.keys(menu1).forEach((i) => {
menu += `➺ *${prefix}` + menu1[i] + "*\n"})
nayla.sendMessage(from, {text:menu},{quoted:nay1})
}
module.exports = { menubot }  
 















 
 
 
 
 
 
 
 
 
 
 
 
 
 
 