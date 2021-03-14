let add = (num1, num2) => {
  return num1 + num2;
};

let subtract = (num1, num2) => {
  return num1 - num2;
};

let multiply = (num1, num2) => {
  return num1 * num2;
};

let divide = (num1, num2) => {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot devide by zero";
  }
};

let calculator = (num1, num2, operator) => operator(num1, num2);

const houseKeeper1 = {
  name: "Angela",
  age: "29",
  hasWorkPermit: true,
  nationality: "Italian",
  workRecord: "Very Good",
};

function HouseKeeper(name, age, hasWorkPermit, nationality, workRecord) {
  (this.name = name),
    (this.age = age),
    (this.hasWorkPermit = hasWorkPermit),
    (this.nationality = nationality),
    (this.workRecord = workRecord);
  this.clean = () => {
    alert(`Cleaning in progress by ${this.name}`);
  };
}
