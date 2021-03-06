//For Loops//
//Instead of writing this//
console.log("1");
console.log("2");
console.log("3");
console.log("4");

//write something like this instead//
for (var i = 4; i <= 20; i = i + 1) {
	console.log(i);
}

//running for loops over arrays//
var names = ["Tyler", "Karla", "Whitney", "Preston", "Raiden"];

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



// ok way to write the following code//
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


//more practice//

var isEven = function(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

for (i = 0; i < 10; i++) {
    console.log("all work no play makes jackgit add . a dull boy");
}

//switch statements//
var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

switch(lunch){
  case 'sandwich':
    console.log("Sure thing! One sandwich, coming up.");
    break;
  case 'soup':
    console.log("Got it! Tomato's my favorite.");
    break;
  case 'salad':
    console.log("Sounds good! How about a caesar salad?");
    break;
  case 'pie':
    console.log("Pie's not a meal!");
    break;
  default:
    console.log("Huh! I'm not sure what " + lunch + " is. How does a sandwich sound?");
}

//color prompter//
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
      console.log("That's the color of Big Bird!");
      break;
  default:
    console.log("I don't think that's a primary color!");
}

//snes prompter//
var answer = prompt("What is your favorite SNES game?");

switch(answer) {
  case 'Super Mario World':
    console.log("That's one of my favorites");
        break;
  case 'Super Metroid':
    console.log("Metroidvania bro!!!!");
        break;
    default:
    console.log("That's not even worth playing");
}

//animal prompter//
var pet = prompt("What's your favorite type of pet animal?");

switch(pet) {
    case 'cat':
        console.log("Nice choice. Cats ban be very relaxing animals");
        break;
    case 'dog':
        console.log("Dogs are so much fun!");
        break;
    case 'fish':
        console.log("give the poor fish a break");
        break;
    default:
        console.log("That pet is not even worth owning");
}

//practicing if, and, or//
var hungry = true;
var foodHere = true;

var eat = function() {
  if (hungry && foodHere) {
  return true;
} else {
    return false;
}
};

//or statements//
var tired = true;
var bored = false;


var nap = function() {
  if (tired || bored === true) {
      return true;
  } else {
      return false;
  }
};

//not syntax//
var programming = false;


var happy = function() {
  if (programming === false) {
      return !false;
  } else {
      return !true;
  }
};

//a game//
var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

switch(troll) {
  case 'FIGHT':
    var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
    var smart = prompt("Are you smart?").toUpperCase();
    if(strong === 'YES' || smart === 'YES') {
      console.log("You only need one of the two! You beat the troll--nice work!");
      } else {
      console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
    }
    break;
  case 'PAY':
    var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
    var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
    if(money === 'YES' && dollars === 'YES') {
      console.log("Great! You pay the troll and continue on your merry way.");
    } else {
      console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
    }
    break;
    case 'RUN':
    var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
    var headStart = prompt("Did you get a head start?").toUpperCase();
    if(fast === 'YES' || headStart === 'YES') {
      console.log("You got away--barely! You live to stroll through the forest another day.");
    } else {
      console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
    }
    break;
  default:
    console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
}