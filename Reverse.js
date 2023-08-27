const reverse = (arr) => {
    return arr.reverse();
}
const array = [3, 352, 5, 1, 2];
console.log(reverse(array));

const reverseStr = (str) => {
    return str.split('').reverse().join('');
}
const string = "Sanzid";
console.log(reverseStr(string));

const arrSorting = arr => {
    return arr.slice().sort((a, b) => a - b);
}

console.log(arrSorting(array));

// access first and last elements

function getFirstElement(arr) {
    return arr[0];
}

function getLastElement(arr) {
    return arr[arr.length - 1];
}

// Example input
const arrayFind = [10, 20, 15, 2, 23, 90, 67];
const firstElement = getFirstElement(arrayFind);
const lastElement = getLastElement(arrayFind);

console.log("First element:", firstElement);
console.log("Last element:", lastElement);


// How do you add an element to the end of an array?

arrayFind.push(353)
arrayFind.pop();
console.log(arrayFind);


// How do you check if an element exists in an array?
const myArray = [1, 2, 3, 4, 5];

const elementToCheck = 7;
const elementCheck = (myArray, elementToCheck) => {
    if (myArray.includes(elementToCheck)) {
        return(`Element ${elementToCheck} exists in the array.`);
    } 
    else {
        return (`Element ${elementToCheck} does not exist in the array.`);
    }
}
console.log(elementCheck(myArray,elementToCheck));

// How do you remove an element from an array at a specific index?
const myArrayList = [10, 20, 30, 40, 50];

myArrayList.splice(1, 1, 445.5,6,565); // Remove 1 element at the specified index

console.log(myArrayList); // Output: [10, 20, 40, 50]


// Can you give an example of a nested array that the flattenArray() function would be able to flatten?

function flattenArray(arr) {
    const flattened = [];
  
    arr.forEach(item => {
      if (Array.isArray(item)) {
        flattened.push(...flattenArray(item)); // Recursively flatten nested arrays
      } else {
        flattened.push(item); // Push non-array items to the flattened array
      }
    });
  
    return flattened;
  }
  const nestedArray = [1, [2, 3], 6,9, [4, [5, 6]]];
  const flattenedArray = flattenArray(nestedArray);
  
  console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]
  
  //   Can you explain how the flat() method can be used to flatten an array in JavaScript?

const flatArray = (nestedArray) => {
    return nestedArray.flat(Infinity)
}


console.log(flatArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]
