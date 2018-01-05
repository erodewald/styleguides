# Kotlin Standards

Sitemap:
  * [Class layout](#ClassLayout)
  * [Naming Conventions](#NamingConventions)
  * [Idiomatic use of language features](#IdiomaticUse)
  * [Coding Style](#CodingStyle)
<br>

## Class Layout<a name="ClassLayout"></a>

The contents of a class should be sorted in the following order:
* Property declarations, initializer blocks
* Secondary constructors
* Method declarations
* Companion object

## Naming Conventions<a name="NamingConventions"></a>

**DO** use lower case for names of packages (`io.example.project`). 

**DO** use _PascalCase_ for files, classes, public class methods and properties.

```kotlin
// File name: User.kt

open class BasicUser { ... }
```
<br>

**DO** use _camelCase_ for functions, properties, and local variables. 

```kotlin

fun deleteUser() { ... }
var isUserActive = ...

```

### Names for test methods

In tests, it's alright to use method names with spaces enclosed in backticks but _only_ outside of the Android runtime. Underscores are acceptable for Android projects. 

```kotlin

class TestCase {
  @Test fun `ensure it works`() {
  }

  @Test fun ensureItWorks_onAndroid() {
  }
}

```
### Property names

**DO** use _SCREAMING_SNAKE_CASE_ for constants.

```kotlin
const val TOTAL_LOGINS = 0
val TOTAL_USERS = 1
val AGES = mapOf("Alice" to 20, "Bob" to 32)
val COMMA_JOINER = Joiner.on(',') // Joiner is immutable
```

### Non-constant names
Non-constant names are written in camelCase. These apply to instance properties, local properties, and parameter names.

```kotlin
val variable = "var"
val nonConstScalar = "non-const"
val mutableCollection: MutableSet<String> = HashSet()
val logger = Logger.getLogger(MyClass::class.java.name)
```
These are typically nouns or noun phrases.

### Backing properties and underscores

Prefixing an underscore to backing properties can be acceptable if a class has two properties which are conceptually the same but one is part of a public API and another is an implementation detail. 

```kotlin
class C {

  // correct
  private val _deletedList = mutableListOf<Element>()

  val deletedList: List<Element>
    get() = _deletedList
}
```

## Idiotmatic use of language features<a name="IdiomaticUse"></a>

### Default parameter values
Prefer declaring functions with default parameter values to declaring overloaded functions.

```kotlin
// Avoid
fun foo() = foo("a")
fun foo(a: String) { ... }

// Good
fun food(a: String = "a") { ... }
```

### Lambda parameters
In lambdas which are short and not nested, it's recommended to use the `it` convention instead of declaring the parameter explicitly. In nested lambdas with parameters, parameters should always be declared explicitly.


### Returns in a lambda
Avoid using multiple labeled returns in a lambda. Consider restructuring so that it will have a single exit point. If that's not possible or not clear enough, consider converting the lambda into an anonymous function. 

Do not use a labeled return for the last statement in a lambda. 

## Coding Style<a name="CodingStyle"></a>

### Braces
Braces are not required for `when` branches and `if` statement bodies which have no `else if / else` branches and which fit on a single line.

```kotlin
if (string.isEmpty()) return

when (value) {
  0 -> return
}
```

Braces are otherwise required for any `if`, `for`, `when` branch, `do`, and `while` statements, even when the body is empty or contains only a single statement. 

```kotlin
if (string.isEmpty())
  return // Wrong

if (string.isEmpty()) {
  return // Good
}
```

#### Non-empty blocks
Braces follow the Kernighan and Ritchie style (K&R, "Egyptian brackets") for nonempty blocks and block-like constructs:

* No line break before the opening brace
* Line break after the opening brace
* Line break before the closing brace
* Line break after the closing brace, _only if_ that brace terminates a statement or terminates the body of a function, constructor, or _named_ class. For example, there is _no_ line break after the brace if it is followed by `else` or a comma. 

```kotlin
return Runnable {
  while (condition()) {
    foo()
  }
}

return object : MyClass() {
  override fun foo() {
    if (condition()) {
      try {
        something()
      } catch (e: ProblemException) {
        recover()
      }
    } else if (otherCondition()) {
      somethingElse()
    } else {
      lastThing()
    }
  }
}
```

#### Expressions
An `if/else` conditional that is used as an expression may omit braces _only_ if the entire expression fits on one line. 
```kotlin
val value = if (string.isEmpty()) 0 else 1 // Okay
```
```kotlin
val value = if (string.isEmpty()) // Wrong
              0
            else
              1
```
```kotlin
val value = if (string.isEmpty()) { // Okay
  0
} else {
  1
}
```
