//Age-ify (A future age calculator)

let yearOfBirth = 1987;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture + ".");

//Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let dogAge = dogYear * 7;
let shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears === true) {
  console.log(
    "Your dog will be " + dogAge + " dog years old in " + dogYearFuture + ".",
  );
} else {
  console.log(
    "Your dog will be " +
      dogYear +
      " human years old in " +
      dogYearFuture +
      ".",
  );
}

//Housey pricey (A house price estimator)

let name = ["Peter", "Julia"];
let house = ["wide", "deep", "high", "gardenSizeInM2", "houseCost"];
const wide = [8, 5];
const deep = [10, 11];
const high = [10, 8];
const gardenSizeInM2 = [100, 70];
const houseCost = [2500000, 1000000];

let peterHouseVolumeInMeters = wide[0] * deep[0] * high[0];
let juliaHouseVolumeInMeters = wide[1] * deep[1] * high[1];

let peterHousePrice =
  peterHouseVolumeInMeters * 2.5 * 1000 + gardenSizeInM2[0] * 300;
let juliaHousePrice =
  juliaHouseVolumeInMeters * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (peterHousePrice < houseCost[0]) {
  console.log(
    "The house price is " +
      peterHousePrice +
      ". So Peter is paying: " +
      houseCost[0] +
      " which is too much for his house.",
  );
} else {
  console.log(
    "The house price is " +
      peterHousePrice +
      ". So Peter is paying: " +
      houseCost[0] +
      " which is too little for his house.",
  );
}

if (juliaHousePrice < houseCost[1]) {
  console.log(
    "The house price is " +
      juliaHousePrice +
      ". So Julia is paying: " +
      houseCost[1] +
      " which is too much for her house.",
  );
} else {
  console.log(
    "The house price is " +
      juliaHousePrice +
      ". So Julia is paying: " +
      houseCost[1] +
      " which is too little for her house.",
  );
}

//Ez Namey (Startup name generator)

let firstWords = [
  "Easy",
  "Awesome",
  "Corporate",
  "Innovative",
  "Creative",
  "NextGen",
  "Future",
  "Smart",
  "Dynamic",
  "Visionary",
];
let secondWords = [
  "Solutions",
  "Technologies",
  "Enterprises",
  "Innovations",
  "Designs",
  "Systems",
  "Concepts",
  "Ventures",
  "Labs",
  "Studios",
];

const randomNumberFirstWord = Math.floor(Math.random() * firstWords.length);
const randomNumberSecondWord = Math.floor(Math.random() * secondWords.length);

let startupName =
  firstWords[randomNumberFirstWord] + " " + secondWords[randomNumberSecondWord];

console.log("The startup name is : " + startupName);
