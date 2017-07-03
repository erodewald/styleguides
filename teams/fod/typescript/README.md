# class FOD Team TypeScript Standards _extends_ <a href="../javascript/README.md">FOD Team JavaScript Standards</a> {

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

**DO** prefix interface names with "I".

```typescript
// Avoid
public interface Facility {
  // ...
}

// Correct
public interface IFacility {
  // ...
}
```
<br>

# }
