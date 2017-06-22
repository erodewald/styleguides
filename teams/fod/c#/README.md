# FOD Team C# Coding Standards

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
    * [Braces](#Braces)
    * [Classes](#Classes)
    * [Indentation](#Indentation)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**Do** use _PascalCase_ for files, classes, public class methods and properties.

```csharp
// File name: Location.cs

public class Location {
  public DateTime ActivationDate { get; set; }

  public void DeactiveLocation() {
  }
}
```
<br>

**Do** use _camelCase_ for local variables and private class properties.

```csharp
public class Instructor {
  private DateTime startDate;

  public int NextAvailableDate() { 
    var today = DateTime.Now;
  }
}
```
<br>

**Do** use _SCREAMING_SNAKE_CASE_ for constants.

```csharp
public void Dumbbell() {
  public const int TOTAL_WEIGHT { get; set; }
}
```
<br>

**Do not** prefix or postfix an underscore to anything anywhere.

```csharp
public class User {
  // Correct
  private string isDeleted;

  // Avoid
  private bool _isDeleted;
}
```
<br>

**Do** spell out linq statement variables.

```csharp
public User LinqExample(List<User> users) {
  return users.FirstOrDefault(user => user.IsActive);
}
```
<br>

**Do** capitalize abbreviations such as XML and ID.

```csharp
public class Equipment {
  public int ID { get; set; }
}
```
<br>

**Do** prefix an I to interfaces.

```csharp
public interface IPerson {
}
```
<br>

## Coding Style<a name="CodingStyle"></a>

### Braces<a name="Braces"></a>

**Do** use _1TBS_ (one true brace style).

```csharp
// Note the one space before the brace.
public class Equipment {
  public bool IsInUse() { 
  }
  
} // Ending braces go on a new line.
```
<br>

**Do** wrap single line if statements in braces.

```csharp
public void Example() {
  if (true) {
    person.Deactivate();
  }
}
```
<br>

### Classes<a name="Classes"></a>

**Do** wrap constructor and method parameters when there are more than two parameters.

```csharp
public class Person(
  string firstName,
  string lastName,
  string address
) {
}

public class Location(string address, int managerID) {
}
```
<br>

**Do** prefer fields for private class variables.

```csharp
public class Account() {
  // Correct
  private bool isDeleted;

  // Avoid
  private bool isDeleted { get; set; }
}
```
<br>

**Do** prefer properties for public class variables.

```csharp
public class Instructor() {
  // Correct
  public string FirstName { get; set; }

  // Avoid
  public string FirstName;
}
```
<br>

### Indentation<a name="Indentation"></a>

**Do** wrap chained linq calls on a new indented line.

```csharp
public void Example(IEnumerable<Users> users) {
  users.Where(user => user.IsActive)
    .Select(user => user.Location)
    .FirstOrDefault();
}
```
<br>
