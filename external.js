
var externalVariable= " this is an external variable ";
var test=" test variable";
console.log(externalVariable);


// === Part 1: Login & Access Control ===
let username = prompt("Enter your username (admin or user):");
let password = prompt("Enter your password:");
if ((username === "admin" || username === "user") && password === "1234") {
  let role = username;
  let securityLevel = username === "admin" ? "high" : "low";

  // === Part 2: Coffee Shop Order Calculator ===
  let name = prompt("What is your name?");
  let age = parseInt(prompt("How old are you?"));
  let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
  let quantity = parseInt(prompt("How many cups would you like?"));
let pricePerCup;
  if (coffeeType === "espresso") {
    pricePerCup = 2.5;
  } else if (coffeeType === "latte") {
    pricePerCup = 3.5;
  } else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
  } else {
    alert("Invalid coffee type selected.");
    throw new Error("Invalid input.");
  }

  let originalTotal = pricePerCup * quantity;
  let discount = (age < 18 || age > 60) ? originalTotal * 0.1 : 0;
  let finalTotal = originalTotal - discount;

  // === Part 3: Bill Splitter with Tip ===
  let split = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
  let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));
  let tipAmount = finalTotal * (tipPercent / 100);
  let totalWithTip = finalTotal + tipAmount;
  let perPerson = totalWithTip / split;

  // === Output Result ===
  alert(`Hello name!
You ordered{quantity} coffeeType(s).
Original total:originalTotal.toFixed(2)
Discount:discount.toFixed(2)
Tip:tipAmount.toFixed(2)
Total with Tip:totalWithTip.toFixed(2)
Split between{split} person(s): 
    
{perPerson.toFixed(2)} each`);
  
} else {
  alert("Incorrect username or password. Access denied.");}
// === Part 1: Login & Access Control ===


if ((username === "admin" || username === "user") && password === "1234") {
  let role = username;
  let securityLevel = role === "admin" ? "high" : "low";



  // === Part 2: Coffee Shop Order Calculator ===
  let name = prompt("What is your name?");
  let age = parseInt(prompt("How old are you?"));
  let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
  let quantity = parseInt(prompt("How many cups would you like?"));

  let pricePerCup;

  if (coffeeType === "espresso") {
    pricePerCup = 2.5;
  } else if (coffeeType === "latte") {
    pricePerCup = 3.5;
  } else if (coffeeType === "cappuccino") {
    pricePerCup = 4.0;
  } else {
    alert("Invalid coffee type selected.");
    throw new Error("Invalid coffee type.");
  }

  let originalTotal = pricePerCup * quantity;
  let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
 
  alert(`Hello name!
You ordered{quantity} coffeeType(s).
Original total:originalTotal.toFixed(2)
Discount:discount.toFixed(2)
Final total after discount:${finalTotal.toFixed(2)}`);
  
} else {
  alert("Incorrect username or password. Access denied.");}
// === Part 2: Coffee Shop Order Calculator ===
let name = prompt("What is your name?");
let age = parseInt(prompt("How old are you?"));
let coffeeType = prompt("Choose your coffee: espresso, latte, or cappuccino").toLowerCase();
let quantity = parseInt(prompt("How many cups would you like?"));

let pricePerCup;
if (coffeeType === "espresso") {
  pricePerCup = 2.5;
} else if (coffeeType === "latte") {
  pricePerCup = 3.5;
} else if (coffeeType === "cappuccino") {
  pricePerCup = 4.0;
} else {
  alert("Invalid coffee type.");
  throw new Error("Invalid coffee type.");
}

let originalTotal = pricePerCup * quantity;
let discount = (age < 18 || age > 60) ? originalTotal * 0.10 : 0;
let finalTotal = originalTotal - discount;

// === Part 3: Bill Splitter with Tip ===
let split = parseInt(prompt("How many people are splitting the bill? (1, 2, or 3)"));
let tipPercent = parseInt(prompt("Enter tip percentage (0, 5, 10, or 15):"));let tipAmount = finalTotal * (tipPercent / 100);
let totalWithTip = finalTotal + tipAmount;
let perPerson = totalWithTip / split;

// === Final Output ===
alert(`Hello name!
You ordered{quantity} coffeeType(s).Original total:originalTotal.toFixed(2)
Discount:discount.toFixed(2)
Tip:tipAmount.toFixed(2)
Total with Tip:totalWithTip.toFixed(2)
Split between{split} people: 
    
{perPerson.toFixed(2)} each`);

