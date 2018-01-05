# class JavaScript Standards {

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**DO** use _period hyphen_ separation for files.

```javascript
// File name: setup.env-setup.js
```
<br>

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

class User {
  getActivity() {
  }
}

function getUser() {
}
```
<br>

**AVOID** prefixing variables with `_`.

```javascript
let user = (() => {
  // Good
  let firstName = 'Eric';

  // Bad
  let _firstName = 'Eric';

  getFirstName() {
    return firstName;
  }

  return {
    getFirstName
  };
})()
```
<br>

**DO** use _SCREAMING_SNAKE_CASE_ for constants.

```javascript
const LAST_ONLINE = 2934293493;
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
    firstName,
    lastName,
    address
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
let name = "Eric";

// Correct
let name = 'Eric';
```
<br>

**DO** end statements with semicolons.

```javascript
// Avoid
let name = 'Eric'

// Correct
let name = 'Eric';
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
