# FOD Team JavaScript Coding Standards

JavaScript extension languages such as TypeScript fall under the JavaScript coding standards.

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**DO** use _period seperated_ for files. All lowercase with periods as seperators.

```typescript
// File name: setup.env.ts
```
<br>

**DO** use _PascalCase_ for classes or functions meant to be instantiated with the _new_ keyword.

 ```typescript
// TypeScript
public class Instructor {
}

// ES5
function ThisWillBeNewed() {
}
// ...
var instance = new ThisWillBeNewed()
 ```
<br>

**DO** use _camelCase_ for local variables, methods and functions.

```typescript
var firstName = 'Example';

public class Location {
  getNextScheduledVideo() {
  }
}

function getLocation() {
}
```
<br>

**DO** use _SCREAMING_SNAKE_CASE_ for constants.

```typescript
const VIDEO_CALORIES = 278
```
<br>

**DO** capitalize abbreviations such as XML and ID.

```typescript
var userID = 1
```
<br>

## Coding Style<a name="CodingStyle"></a>

**DO** end each file with an empty line.

```typescript
const userID = 1
let isActive = true
// Note the new line here
```
<br>

**DO** preface a comment with an empty space.

```typescript
// Avoid
//Some comment

// Correct
// Some comment
```
<br>

**DO** prefer _let_ and _const_ over _var_ where possible. There is no magic hoisting when the _let_ keyword is used.

```typescript
// Avoid
var userID = 1

// Correct
const userID = 1
let isActive = true
```
<br>

**AVOID** the function keyword. It's not hot anymore.

```typescript
// Avoid
deactiveUser(function() {
})

// Correct
deactiveUser(() => {
})
```
<br>

**DO** alphabatize imports.

```typescript
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

**DO** prefer automatic assignment of constructor properties in TypeScript.

```typescript
// Avoid
class Instructor {
  private firstName: string
  private lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
}

// Correct
class Instructor {
  constructor(private firstName: string, private lastName: string) {
  }
}
```
<br>

**DO** wrap constructor and method parameters when there are more than two parameters.

```typescript
public class Person {
  constructor(
    private firstName: string,
    private lastName: string,
    private address: string
  ) {
  }
}

public class Location {
  constructor(private address: string, private managerID: int) {
  }
}
```
<br>

**DO** use the _this_ keyword when working inside objects.

```typescript
public class Equipment {
  constructor(private name: string) {
  }

  getName() {
    return this.name
  }
}
```
<br>

**DO** use single quotes over double quotes.

```typescript
// Avoid
let brand = "Yoga Fit"

// Correct
let brand = 'Yoga Fit'
```
<br>

**AVOID** using semicolons in TypeScript.

```typescript
// Avoid
let gymName = 'Snap Fitness';

// Correct
let gymName = 'Snap Fitness'
```
<br>
