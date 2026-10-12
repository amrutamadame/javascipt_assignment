//Age-ify (A future age calculator)

const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}.`);

//Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const dogAge = dogYear * 7;
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogAge} dog years old in ${dogYearFuture}.`);
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}.`,
  );
}

//Housey pricey (A house price estimator)

const name = ["Peter", "Julia"];
const house = ["wide", "deep", "high", "gardenSizeInM2", "houseCost"];
const wide = [8, 5];
const deep = [10, 11];
const high = [10, 8];
const gardenSizeInM2 = [100, 70];
const houseCost = [2500000, 1000000];

const peterHouseVolumeInMeters = wide[0] * deep[0] * high[0];
const juliaHouseVolumeInMeters = wide[1] * deep[1] * high[1];

const peterHousePrice =
  peterHouseVolumeInMeters * 2.5 * 1000 + gardenSizeInM2[0] * 300;
const juliaHousePrice =
  juliaHouseVolumeInMeters * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (peterHousePrice < houseCost[0]) {
  console.log(
    `The house price is ${peterHousePrice}. So Peter is paying: ${houseCost[0]} which is too much for his house.`,
  );
} else {
  console.log(
    `The house price is ${peterHousePrice}. So Peter is paying: ${houseCost[0]} which is too little for his house.`,
  );
}

if (juliaHousePrice < houseCost[1]) {
  console.log(
    `The house price is ${juliaHousePrice}. So Julia is paying: ${houseCost[1]} which is too much for her house.`,
  );
} else {
  console.log(
    `The house price is ${juliaHousePrice}. So Julia is paying: ${houseCost[1]} which is too little for her house.`,
  );
}

//Ez Namey (Startup name generator)

const firstWords = [
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
const secondWords = [
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

console.log(
  `The startup name is : ${startupName}. The startup: ${startupName} contains ${startupName.length} characters.`,
);
