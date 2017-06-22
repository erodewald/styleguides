# FOD Team CSS Coding Standards

CSS extension languages such as Sass fall under the CSS coding standards.

Sitemap:
  * [Naming Conventions](#NamingConventions)
  * [Coding Style](#NamingConventions)
<br>

## Naming Conventions<a name="NamingConventions"></a>

**Do** use _spinal_case_ for file names and variables.

```css
/* File location-schedule.scss */

$main-font: Arial;
```
<br>

**Do** use _snake-camelCase\__double spinal\__camelCase--double snake_ for class names.

```css
/* Idea here is namespace-component_subcomponent--modifier */

.calendar-day_
```

**Do** use _PascalCase_ for Id selectors. These should be extremely rare.

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

**Avoid** the `#` and `*` selector.

```css
/* Avoid */
#ClassDate {}
* {}

/* Correct */
.class-date {}
.more-specific-selector {}
```
<br>

**Avoid** nesting beyond one level. It is preferrable that you NEVER nest.

```css
/* In .css */

/* Avoid */
.first-level .second-level .third-level {}

/* Correct */
.targetted-class-selector {}


/* In .scss */

/* Avoid */
.first-level {
  .second-level {
    .third-level {}
  }
}

/* Correct */
.targetted-class-selector {}
```
<br>

**Do not** use the keyword `!important`.

```css
/* No. */
.i-win {
  display: flex !important;
}
```
<br>
