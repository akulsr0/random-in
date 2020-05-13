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
      - [Get Random Date (Future)](#get-random-date-future)
    - [Emails](#emails)
      - [Get Random Email Id](#get-random-email-id)
    - [Passwords](#passwords)
      - [Get Alphanumeric Password](#get-alphanumeric-password)
      - [Get Lowercase Password](#get-lowercase-password)
      - [Get Uppercase Password](#get-uppercase-password)
      - [Get Alpha Password](#get-alpha-password)
      - [Get Alpha Lowercase Password](#get-alpha-lowercase-password)
      - [Get Alpha Uppercase Password](#get-alpha-uppercase-password)
      - [Get Numeric Password](#get-numeric-password)
    - [Country](#country)
      - [Get Random Country](#get-random-country)
    - [Color](#color)
      - [Get Random Color](#get-random-color)
    - [Programming](#programming)
      - [Get Random Programming Language](#get-random-programming-language)

### Installation

```bash
npm install random-in
```

### Numbers

#### Get Random Integer of n Digit

_getNDigit(n) --> n is number of digits_

```javascript
const { getNDigit } = require('random-in');
console.log(getNDigit(5)); // 24646
```

#### Get Random Integer in a given range

_getRandomBetween(min, max) ---> to get a random number between min and max_

> Note: min and max are inclusive i.e. getRandomBetween(1,100) may return 1 or 100

```javascript
const { getRandomBetween } = require('random-in');
console.log(getRandomBetween(5, 50)); // 26
```

#### Get Random Floating number in a given range

_getRandomFloatBetween(min, max) --> to get a random floating number between min and max_

```javascript
const { getRandomFloatBetween } = require('random-in');
console.log(getRandomFloatBetween(5, 50)); // 19.69726289036264
```

#### Get N Random Number in a given range

_getNRandomBetween(n, min, max) --> to get n random numbers between min and max_

```javascript
const { getNRandomBetween } = require('random-in');
console.log(getNRandomBetween(5, 1, 50)); // [34, 23, 28, 6, 14]
```

### Names

Get random users name

#### Get Random Name

_Get a random full name of any gender_

```javascript
const { getName } = require('random-in');
console.log(getName()); // "Winnifred Struble"
```

#### Get Random Male Name

_Get a random full name (Male)_

```javascript
const { getMaleName } = require('random-in');
console.log(getMaleName()); // "Derek Gilstrap"
```

#### Get Random Female Name

_Get a random full name (Female)_

```javascript
const { getFemaleName } = require('random-in');
console.log(getFemaleName()); // "Gerri Bavaro"
```

#### Get Random Male First Name

_Get a random first name (Male)_

```javascript
const { getMaleFirstName } = require('random-in');
console.log(getMaleFirstName()); // Jamey
```

#### Get Random Female First Name

_Get a random first name (Female)_

```javascript
const { getFemaleFirstName } = require('random-in');
console.log(getFemaleFirstName()); // "Beckie"
```

#### Get Random Last Name

_Get a random last name_

```javascript
const { getLastName } = require('random-in');
console.log(getLastName()); // "Reinbold"
```

#### Get Random Indian Name

_Get a random Indian full name of any gender_

```javascript
const { getIndianName } = require('random-in');
console.log(getIndianName()); // "Nagendra Shankar"
```

#### Get Random Indian Male Name

_Get a random Indian full name (Male)_

```javascript
const { getIndianMaleName } = require('random-in');
console.log(getIndianMaleName()); // "Ashok Dalal"
```

#### Get Random Indian Female Name

_Get a random Indian full name (Female)_

```javascript
const { getIndianFemaleName } = require('random-in');
console.log(getIndianFemaleName()); // "Deepali Bose"
```

#### Get Random Indian Male First Name

_Get a random Indian first name (Male)_

```javascript
const { getIndianMaleFirstName } = require('random-in');
console.log(getIndianMaleFirstName()); // "Mukul"
```

#### Get Random Indian Female First Name

_Get a Random Indian first name (Female)_

```javascript
const { getIndianFemaleFirstName } = require('random-in');
console.log(getIndianFemaleFirstName()); // "Anandi"
```

#### Get Random Indian Last Name

_Get a random Indian last name_

```javascript
const { getIndianLastName } = require('random-in');
console.log(getIndianLastName()); // "Pant"
```

### Dates

Get Random Dates

#### Get Random Date in between two Dates

_Get a random date between two dates_

> Note: new Date(YYYY, MM, DD)
> If month is less than 10, let's say 4, use 4 instead of 04
> If date is less than 10, let's say 6, use 6 instead of 06

```javascript
const { getDateBetween } = require('random-in');
console.log(getDateBetween(new Date(1947, 8, 15), new Date()));
// Tue Aug 07 1956 10:42:05 GMT+0530 (India Standard Time)
```

#### Get Random Date (Future)

_Get a random date from future_

> Note: Default future date limit is 50 years from current date.
> getRandomDateFuture(futureYear).
> futureYear is of type "number".

```javascript
const { getRandomDateFuture } = require('random-in');
console.log(getRandomDateFuture(2021));
// 2021-07-22T00:50:23.025Z
```

### Emails

Get Random Email Address

#### Get Random Email Id

_Get a random email id_

```javascript
const { getRandomEmail } = require('random-in');
console.log(getRandomEmail()); // "agnuskloster@yomail.com"
```

### Passwords

Get Random Passwords

#### Get Alphanumeric Password

_Get a random alphanumeric password of n length_

```javascript
const { getAlphanumericPassword } = require('random-in');
console.log(getAlphanumericPassword(8)); // "IVYs4uI9"
```

#### Get Lowercase Password

_Get a random lowercase alphanumeric password of n length_

```javascript
const { getLowercasePassword } = require('random-in');
console.log(getLowercasePassword(8)); // "ffm690dx"
```

#### Get Uppercase Password

_Get a random uppercase alphanumeric password of n length_

```javascript
const { getUppercasePassword } = require('random-in');
console.log(getUppercasePassword(8)); // "S7PM8AOO"
```

#### Get Alpha Password

_Get a random only alphabet password of n length_

```javascript
const { getAlphaPassword } = require('random-in');
console.log(getAlphaPassword(8)); // "juYyjMJs"
```

#### Get Alpha Lowercase Password

_Get a random only lowercase alphabets password of n length_

```javascript
const { getAlphaLowercasePassword } = require('random-in');
console.log(getAlphaLowercasePassword(8)); // "stysfpbs"
```

#### Get Alpha Uppercase Password

_Get a random only uppercase alphabets password of n length_

```javascript
const { getAlphaUppercasePassword } = require('random-in');
console.log(getAlphaUppercasePassword(8)); // "ZHKNQYTY"
```

#### Get Numeric Password

_Get a random numeric password of n length_

```javascript
const { getNumericPassword } = require('random-in');
console.log(getNumericPassword(8)); // "94970880"
```

### Country

Get Random Country

#### Get Random Country

_Get a random country name_

```javascript
const { getCountry } = require('random-in');
console.log(getCountry()); // "United Kingdom"
```

### Color

Get Random Color

#### Get Random Color

_Get a random hex color_

```javascript
const { getRandomColorHex } = require('random-in');
console.log(getRandomColorHex()); // "#94FA02"
```

### Programming

Get random programming stuff

#### Get random programming language

_Get a random programming language_

```javascript
const { getRandomProgrammingLanguage } = require('random-in');
console.log(getRandomProgrammingLanguage()); // "Julia"
```
