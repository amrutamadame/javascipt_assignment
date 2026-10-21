//Ex 1. - Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
const indexNum = names.indexOf(nameToRemove);
console.log(indexNum);

const nameDeleted = names.splice(indexNum, 1);
console.log(nameDeleted);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

//Ex 2. - When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function calculateTime(travelInformation) {
  if (travelInformation.speed <= 0) return "Speed must be greater than 0";

  const hrsInDecimal =
    travelInformation.destinationDistance / travelInformation.speed;
  const hours = Math.floor(hrsInDecimal);
  const mins = Math.round((hrsInDecimal - hours) * 60);

  return `${hours}hours ${mins}minutes`;
}

const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

//Ex 3. - Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

function logOutSeriesText() {
  // write code here
  const totalLifeSpanInMins = 80 * 365 * 24 * 60;

  let totalPercentage = 0;

  for (let i = 0; i < seriesDurations.length; i++) {
    const totalSeriesMins =
      seriesDurations[i].days * 24 * 60 +
      seriesDurations[i].hours * 60 +
      seriesDurations[i].minutes;

    const percentage = (totalSeriesMins / totalLifeSpanInMins) * 100;

    totalPercentage = totalPercentage + percentage;

    console.log(
      `${seriesDurations[i].title} took ${percentage.toFixed(3)}% of my life`,
    );
  }

  console.log(`In total that is ${totalPercentage.toFixed(2)}% of my life`);
}

logOutSeriesText(); // logs out the text found above

//Ex 4. - Smart-ease - Back to the basics! NOnoN0nOYes (Note taking app)
//Save a note

const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
  return notes;
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

//Get a note
function getNote(id) {
  if (typeof id !== "number" || id === "") {
    return `id must be a number`;
  }

  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    }
  }
}

const firstNote = getNote(1);
console.log(firstNote);

//Log out notes
function logOutNotesFormatted() {
  // your code here
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`,
    );
  }
}

logOutNotesFormatted();

//Unique feature - Delete Note
function deleteNotes(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      notes.splice(i, 1);
    }
  }
}

deleteNotes(1);
console.log(notes);

//CactusIO-interactive (Smart phone usage app) optional
//Adding an activity

const activities = [];
let totalTime = 0;
const limit = 30;

function addActivity(date, activity, duration) {
  activities.push({ date, activity, duration });
  totalTime = totalTime + duration;
  return activities;
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 20);
console.log(activities);

//Show my status
function showStatus(activities) {
  if (activities.length === 0) {
    console.log(`Add some activities before calling showStatus`);
  } else {
    console.log(
      `You have added ${activities.length} activities. They amount to ${totalTime} min. of usage`,
    );
  }

  if (totalTime > limit) {
    console.log(`You have reached your limit, no more smartphoning for you!`);
  }
}

showStatus(activities);
