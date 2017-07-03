# FOD Team CSS Coding Standards {

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**DO** use _spinal-case_ for file names.

```css
/* File location-schedule.scss */
```
<br>

**DO** use _snake-PascalCase\_\_double spinal\_\_PascalCase--double snake_ for class names. See [Enduring CSS](http://ecss.io/chapter5.html) for where the convention comes from.

```css
/* Idea here is namespace-Component__Subcomponent--modifier */

.calendar-Day__ClassName {}
.calendar-Day__ClassName--active {}

/* Why? To avoid nesting and let CSS be CSS. We don't want to get into specificity wars. */
```
<br>

**DO** use _PascalCase_ for Id selectors. **These should be extremely rare**.

```css
#ScheduleDate {}
```
<br>

## Coding Style<a name="CodingStyle"></a>

**DO** end each file with an empty line.
```css
.namespace-Selector {}
/* Empty line here after final selector */
```
<br>

**AVOID** the `#` and `*` selector.

```css
/* Avoid */
#ClassDate {}
* {}

/* Correct */
.calendar-ClassDate {}
.namespace-SomeMoreSpecificSelector {}
```
<br>

**AVOID** nesting beyond one level. It is preferrable that you NEVER nest.

```css
/* Avoid */
.first-level .second-level .third-level {}

/* Correct */
.namespace-TargetedClassSelector {}
```
<br>

**DO NOT** use the keyword `!important`.

```css
/* No. */
.i-Win {
  display: flex !important;
}
```
<br>

Why? _!important_ trumps everything and is only overridden by _!important_. It becomes a pain to modify the styles of another class on a given element that is using _!important_. No nesting and avoiding _!important_ allows easier modification due to not having to worry about specifity.

**DO NOT** write vendor prefixes. Let a tool do that work.

```css
.calendar {
  /* Avoid */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  /* Correct */
  display: flex;

  /* Use a tool such as autoprefixer to add the vendor prefixes automatically. */
}
```
<br>

**DO** prefer flex for layout over floats that act like grids.

```css
/* Avoid */
.namepace-ClassName {
  float: right;
}
.namespace-ClassName::after {
  /* Hacks to make floats act like a grid */
}

/* Correct */
.namepace-ClassName {
  display: flex;
}
```
<br>

**DO** comment things like browser hacks.

```css
/* IE6 and IE7 hack */
.namespace-OldBrowser { 
  *color: #000000; 
}
```
<br>

**DO** order properties alphabetically. Makes it easier to wade through.

```css
/* Avoid */
.location-Description {
  width: 125px;
  color: #000000;
  margin: 0 0 15px;
}

/* Good */
.location-Description {
  color: #000000;
  margin: 0 0 15px;
  width: 125px;
}
```
<br>

**AVOID** prefixing and postfixing property values with zeros.

```css
/* Avoid */
.location-Name {
  font-size: 0.0250rem;
}

/* Good */
.location-Name {
  font-size: .025rem;
}
```
<br>

**DO** properly space out properies.

```css
/* Avoid */
.location-Description {
  vertical-align:middle;
}

/* Good */
.location-Name {
  vertical-align: middle;
}
```
<br>

# }
