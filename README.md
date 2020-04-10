# random-in

[![npm version](https://img.shields.io/npm/v/axios.svg?style=flat-square)](https://www.npmjs.com/package/random-in)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/akulsr0/random-in/blob/master/LICENSE.md)
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)  

Get Random Numbers, Names, Dates and much more.

## Table of Contents

- [random-in](#random-in)
  - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Numbers](#numbers)
      - [Get Random Integer of n Digit](#get-random-integer-of-n-digit)
      - [Get Random Integer in a given range](#get-random-integer-in-a-given-range)
      - [Get Random Floating number in a given range](#get-random-floating-number-in-a-given-range)
      - [Get N Random Number in a given range](#get-n-random-number-in-a-given-range)
    - [Names](#names)
      - [Get Random Name](#get-random-name)
      - [Get Random Male Name](#get-random-male-name)
      - [Get Random Female Name](#get-random-female-name)
      - [Get Random Male First Name](#get-random-male-first-name)
      - [Get Random Female First Name](#get-random-female-first-name)
      - [Get Random Last Name](#get-random-last-name)
      - [Get Random Indian Name](#get-random-indian-name)
      - [Get Random Indian Male Name](#get-random-indian-male-name)
      - [Get Random Indian Female Name](#get-random-indian-female-name)
      - [Get Random Indian Male First Name](#get-random-indian-male-first-name)
      - [Get Random Indian Female First Name](#get-random-indian-female-first-name)
      - [Get Random Indian Last Name](#get-random-indian-last-name)
    - [Dates](#dates)
      - [Get Random Date in between two Dates](#get-random-date-in-between-two-dates)

### Installation

```bash
npm install random-in
```

### Numbers

#### Get Random Integer of n Digit

*getNDigit(n) --> n is number of digits*

```javascript
const {getNDigit} = require("random-in")
console.log(getNDigit(5))   // 24646
```

#### Get Random Integer in a given range

*getRandomBetween(min, max) ---> to get a random number between min and max*
> Note: min and max are inclusive i.e. getRandomBetween(1,100) may return 1 or 100

```javascript
const {getRandomBetween} = require("random-in")
console.log(getRandomBetween(5,50))    // 26
```

#### Get Random Floating number in a given range

*getRandomFloatBetween(min, max) --> to get a random floating number between min and max*

```javascript
const {getRandomFloatBetween} = require("random-in")
console.log(getRandomFloatBetween(5,50))    // 19.69726289036264
```

#### Get N Random Number in a given range

*getNRandomBetween(n, min, max) --> to get n random numbers between min and max*

```javascript
const {getNRandomBetween} = require("random-in")
console.log(getNRandomBetween(5,1,50))    // [34, 23, 28, 6, 14]
```

### Names

Get random users name

#### Get Random Name

*Get a random full name of any gender*

```javascript
const {getName} = require("random-in")
console.log(getName())  // "Winnifred Struble"
```

#### Get Random Male Name

*Get a random full name (Male)*

```javascript
const {getMaleName} = require("random-in")
console.log(getMaleName())  // "Derek Gilstrap"
```

#### Get Random Female Name

*Get a random full name (Female)*

```javascript
const {getFemaleName} = require("random-in")
console.log(getFemaleName())    // "Gerri Bavaro"
```

#### Get Random Male First Name

*Get a random first name (Male)*

```javascript
const {getMaleFirstName} = require("random-in")
console.log(getMaleFirstName())    // Jamey
```

#### Get Random Female First Name

*Get a random first name (Female)*

```javascript
const {getFemaleFirstName} = require("random-in")
console.log(getFemaleFirstName())   // "Beckie"
```

#### Get Random Last Name

*Get a random last name*

```javascript
const {getLastName} = require("random-in")
console.log(getLastName())  // "Reinbold"
```

#### Get Random Indian Name

*Get a random Indian full name of any gender*

```javascript
const {getIndianName} = require("random-in")
console.log(getIndianName())    // "Nagendra Shankar"
```

#### Get Random Indian Male Name

*Get a random Indian full name (Male)*

```javascript
const {getIndianMaleName} = require("random-in")
console.log(getIndianMaleName())    // "Ashok Dalal"
```

#### Get Random Indian Female Name

*Get a random Indian full name (Female)*

```javascript
const {getIndianFemaleName} = require("random-in")
console.log(getIndianFemaleName())  // "Deepali Bose"
```

#### Get Random Indian Male First Name

*Get a random Indian first name (Male)*

```javascript
const {getIndianMaleFirstName} = require("random-in")
console.log(getIndianMaleFirstName())   // "Mukul"
```

#### Get Random Indian Female First Name

*Get a Random Indian first name (Female)*

```javascript
const {getIndianFemaleFirstName} = require("random-in")
console.log(getIndianFemaleFirstName())   // "Anandi"
```

#### Get Random Indian Last Name

*Get a random Indian last name*

```javascript
const {getIndianLastName} = require("random-in")
console.log(getIndianLastName())    // "Pant"
```

### Dates

Get Random Dates

#### Get Random Date in between two Dates

*Get a random date between two dates*

> Note: new Date(YYYY, MM, DD)
> If month is less than 10, let's say 4, use 4 instead of 04
> If date is less than 10, let's say 6, use 6 instead of 06

```javascript
const {getDateBetween} = require("random-in")
console.log(getDateBetween(new Date(1947,8,15), new Date()))
// Tue Aug 07 1956 10:42:05 GMT+0530 (India Standard Time)
```