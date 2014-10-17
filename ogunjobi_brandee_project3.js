//alert("JavaScript works!");

// Brandee Ogunjobi
// SDI Term 1410
// Project 3

//Start - 
	alert("Hello!");
	
//Global Variables
var myAssignments = ["Project 1", "Project 2", "Project 3"];
var gradeD = false;
var gradeF = false;
var gradeA = true;
var q = "What is 10+10?"
var a = 20;
var c = "<h2>Great job!</h2>"
var ic = "<h2>Sorry, right answer was \20.</h2>"
var ll = 95;
var yy = 85;
var myClass = "Tyelerr";
var myWork = "Project 3";
var l = true, y = true, w = false;
var name = "Brandee";
var age = 38;

//Return Value
var getGreetingByName = function (name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay,greeting;
	if (currentHour < 12) { timeOfDay = "Morning";}
	else if (currentHour < 17) { timeOfDay = "Afternoon";}
	else {timeOfDay = "Evening";}
		greeting ="Good " + timeOfDay + "," + name + "!";
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

//Nested Condition
	var numberOfGrades = prompt("How many assignments have you done?")

	if(numberOfGrades===04)
{
		console.log("I finished my work!")
} else if(numberOfGrades<04)
{
		console.log("I couldn't finish!")
}
	else if(numberOfGrades>04)
{
		console.log("I get extra credit!")
}

//Return String
	var greet = function(person,greet) {
	var text = greet + ", " + person;
	return text;
	};
	console.log(greet("is going great.","This project"));
			

//Argument Boolean
var istrue=function (){
	if ((l && y) || w) {
		console.log("The expression is true");
		return true;
		} else {
		console.log("The expression is false");
		return false;
		}
		console.log("So the results are in " + myWork + " got a " + ll + ".");
		console.log("And " + myClass + " total grade is a " + yy + "!");
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

//Return Boolean
if((!gradeD && !gradeF) || gradeA) {
        alert("The expression is true");
    } else {
        alert("The expression is false");
    }
    
 {
}

// Return Number 
var getReady = "course."
var courseWeeks = myFunction(4 * 1);
	console.log("In the upcoming class has " + courseWeeks  + " weeks in the " + getReady);
	function myFunction(x, t) {
		return 4 * 1;
}


//Array
	var myAssignments = ["Project 1", "Project 2", "Project 3"];

		console.log(myAssignments);
//Name Array Elements
		myAssignments[2] = "Project 3"
		console.log(myAssignments);
		myAssignments[5] = "Project 4"
		console.log(myAssignments);
		myAssignments[3] = "Project 4"
		myAssignments[4] = "Project 5"
		console.log(myAssignments);
		myAssignments[5] = "VFW"
		console.log(myAssignments);
		
//Outputs
console.log("My hardest assignment was " + myAssignments[3]);
console.log("Week 1: " + myAssignments[0]);
console.log("Week 2: " + myAssignments[1]);
console.log("Week 3: " + myAssignments[2]);
console.log("Week 4: " + myAssignments[3]);
console.log("Week 5: " + myAssignments[4]);
console.log("Week 6: " + myAssignments[5]);

//Array Property 
console.log("The total number of assignments is " + myAssignments.length);

//For Loop
for(var i = 0; i < myAssignments.length; i++) {
	
	console.log("Index " + i + ": " + myAssignments[i]);	
};

//Argument Array
if (myAssignments[3] === "Project 4 ") {
	console.log("The last project due is " + myAssignments[3]);	
} else {
	console.log("There are more assignments than " + myAssignments[3]);
};

//Array Method
myAssignments.push("Grade A+","Grade A","Grade B+");
	console.log(myAssignments);
myAssignments.pop("Grade B+");
	console.log(myAssignments);
myAssignments.pop("Grade A");
	console.log(myAssignments);
myAssignments.pop("Grade A+");
	console.log(myAssignments);

//Procedure
var tests = 4;
var discussions = 4;
var totalWork
var addition = function() {
	totalWork = tests + discussions;
	console.log("The total number is " + totalWork + " completed assignments." );
};
addition();
tests = 4;
discussions = 4;

//While Loop 

var homework = 0;
	console.log("Starting Loop" + "<br />");
while (homework < 08){
	console.log("Current Count : " + "Assignments! :" + homework + " <br />");
	homework++;
}
	console.log("Homework Complete!");
	console.log("Time to celebrate your hard work!");

//Function With Local Variables 
function myFunction() 
{
	var newWork = "Project 4 is next week.";
	var newClass = "VFW doesn't start yet.";
	if (newWork != newClass) {
			var study = "We still have time to study!";
		} else {
			var getBook = "New Work Book";
			console.log(getBook); }
}
	var getBook = "New Work Book";
	console.log(getBook);
	
//Return Array
var studyGroups = ["Code Academy",
                 " W3Schools",
                 "Full Sail Online",
                 "Google Search"],
    minutesPerStudy = [20, 15, 25, 30],
    siteNames = ["Team A", "Team B", "Team C"];
    
var siteTime = function(whatSite) {
    var siteName = studyGroups[whatSite],
        minutesThisSite = minutesPerStudy[siteNumber];
    console.log(siteNames[0] + " wanted us to visit the " + siteName +
        " for " + minutesThisSite + " minutes. So I set the timer on" +
        " my watch!");
 /*Nested Loop*/  for (var minutes = 0; minutes < minutesThisSite; minutes += 5) {
            var minutesRemain = minutesThisSite - minutes;
            console.log("We have " + minutesRemain + " minutes left. " +
                minutes + " minutes have past.");
        };
    console.log("We finished with the " + siteName + ".");
};

for (var siteNumber = 0; siteNumber < studyGroups.length; siteNumber++) {
    siteTime(siteNumber);
};

//Argument Number
var numberOfClasses = prompt("How many classes did you take?")

if(numberOfClasses===5) {
	console.log("I took enough!")
} else {(numberOfClasses<5)
	console.log("I didn't take enough!")
};

//Argument String
var Work = prompt("How much work did you do")

if(Work===true) {
	console.log("I finished!")
} else {(Work===false)
	console.log("I couldn't finish!")
};

//Number Function
function myFunction(a, b) {
    return a * b;             
}
console.log(myFunction(3,3));

//String Function
var carModel = "Volvo";
myFunction();

function myFunction() {
    console.log("I drive a 2014 " + carModel + ". ");
};

//Function
function sayHello(name, age)
{
   console.log( name + " is " + "name and I am " + age + " years old.");
};

//Function
var number = 31

if(number == 31){
  console.log("It's my birthday.")
  }
else{
  console.log("Not my birthday yet.")
  }
  
//Math
	console.log(365 - 200);
	console.log(365 + 200);
	console.log(365 * 200);

//JSON
var handleData = function (json) {
    for (var i = 0; i < json.projects.length; i++) {
	var project = json.projects[i];
	console.log("User ID: " + project.vvid + " Name: " + project.name + ", Date: " +
		    project.date);
    };
};
handleData(json2);

//
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

//Finish
console.log("Good Bye.");

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);



	






























































		
		
		
		
		
		