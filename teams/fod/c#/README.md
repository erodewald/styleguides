# FOD Team C# Coding Standards

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**DO** use _PascalCase_ for files, classes, public class methods and properties.

```csharp
// File name: Location.cs

public class Location {
  public DateTime ActivationDate { get; set; }

  public void DeactiveLocation() {
  }
}
```
<br>

**DO** use _camelCase_ for local variables and private class properties.

```csharp
public class Instructor {
  private DateTime startDate;

  public int NextAvailableDate() { 
    var today = DateTime.Now;
  }
}
```
<br>

**DO** use _SCREAMING_SNAKE_CASE_ for constants.

```csharp
public void Dumbbell() {
  public const int TOTAL_WEIGHT { get; set; }
}
```
<br>

**DO NOT** prefix or postfix an underscore to anything anywhere.

```csharp
public class User {
  // Correct
  private string isDeleted;

  // Avoid
  private bool _isDeleted;
}
```
<br>

**DO** spell out linq statement variables.

```csharp
public User LinqExample(List<User> users) {
  return users.FirstOrDefault(user => user.IsActive);
}
```
<br>

**DO** capitalize abbreviations such as XML and ID.

```csharp
public class Equipment {
  public int ID { get; set; }
}
```
<br>

**DO** prefix an I to interfaces.

```csharp
public interface IPerson {
}
```
<br>

## Coding Style<a name="CodingStyle"></a>

**DO** use _1TBS_ (one true brace style).

```csharp
// Note the one space before the brace.
public class Equipment {
  public bool IsInUse() { 
  }
  
} // Ending braces go on a new line.
```
<br>

**DO** wrap single line if statements in braces.

```csharp
public void Example() {
  if (true) {
    person.Deactivate();
  }
}
```
<br>

**DO** wrap constructor and method parameters when there are more than two parameters.

```csharp
public class Person {
  public Person(
    string firstName,
    string lastName,
    string address
  ) {
  }
}

public class Location {
  public Location(string address, int managerID) {
  }
}
```
<br>

**DO** prefer fields for private class variables.

```csharp
public class Account {
  // Correct
  private bool isDeleted;

  // Avoid
  private bool isDeleted { get; set; }
}
```
<br>

**DO** prefer properties for public class variables.

```csharp
public class Instructor {
  // Correct
  public string FirstName { get; set; }

  // Avoid
  public string FirstName;
}
```
<br>

**AVOID** using the keyword _this_.

```csharp
public class Brand {
  private string name;
  private string address;

  // Correct
  public GetName() {
    return name;
  }

  // Avoid
  public GetAddress() {
    return this.name;
  }
}
```

**DO** wrap chained linq calls on a new indented line.

```csharp
public void Example(IEnumerable<Users> users) {
  users.Where(user => user.IsActive)
    .Select(user => user.Location)
    .FirstOrDefault();
}
```
<br>
