# class FOD Team JavaScript Coding Standards {

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**DO** use _period hyphen_ seperation for files.

```javascript
// File name: setup.env-setup.js
```
<br

**DO** use _PascalCase_ for classes or functions meant to be instantiated with the _new_ keyword.

 ```javascript
// ES6
class Instructor {
}

// ES5
function ThisWillBeNewed() {
}
// ...
var instance = new ThisWillBeNewed();
 ```
<br>

**DO** use _camelCase_ for local variables, methods and functions.

```javascript
var firstName = 'Example';

class Location {
  getNextScheduledVideo() {
  }
}

function getLocation() {
}
```
<br>

**AVOID** prefixing variables with `_`.

```javascript
let brand = (() => {
  // Good
  let brandTitle = 'Fitness On Demand 24/7';

  // Bad
  let _brandTitle = 'Fitness On Demand 24/7';

  getBrandTitle() {
    return privateVariable;
  }

  return {
    getBrandTitle
  };
})()
```
<br>

**DO** use _SCREAMING_SNAKE_CASE_ for constants.

```javascript
const VIDEO_CALORIES = 278;
```
<br>

**DO** capitalize abbreviations such as XML and ID.

```javascript
var userID = 1;
```
<br>

## Coding Style<a name="CodingStyle"></a>

**DO** end each file with an empty line.

```javascript
const userID = 1;
let isActive = true;
↵
```
<br>

**DO** preface a comment with an empty space.

```javascript
// Avoid
//Some comment

// Correct
// Some comment
```
<br>

**DO** prefer _let_ and _const_ over _var_ where possible. There is no magic hoisting when the _let_ keyword is used.

```javascript
// Avoid
var userID = 1;

// Correct
const userID = 1;
let isActive = true;
```
<br>

**AVOID** the function keyword. It's not hot anymore.

```javascript
// Avoid
deactiveUser(function() {
})

// Correct
deactiveUser(() => {
})
```
<br>

**DO** alphabatize imports.

```javascript
// Avoid
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as cookieSession from 'cookie-session'

// Correct
import * as bodyParser from 'body-parser'
import * as cookieSession from 'cookie-session'
import * as express from 'express'
```
<br>

**DO** wrap constructor and method parameters when there are more than two parameters.

```javascript
class Person {
  constructor(
    firstName: string,
    lastName: string,
    address: string
  ) {
    // ...
  }
}

class Location {
  constructor(address, managerID) {
    // ...
  }
}
```
<br>

**DO** use the _this_ keyword when working inside objects.

```javascript
class Equipment {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
```
<br>

**DO** use single quotes over double quotes.

```javascript
// Avoid
let brand = "Yoga Fit";

// Correct
let brand = 'Yoga Fit';
```
<br>

**DO** end statements with semicolons.

```javascript
// Avoid
let gymName = 'Snap Fitness'

// Correct
let gymName = 'Snap Fitness';
```
<br>

**DO** properly space out operator statements.

```javascript
// Avoid
let result = 5+5;
let result = 5 +5;
let result = 5+ 5;

// Correct
let result = 5 + 5;
```
<br>

**DO** properly space out if statements.

```javascript
// Avoid
if(5<10){
  // ...
}

if (5 <10){
  // ...
}

// Correct
if (5 < 10) {

}
```
<br>

# }
