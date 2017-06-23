# FOD Team CSS Coding Standards

CSS extension languages such as Sass fall under the CSS coding standards.

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#CodingStyle)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**Do** use _spinal_case_ for file names and variables.

```css
/* File location-schedule.scss */

$main-font: Arial;
```
<br>

**Do** use _snake-PascalCase\_\_double spinal\_\_PascalCase--double snake_ for class names. See [Enduring CSS](http://ecss.io/chapter5.html) for where the convention comes from.

```css
/* Idea here is namespace-Component__Subcomponent--modifier */

.calendar-Day__ClassName {}
.calendar-Day__ClassName--active {}

/* Why? To avoid nesting and let CSS be CSS. We don't want to get into specificity wars. */
```
<br>

**Do** use _PascalCase_ for Id selectors. **These should be extremely rare**.

```css
#ScheduleDate {}
```
<br>

**Do** prefix an `_` to components (files that are meant to be imported).

```css
/* File schedule.scss */

@import "_schedule-calendar.scss";
```
<br>

## Coding Style<a name="CodingStyle"></a>

**Do** end each file with an empty line.
```css
.namespace-Selector {}
/* Empty line here after final selector */
```
<br>

**Avoid** the `#` and `*` selector.

```css
/* Avoid */
#ClassDate {}
* {}

/* Correct */
.calendar-ClassDate {}
.namespace-SomeMoreSpecificSelector {}
```
<br>

**Avoid** nesting beyond one level. It is preferrable that you NEVER nest.

```css
/* In .css */

/* Avoid */
.first-level .second-level .third-level {}

/* Correct */
.namespace-TargetedClassSelector {}


/* In .scss */

/* Avoid */
.first-level {
  .second-level {
    .third-level {}
  }
}

/* Correct */
.namespace-TargetedClassSelector {}
```
<br>

**Do not** use the keyword `!important`.

```css
/* No. */
.i-Win {
  display: flex !important;
}
```
<br>

**Do not** write vendor prefixes. Let a tool do that work.

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

**Do** prefer flex for layout over floats that act like grids.

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

**Do** comment things like browser hacks.

```css
/* IE6 and IE7 hack */
.namespace-OldBrowser { 
  *color: #000000; 
}
```
