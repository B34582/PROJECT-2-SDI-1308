//alert("JavaScript works!");
// author : Joel Borgella
// Assignment : Project 2
// SDI : 1308

// Setting Variables
var productBrand = "Vizio"; 							// String Variable
var vizioStock = 25;									// Number Variable
var vizioSold = 25;										// Number Variable

var zeroStock = false;									// Boolean Value
var checkOut = [" Register for insurance", 				// Array // Argumnent To Call	
			 	" Offer a warranty", 
			 	" Delivery address confirmation", 
			 	" Offer Home Installation", 
			 	" Accept Payment"];
			
	

// Initial Outputs
console.log("We have a new product brand to add to our selection, we now offer " + productBrand + " in our retail search app!" );
console.log("Every " + productBrand + " we sell must go through our 5 step checkout process of which the most important are" + checkOut[3] + " and" + checkOut[4] + "." );
console.log("Today we have a total of " + vizioStock + " " + productBrand + " televisions to sell and all must go through the 5 Step checkout process which is:");

// My Function : (Using String and Concatenation)
var inventoryStatus = function () {
	var remainingStock = (vizioStock - vizioSold);
	console.log("We have only " + remainingStock + " " + productBrand + " remaining!" );
};

// For Loop
for (var i=0; i < checkOut.length; i++) {
	console.log( checkOut[i] );
};

// My Function : (procedure)
var sellProduct = function () {
	var checkOutprocess = 0;
	for (vizioSold = 0; vizioSold < vizioStock; vizioStock-=5) {
		console.log("We only have " + vizioStock + " left!");
	    console.log("We succesfully went through the 5 step checkout process " + (checkOutprocess+=5) + " times!");
	inventoryStatus();
		};
};

// My Function : (While Loop with math)
while (vizioStock >=25){
	sellProduct();
};
// My Function : (Boolean)
var soldOut = function (zeroStock) {
	zeroStock = (vizioSold = 25 && vizioStock <= 0);
	console.log("it is " + zeroStock + " that we are completly sold out of " + productBrand + " products!" );
	console.log("Bonuses for the staff!");
	};

soldOut();

// My Function w/ Argument Call


var quickCheckout = function (qCheckout) {
	qCheckout = [" Accept Payment", " by no longer accepting personal checks"," having lengthy conversations"];
	qCheckout.shift(qCheckout);
	qCheckout.push("always staying positive");
	console.log("To speed up checkout, we have shorten the tasks, " + qCheckout[0] + " and" + qCheckout[1] + "!");
	console.log("The real trick is " + qCheckout[2] + "!");
};

quickCheckout();

// My Function : Array & Number and use them in a for loop;








