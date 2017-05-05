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
var names = ["Tyler", "Karla", "Whitney", "Preston", "Raiden", "Colin", "Erin" ];

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



//an ok way to write the following code//
var bool = true;

while(bool === true){
    console.log("Less is more!");
    bool = false;
}

//the cleaner JS way to write this would be//

var bool = true;

while(bool){
    console.log("Less is more!");
    bool = false;
}


//my first for loop//
//Remember to set your condition outside the loop!
count = 0;

var loop = function(){
    while(count < 3) {
        console.log("I'm looping!");
        count++;
    }
};

loop();

//another while loop//
//Remember to make your condition true outside the loop!
karla = true;

var soloLoop = function(){
    while(karla) {
  console.log("Looped once!");
  karla = false;
    }
};

soloLoop();

//this is a for and while loop//
for(i = 0; i < 10; i++) {
    console.log("Look... a for-loop!.. 10 times");
}

understand = true;
var superloop = function () {
    while (understand) {
        console.log("and a while loop 1 time...");
    }
};

// do/while loops will run until they are false //
arnold = false;

var getToDaChoppa = function () {
    do {
        console.log("get to the choppa!!!");
    } while (arnold);
};

getToDaChoppa();



//three classic loops//

for (i = 0; i < 10; i++) {
    console.log("this is number " + i + " in the for loop");
}

var karla = true;

while (karla) {
    console.log ("I love you!");
    karla = false;
}

var karla = false;
do {
    console.log("no more loops, because my loop condition is now " + karla);
} while (karla);