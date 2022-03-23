function romanNumeral(string) {
  const strArray = string.split("");
  let sum = 0;

  for (let i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
    if (strArray[i] === "I" && strArray[i + 1] === "V") {
      sum -= 2;
    } else if (strArray[i] === "I" && strArray[i + 1] === "X") {
      sum -= 2;
    } else if (strArray[i] === "X" && strArray[i + 1] === "L") {
      sum -= 20;
    } else if (strArray[i] === "X" && strArray[i + 1] === "C") {
      sum -= 20;
    } else if (strArray[i] === "C" && strArray[i + 1] === "D") {
      sum -= 200;
    } else if (strArray[i] === "C" && strArray[i + 1] === "M") {
      sum -= 200;
    }
    switch (strArray[i]) {
      case "I":
        sum++;
        break;
      case "V":
        sum += 5;
        break;
      case "X":
        sum += 10;
        break;
      case "L":
        sum += 50;
        break;
      case "C":
        sum += 100;
        break;
      case "D":
        sum += 500;
        break;
      case "M":
        sum += 1000;
        break;
    }
    console.log(sum);
  }
  return sum;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral("I"));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral("IX"));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral("CDII"));

  console.log("Expecting: 1999");
  console.log(romanNumeral("MCMXCIX"));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution

//initialize int to equal 0
//for every I increase by 1 (if I is on the left of V - minus 2)
//for every X increase by L (if X is on the left of L - minus 20)
/**
 * I = 1
 * V = 5
 * X = 10
 * L = 50
 * C = 100
 * D = 500
 * M = 1000
 */
