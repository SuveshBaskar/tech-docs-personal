## Art of Naming Variables
[Naming Variables](https://hackernoon.com/the-art-of-naming-variables-52f44de00aad)

# Short Circuit Functions
```js
let andResult1 = true && "Hello"
let andResult2 = false && "Hello"

// console.log(andResult1) // 'Hello' - gives the second value if first is true
// console.log(andResult2) // false - if first is false then it returns false

let orResult1 = true || "Hello"
let orResult2 = false || "Hello"

// console.log(orResult1) // true - if first is true it returns true
// console.log(orResult2) // 'Hello' - returns second value if first is false

/**
 * Short Circuiting
 *  - Use AND (&&) instead of simple if else or ternary operator
 *  - Use OR (||) when you need a default value for a value
 */


let value = 2
let something = value == 2 && "Value is equal to 2" || "Value is not equal to 2"
let something1 = value == 3 ? "Value is equal to 2" : "Value is not equal to 2"

// something && console.log(something)
// something && console.log(something1)

let val = 1;

// (val == 1 ? console.log("value is one") ): console.log("value is not one")
val == 1 && console.log("value is one") || console.log("value is not one")  // console.log() returns "undefined" and that is the reason it is printing out OR part of the function also
 ```

## Convert Array to Object

```js
 let str = ` "We have our {{type}} in {{hotel}} for ₱{{wdPrice}} and ₱{{wePrice}} for Weekdays and Weekends respectively.\\n\\nDo you want to continue booking that?"`

let pattern = /\{\{(.*?)\}\}/gi

const convertArrayToObject = (array) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item]: item,
    };
  }, initialValue);
};

let strArray = str.match(pattern) &&  str.match(pattern).map(val=>val.replace(/\{|\}/gi,""))


let result = strArray && convertArrayToObject(strArray) || {}

console.log(result)
```

```js
const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
};

console.log(
  convertArrayToObject(
    [
      { id: 111, name: 'John', age: 29 },
      { id: 112, name: 'Sarah', age: 25 },
      { id: 122, name: 'Kate', age: 22 },
      { id: 123, name: 'Tom', age: 21 },
      { id: 125, name: 'Emma', age: 24 },
    ],
    'id',
  ),
);
```

## Web Scraping
Using Chrome Dev Tools
```js
Array.from(document.querySelectorAll("p.disc_data")).map(element => element.innerText)
```

## Find the Pattern
```js
let patternMap = {
  "Pattern 1": /pattern one/gi,
  "Pattern 2": /pattern two/gi,
  "Pattern 3": /pattern three/gi
}

let message = "this should give pattern two as output"

let matchedPattern = null

for(patternKey in patternMap){
  let pattern = patternMap[patternKey]
  let match = message.match(pattern)
  if(match){
    matchedPattern = patternKey
    break;
  }
}

console.log("Pattern found: "+ (matchedPattern || "No Pattern found"))
```