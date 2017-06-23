# Fitware Team C# Coding Standards

## OVERVIEW

The purpose of this document is to provide the high-level coding style for the C# language within the Fitware team. Specific code style defintions and subsequent enforcement are contained within a top-level .editorconfig file, which should be present in each project/solution. The .editorconfig file is also included within this respository.

The style contained herein follows closely the defalt C# style guidelines specified by Microsoft. The default set of corefx .editorconfig values can be obtained [here](https://github.com/dotnet/corefx/blob/master/.editorconfig).

## CONTENTS

* [Bracing](#Bracing)
* [Indentation and New Lines](#Indentation)
* [Naming Conventions](#NamingConventions)
* [Comments](#Comments)
* [General](#General)

### Bracing<a name="Bracing"></a>

**DO** use the Allman style bracing construct. See: [Allman Style Bracing](https://en.wikipedia.org/wiki/Indent_style#Allman_style).

```csharp
public class Uploader
{
    public void Upload()
    {
        // method body
    }
}
```

### Indentation and New Lines<a name="Indentation"></a>

**DO** Place members in object initializers on a new line

```csharp
Upload upload = new Upload()
{
    Name = "My First Upload",
    URI = "ftp://uploadstuff.com"
}

```
**DO** wrap and indent chained linq expressions

```csharp
public void ParseUploads(IEnumerable<Uploads> uploads)
{
    uploads.Where(upload => upload.IsActive)
        .Select(upload => upload.Content)
        .FirstOrDefault();
}
```

### Naming Conventions<a name="NamingConventions"></a>

**DO** use _Pascal Case_ for the following:

* Classes
* Interfaces
* Enums (both types and values)
* Properties
* Methods
* Events
* Exception classes
* Read-only static fields

**DO** use _Camel Case_ for method parameters

```csharp
protected void Find(string searchCriteria)
{

}
```

**DO** use _Camel Case_ for local and private properties (TODO: _'s?)
```csharp
public class Equipment
{
    private bool isAvailable;

    public void CheckOut(string name)
    {
        var currentDate = DateTime.UtcNow;
    }
}
```

**DO NOT** postfix anything with non-alphanumeric symbols
```csharp
public class Equipment
{
    private bool isAvailable_;

    public void CheckOut(string name)
    {
        var currentDate_ = DateTime.UtcNow;
    }
}
```

**DO** prefix interfaces with a capital "I"
```csharp
public interface IMovie
{

}
```

**DO NOT** Capitalize each word in so-called closed-form compund words. You can see the list [here](https://docs.microsoft.com/en-us/dotnet/standard/design-guidelines/capitalization-conventions#capitalizing-compound-words-and-common-terms)

For example:
```ID```

**DO** (with the exception of those common terms specified above) capitalize only the first character of acronyms with three or more characters, except the first word of a camel-cased identifier.

```csharp
System.Xml
public void ProcessXmlTag(string xmlTag)
```

**DO NOT** use short, indescript variable names outside of lambda expressions
```csharp
public void Process()
{
    var x = 23;
}
```

### Comments<a name="Comments"></a>

**DO** Comment methods, classes, interfaces, properties, parameters

```csharp
/// <summary>
/// Parses the input string and does amazing things with it.
/// </summary>
/// <param name="input">The <see cref="string"/> to parse.</param>
/// <returns>The resulting transformed <see cref="string"/>.</returns>
public string Parse(string input)
{

}
```

### General<a name="General"></a>

**DO** Use properties for public class variables
```csharp
public class Upload
{
    // DO
    public DateTime Timestamp { get; set; }

    // DO NOT
    public DateTime Timestamp;

}
```

**DO** Use fields for private class variables
```csharp
public class Upload
{
    // DO
    private bool isActive;

    // DO NOT
    private bool isActive { get; set; }

}
```

**DO NOT** qualify anything with ```this```
```csharp
public class Room
{
    public int Capacity { get; set; }

    public void Reserve()
    {
        // DO NOT
        if(this.Capacity > 1)
        {

        }
    }
}
```

**DO** use the ```var``` keyword where the type is apparent
```csharp
var total = 1;
var room = new Room();
```

**DO NOT** use the ```var``` keyword where the type is NOT apparent
```csharp
// DO NOT
var room = service.FindMyRoom();

// DO
Room room = service.FindMyRoom();
```

