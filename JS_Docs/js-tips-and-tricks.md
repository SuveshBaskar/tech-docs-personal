# Type Conversion

## Convert anything to a string

Adding a empty string `""` converts anthing to a string

```js
let data = 42
console.log(typeof data) // Number
data = data + ""
console.log(typeof data) // String
```

## Convert to Number

Adding a `+` infront of a Numberic string will convert it to a Number

```js
let data = "42"
console.log(typeof data) // String
data = +data
console.log(typeof data) // Number
```

## Anything to Boolean

Add `!` infront of a value, it will be converted to a boolean

```js
let data = "42"
console.log(typeof data) // String
data = !data
console.log(typeof data) // Boolean
```

## Beautify a JSON.stringify()

```js
JSON.stringify(OBJECT-NAME, null, 4)
```
---

# Array Operations

## Get Unique Elements in an Array
```js
function getUnique(rawArray){
  return [...new Set(rawArray)] // Set only consist of Unique Elements
}

console.log(getUnique([1,2,2,2,3,4,5])) // [1,2,3,4,5]
```

## Filter all Falsy Values
```js
let array = [1,0,false,null,undefined,8,9]

console.log(array.filter(Boolean)) // [1,8,9]
```

## Create Array with filled Default Values
```js
let array = Array(3).fill(0)
console.log(array) // [0,0,0]
```

## Check if the Variable is an array
```js
Array.isArray([1,2,3,4]) // true
console.log([1,2,3,4] instanceof Array) // true
````

## Check if a Variable is an Array or Object
```js
function arrayOrObject(passedVariable){
  let result = null

  result = (passedVariable instanceof Array)
            ? "Array"
            : (passedVariable instanceof Object)
              ? "Object"
              : null

  return result
}

let array = []
let object = {}
console.log(arrayOrObject(array)) // "Array"
console.log(arrayOrObject(object)) // "Object"
```

## Merge Arrays
```js
let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [...array1,...array2]
console.log(array3) // [1,2,3,4,5,6]
```
---

# Object Operations

## Check if Object is Empty
```js
function isEmptyObject(passedObject){
  return JSON.stringify(passedObject) === '{}'
}

let currentObject = {}

console.log(isEmptyObject(currentObject)) // true
```

## Check if a Variable is an Object
```js
console.log({} instanceof Object) // true
```

Word of caution, Array is also an object. So if you want to check whether a variable is an array or Object check for Array first, then check for Object.

## Merge Objects
```js
let object1 = {
  key1 : "value1"
}
let object2 = {
  key2 : "value2"
}
let object3 = {...object1,...object2}
console.log(object3) // { key1 : "value1", key2 : "value2"}
```

