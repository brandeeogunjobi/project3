alert("JavaScript works!");

//alert("JavaScript works!");

// Brandee Ogunjobi
// SDI Term 1408
// Project 3

//Start - 
	alert("Hello!");
	
// Global Variables ///
var ll = 15;
var yy = 25;
var myBrother = "Tyelerr";
var myBoy = "Johnny";
var l = true, y = true, w = false;
var q = "What is 10+10?"
var a = 20;
var c = "<h2>Great job!</h2>"
var ic = "<h2>Sorry, right answer was \20.</h2>"
var cupSales = " cups of Lemonade"
var cream = "Ice Cream"
var whatTime = "Five O'Clock"
var cream = "Ice Cream";
var myBoy = "Johnny";
var myBrother = "Tyelerr"
var lemonadeSales = "exceeded your sales"
var stringA = "If it is hot outside,"
var stringB = "the boys will sell "
var question ="Did the boys make there sales quota?"
var boysName = "Happy Faces"
var reward = "Yummy Yum"
var appleStreet = false;
var beanStreet = false;
var javaStreet = true;
var avocadoIce = false;
var chileIce = false;
var chocoice = true;
var myBoy = "Johnny"
var myBrother = "Tyelerr" 
var timePlay = "I wonder if "
var willBe = " will be up for the challenge!"

//Prompt
 var name = prompt ("Are you ready for the story?");

//Procedure 
var getGreetingByName = function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay, greeting;
		if (currentHour < 12) { timeOfDay = "morning"; }
		else if (currentHour < 17) { timeOfDay = "afternoon"; }
		else { timeOfDay = "evening"; }
		greeting = "Good " + timeOfDay + "," + name + "!";
		//console.log();
		return greeting;
};

var fullGreeting = getGreetingByName("Mr. Lewis");
console.log(fullGreeting);

//Conditional
var response = prompt(q,"20");
		if (response != a)
			 { alert("Wrong, it was 20!!"); }
		else { alert("Correct! You got it!"); }
var o = (response == a) ? c : ic;
		document.write("<BR/>");
		document.write(o);

//Number Function 
var ice = myFunction(3*5);
	console.log("They were so happy to exceed their goal selling over " 
	+ ice  + cupSales + ".");
	function myFunction(x, t) {
		return 3 * 5;
}

//Return String 

	alert:console.log("Don't worry, we will have the " + cream + " party soon!");

if (whatTime == "Five O'clock")
{
	console.log("whatTime is Five O'Clock");
}

//Boolean
var istrue=function (){
	if ((l && y) || w) {
			console.log("The expression is true");
			return true;
	} else {
			console.log("The expression is false");
			return false;
}
			console.log("So the results are in " + myBoy + " sold " + ll + ".");
			console.log("And " + myBrother + " sold " + yy + "!");
}
	var l = true; 
	if(l == true)
{
console.log("this is true");
}
if (istrue) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
}
	
// Return Value
var number1 = 3;
function times(number1)
{
	var c =(number1*5)
	console.log ;return c; 
}
var feedBoys = function (boysName, reward) {
	console.log("Gave some " + reward + " to " + boysName);
};
var boysName = "Happy Faces"
var reward = "Yummy Yummy Ice Cream"
feedBoys("The Boys", "Yummy Yum Ice Cream");
console.log("I already gave the little " + boysName + " some " + reward);

//Procedure
s=prompt('Do you have a favorite ice cream?','Chocolate Chip');
  alert('If you like ice cream join the story!');

//Output
console.log(myBoy +  " is waiting for his " + cream + ".");
console.log(myBoy + " and " + myBrother + " you both " +  lemonadeSales + "!" + " Are you ready for your party?");
console.log('Don\'t you just love ' + cream + "?");
console.log('My favorite ' + cream + " is vanilla!");
console.log(myBrother + " says the party is at " + whatTime + " and " + myBoy + ' shouts "hooray"!');

//Return Boolean
if ((!appleStreet && !beanStreet) || javaStreet) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
    }
    console.log("You made it to JavaStreet Ice Cream Shop!");
    
//Local Variables    - // Function
function myFunction() 
{
	var choco = "Chocolate Ice Cream";
	var vanilla = "Vanilla Ice Cream";
	if (choco != vanilla) {
			var straw = "Strawberry";
		} else {
			var mint = "Mint Chocolate Chip";
			console.log(mint); }
}
var mint = "Mint Chocolate Chip";
console.log(mint);

//While Loop 

 var scoops = 0;
console.log("Starting Loop" + "<br />");
while (scoops < 10){
  console.log("Current Count : " + "Get More Scoops!" + scoops + "<br />");
  scoops++;
}
console.log("Scoops Complete!");
console.log("Hope your enjoying that heaping ice cream sunday!");

//Return Boolean



if ((!avocadoIce && !chileIce) || chocoice) {
        console.log("The expression is true");
    } else {
        console.log("The expression is false");
    }
 {
}
// Function - //Nested Condition
var numberOfScoops = prompt("How many scoops did you eat?")

if(numberOfScoops===10)
{
    console.log("I finished ten scoops!")
}

else if(numberOfScoops<10)
{
    console.log("I couldn't finish!")
}
else if(numberOfScoops>10)
{
    console.log("I am the champion!")
}

// Number Function
var bellyAche = " Oh, I feel sick!"
var iceCream = myFunction(3*5);
	console.log("They were feeling sick Johnny ate " + iceCream  + " scoops and said, " + bellyAche);
	function myFunction(x, t) {
		return 2 * 5;
}

// Local Variable
if (name) {
	var name = "Johnny"
	console.log (name + " Go to bed and rest!");
}

// Math - Output

console.log(15 - 5);   
console.log(2 * 5);     
console.log(1 / 10);

// Function For Loop //Argument Array, //Array Method
	
function currentAt(iceCreamArray){

	for (var i = 0; i < iceCreamArray.length; i++) {  
		
		console.log('Currently at ' + iceCreamArray[i]);
		
	}
}
var iceCreamArray =[1,2,3,4,5,6,7,8,9,10];
currentAt(iceCreamArray); //Function with Argument Array

// Return Number - //Return Value - Output

var lemonadeMoney = function(useCash) {
	var pricePerScoop = 3,
		scoops;
	if (useCash < pricePerScoop) {
		console.log("That's not enough to buy anything!");
		scoops = 0;
	}
	scoops = Math.floor(useCash / pricePerScoop);
	return scoops;
};

var gotScoops = lemonadeMoney(30);
console.log("Thanks for buying " + gotScoops + " scoops of Ice Cream!");


function showName () {
	var name = "Ogunjobi"; ////// Local Variables(varibal within method)
	console.log (name);
}
showName(); //Print local variable
console.log (name);  //Print global variable
console.log(timePlay + myBoy + " and " + myBrother + willBe);

//Return String
var greet = function( person, greeting ) {
var text = greeting + ", " + person;
return text;
};
console.log( greet( "What should it be? ", " A new contest" ) ); 

//Return Array
var contestNames = ["Face Painting",
                 "Dunk Apples",
                 "Game Sorry",
                 "Treasure Hunt"],
    minutesPerGame = [20, 15, 25, 30],
    kidNames = ["Johnny", "Tyelerr", "Avery"];
    
var gameTime = function(whatGame) {
    var gameName = contestNames[whatGame],
        minutesThisGame = minutesPerGame[gameNumber];
    console.log(kidNames[0] + " wanted us to visit the " + gameName +
        " for " + minutesThisGame + " minutes. So I set the timer on" +
        " my watch!");
    for (var minutes = 0; minutes < minutesThisGame; minutes += 5) {
            var minutesRemain = minutesThisGame - minutes;
            console.log("We have " + minutesRemain + " minutes left. " +
                minutes + " minutes have past.");
        };
    console.log("We finished with the " + gameName + ".");
};

for (var gameNumber = 0; gameNumber < contestNames.length; gameNumber++) {
    gameTime(gameNumber);
};


//Function - //Nested Loop //Array Methord
function seeDream(){
	for(var i=0;i<iceCream.length;i++){
		var dreamIceCream=[];
		var eatIceCream=iceCream[i];
		var decoration=" ";
		var blank=" "
		for(var j=0;j<decorate.length;j++){ //Nested Loop
			 decoration=decoration+decorate[j]+blank; 	
		  
		}
		blank=" "
		var cone=eatIceCream +" with "+decoration
		dreamIceCream.push(cone); //Array Method
		console.log("He is in dream: eating  "+dreamIceCream.toString()+"</br>"); //array method
	}	

}

seeDream();

//JSON
var json2 = {
    "Contestants" : [
        {
        "vvid" : "0123456",
        "name" : "Johnny",
        "age": 21
        },
        {
        "vvid" : "0123457",
        "name" : "Tyelerr",
        "age": 42
        },
        {
        "vvid" : "0123458",
        "name" : "Avery",
        "age": 22
        }
    ]
};

var handleData = function (json) {
    console.log(json2);
};

handleData(json2);

