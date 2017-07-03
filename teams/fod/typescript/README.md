# class FOD Team TypeScript Coding _extends_ <a href="../javascript/README.md">FOD Team JavaScript Standards</a> {

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

## Coding Style<a name="CodingStyle"></a>

**DO** prefer automatic assignment of constructor properties.

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

**AVOID** using semicolons.

```typescript
// Avoid
let gymName = 'Snap Fitness';

// Correct
let gymName = 'Snap Fitness'
```
<br>

# }
