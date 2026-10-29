//7kyu Vowel Count
function countVowels(str) {
  const matches = str.match(/[aeiou]/gi);
  // The 'g' looks for all matches kind off global; 'i' stands for case-insensitive
  return matches ? matches.length : 0;
}

console.log(countVowels("AMRUTA MADAME"));
console.log(countVowels("amruta madame"));
console.log(countVowels("cry"));

//7kyu Digit*Digit
function squareDigits(num) {
  const ipNum = String(num).split("");
  let val = "";
  for (let i = 0; i < ipNum.length; i++) {
    val += String(ipNum[i] ** 2);
  }
  return val;
}

console.log(squareDigits(9119));
console.log(squareDigits(765));

//7kyu Highest and Lowest

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  let max = numbers[0];
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    //console.log(`-${min}-`);

    if (numbers[i] > max) {
      max = numbers[i];
    }
    //console.log(`--${max}--`);
  }
  return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));

//Voice assistant
let userName = "";
const todo = [];
function getReply(command) {
  const commandText = command.split(" ");
  const text = command.toLowerCase();

  if (text.includes("hello my name")) {
    userName = commandText.at(-1);
    return `Nice to meet you ${userName}`;
  }

  if (text.includes("what is my name")) {
    if (userName === "") {
      return `No name mentioned`;
    }
    return `${userName}`;
  }

  if (text.includes("add") && text.includes("todo")) {
    let addToDo = text.replace("add", "");
    addToDo = addToDo.replace("to my todo", "");
    addToDo = addToDo.trim();
    todo.push(addToDo);
    return `${addToDo} added to your todo`;
  }

  if (text.includes("remove") && text.includes("todo")) {
    let removeToDo = text.replace("remove", "");
    removeToDo = removeToDo.replace("from my todo", "");
    removeToDo = removeToDo.trim();
    const removeToDoIndex = todo.indexOf(removeToDo);
    if (removeToDoIndex === -1) {
      return `item not found`;
    } else {
      todo.splice(removeToDoIndex, 1);
      return `Removed ${removeToDo} from your todo`;
    }
  }

  if (text.includes("what is on my todo")) {
    return `you have ${todo.length} todos - ${todo.join(" and ")}`;
  }

  if (text.includes("what day is it")) {
    const today = new Date();
    const dayOfMonth = today.getDate();
    const monthOfYear = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    return `${dayOfMonth}th ${monthOfYear} ${year}`;
  }

  if (
    text.includes("what is") &&
    (commandText[3] === "+" ||
      commandText[3] === "-" ||
      commandText[3] === "*" ||
      commandText[3] === "/")
  ) {
    const num1 = Number(commandText[2]);
    const num2 = Number(commandText[4]);
    const operator = commandText[3];

    if (operator === "+") return num1 + num2;
    if (operator === "-") return num1 - num2;
    if (operator === "*") return num1 * num2;
    if (operator === "/") return num1 / num2;
  }

  if (text.includes("set timer")) {
    const time = Number(commandText[3]);
    const timeInMS = time * 60 * 1000;
    const timerId = setTimeout(() => {
      console.log("1 minute have passed!");
    }, timeInMS);
    return `Timer started ...`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("Remove fishing from my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 3 + 3"));
console.log(getReply("what is 4 * 12"));
console.log(getReply("Set timer for 1 minute"));
