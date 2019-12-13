# Functional Programming

## Make a parameter Required
```js
const isRequired = () => { throw new Error("Require Parameter") }

const greet = (name = isRequired("name")) => {
  console.log(`Hello ${name}`)
}

try {
  greet()
} catch (error) {
  console.warn(error.message)
}
```

## Get Keys of 2 depth object with value true
```js
const findKey = (obj, fn) => Object.keys(obj).filter(key => fn(obj[key]));
const obj = {
    barney: { age: 76, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 71, active: true }
  }

let output = findKey(
  obj,
  o => o['active']
);
```