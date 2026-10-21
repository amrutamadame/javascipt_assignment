//Flight booking fullname function

function getFullName(fullName1, fullName2, useFormalName) {
  if (useFormalName) {
    return `Lord ${fullName1} ${fullName2}`;
  } else {
    return `${fullName1} ${fullName2}`;
  }
}
console.log(getFullName("Benjamin", "Hughes", true));
console.log(getFullName("Benjamin", "Hughes", false));
console.log(getFullName("Benjamin", "Hughes"));

//Event application
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(num) {
  const today = new Date();
  const dayOfWeekIndex = today.getDay();
  const eventDay = (dayOfWeekIndex + num) % 7;
  return days[eventDay];
}

console.log(getEventWeekday(8));
console.log(getEventWeekday(3));

//Weather wear

function clothsToWear(temp) {
  if (temp > 20) {
    return `T-shirt and shorts.`;
  } else if (temp > 10) {
    return `Light clothes.`;
  } else if (temp > 0) {
    return `Jackets and thick clothes.`;
  } else {
    return `Winter clothes, scarf, woolen caps and winter shoes.`;
  }
}
console.log(clothsToWear(25));

//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (studentName === "") {
    console.log(`Can not add empty string to class.`);
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class.`);
  } else if (
    class07Students.length < 6 ||
    studentName.toLowerCase() == "queen mary"
  ) {
    class07Students.push(studentName);
  } else {
    console.log(`Cannot add more students to class 07`);
  }
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

addStudentToClass("");

addStudentToClass("Amruta");
addStudentToClass("Praful");
addStudentToClass("Ridhant");
addStudentToClass("Ovish");
addStudentToClass("Mishka");
addStudentToClass("Shilpa");

addStudentToClass("Madhuri");
addStudentToClass("Queen Mary");
addStudentToClass("Amruta");

console.log(class07Students);
console.log(getNumberOfStudents());

//Candy helper optional

const candyTablePrices = ["candyTable", "candyPrice"];
const candyTable = ["Sweet", "Chocolate", "Toffee", "Chewing-gum"];
const candyPrice = [0.5, 0.7, 1.1, 0.03];
const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  if (candyType === "Sweet") {
    boughtCandyPrices.push(candyPrice[0] * weight);
  } else if (candyType === "Chocolate") {
    boughtCandyPrices.push(candyPrice[1] * weight);
  } else if (candyType === "Toffee") {
    boughtCandyPrices.push(candyPrice[2] * weight);
  } else if (candyType === "Chewing-gum") {
    boughtCandyPrices.push(candyPrice[3] * weight);
  }
}

const amountToSpend = Math.random() * 100;

let total_price = 0;

function canBuyMoreCandy() {
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    total_price = total_price + boughtCandyPrices[i];
  }

  console.log(`Total price : ${total_price}`);

  if (total_price < amountToSpend) {
    return `You can buy more, so please do!`;
  } else {
    return `Enough candy for you!`;
  }
}

addCandy("Sweet", 20);
addCandy("Chocolate", 100);
addCandy("Toffee", 100);
addCandy("Chewing-gum", 100);

console.log(boughtCandyPrices);
console.log(`Amount to spend : ${amountToSpend}`);
console.log(canBuyMoreCandy());
