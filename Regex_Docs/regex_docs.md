# Regex Docs - JavaScript

## Match between HTML Tags Specific
```regex
/<\s*a[^>]*>(.*?)<\s*\/\s*a>/gi
```

## Match between HTML Tags All
```regex
/<[^>]*>/gi
```

## Match between Brackets
```regex
/\{\{(.*?)\}\}/gi
```

## Match more than one White spaces
```regex
/\s{2,}/g
```

## Match till a word
Match the text that starts with to till the word from or match the entire sentence
```regex
/to.+?(?=(from|$))/gi
```

## Match More White Spaces
```regex
/\s\s+/g
/\s{2,}/g
```

## Match Quater and Year till the space
```js
let data = `Interest on Term lending money Q3FY18  FY18 `

console.log(data.replace(/(q[\d]|f).+?(?=(\s|$))/gi,""))
```

## Named Regex Groups
```regex
/(?<first_number>\d{2})(?<second_number>\d{2})/gi
```