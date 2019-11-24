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