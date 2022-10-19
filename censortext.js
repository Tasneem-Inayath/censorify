var censoredWords =  ["sad","bad","mad"];
var customCensorWords=[];
function censor(intStr) {
for (idx in censoredWords){
inStr = inStr.replace(censoredWords[idx],"****");
}
return inStr;
}
function addCensoredWord(word)
{
customCensoredWords.push(word);
}
function getCensoresWords(){
return censoredWords.concat(customCensoredWords);
}
exports.censor=censor;
exports.addCensoredWord=addCensoredWord;
exports.getCensoredWords=getCensoredWords;
