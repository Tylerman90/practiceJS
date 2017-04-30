//For Loops//
//Instead of writing this//
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

//write something like this instead//
for (var i = 4; i <= 23; i = i + 1) {
	console.log(i);
}

//running for loops over arrays//
var names = ["Tyler", "Karla", "Whitney", "Preston", "Raiden", "Colin"];

for (i = 0; i < names.length; i++) {
	console.log("I know someone called " + names[i]);
}


//loops within loops//
/*jshint multistr:true */
var text = "Hey, my name is Tyler and I think that my name Tyler is cool. If you don't think that the name Tyler is awesome, it's pobably because it's not your name.";
var myName = "Tyler";
var hits = [];

for (i = 0; i < text.length; i++) {
    if (text[i] === "T") {
        for (var j = i; j < (myName.length + i); j++) {
            hits.push(text[j]);
        }
    }
    if (hits.length === 0) {
        console.log("Your name wasn't found!");
    } else {
        console.log(hits);
    }
}