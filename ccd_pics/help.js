/*help.js*/

var list = [];
var textfile = "ccd_pics/names.txt"
var file = File(textfile);
file.open("r");
while(!file.eof){
	list += file.readln() + '\n';
console.log(list);

}

