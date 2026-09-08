# HTML & CSS Complete Teaching Notes

---

# PART 1: HTML

## 1. Introduction to HTML

**HTML (HyperText Markup Language)** — The standard markup language used to create the structure and content of web pages. It uses **tags** (elements) to define different parts of a webpage.

**Basic Structure of an HTML Document:**
```html

<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>
```

---

## 2. Document Structure Tags

| Tag | Definition |
|---|---|
| `<!DOCTYPE html>` | Declares the document type and HTML version (HTML5) so the browser renders it correctly. |
| `<html>` | The root element that wraps all content on the page. |
| `<head>` | Contains meta-information about the document (title, links, scripts, meta tags) — not displayed on the page. |
| `<title>` | Sets the title shown in the browser tab. |
| `<body>` | Contains all the visible content of the webpage. |
| `<meta>` | Provides metadata like character encoding, viewport settings, author, description. |
| `<link>` | Links external resources like CSS stylesheets to the HTML document. |
| `<style>` | Used to write internal/embedded CSS inside the HTML document. |
| `<script>` | Used to embed or link JavaScript code. |
| `<base>` | Specifies a base URL for all relative URLs in the document. |
| `<noscript>` | Displays content if JavaScript is disabled in the browser. |

---

## 3. Text & Heading Tags

| Tag | Definition |
|---|---|
| `<h1>` to `<h6>` | Headings from largest (`h1`) to smallest (`h6`) importance. |
| `<p>` | Defines a paragraph of text. |
| `<br>` | Inserts a single line break (self-closing tag). |
| `<hr>` | Inserts a horizontal line (thematic break between content). |
| `<span>` | An inline container used to style or group a small part of text/content. |
| `<div>` | A block-level container used to group and style larger sections of content. |
| `<b>` | Displays text in **bold** without extra importance (visual only). |
| `<strong>` | Displays text in **bold** and marks it as important (semantic). |
| `<i>` | Displays text in *italics* without extra emphasis (visual only). |
| `<em>` | Displays text in *italics* and marks it as emphasized (semantic). |
| `<u>` | Underlines text. |
| `<mark>` | Highlights text with a background color. |
| `<small>` | Renders text in a smaller font size. |
| `<sub>` | Displays subscript text (e.g., H₂O). |
| `<sup>` | Displays superscript text (e.g., X²). |
| `<del>` | Displays text with a strikethrough, indicating deleted content. |
| `<ins>` | Displays underlined text, indicating inserted content. |
| `<abbr>` | Defines an abbreviation or acronym, often with a tooltip via the `title` attribute. |
| `<blockquote>` | Defines a long quotation, usually indented by browsers. |
| `<q>` | Defines a short inline quotation, wrapped in quotation marks. |
| `<cite>` | Defines the title of a creative work (book, movie, etc.). |
| `<code>` | Displays inline code in a monospace font. |
| `<pre>` | Displays preformatted text, preserving spaces and line breaks. |
| `<address>` | Defines contact information for the author/owner of a document. |

---

## 4. List Tags

| Tag | Definition |
|---|---|
| `<ul>` | Defines an unordered (bulleted) list. |
| `<ol>` | Defines an ordered (numbered) list. |
| `<li>` | Defines a single list item inside `<ul>` or `<ol>`. |
| `<dl>` | Defines a description list. |
| `<dt>` | Defines a term/name in a description list. |
| `<dd>` | Defines the description of a term in a description list. |

---

## 5. Link & Navigation Tags

| Tag | Definition |
|---|---|
| `<a>` | Defines a hyperlink used to navigate to another page or resource; uses `href` attribute. |
| `<nav>` | Defines a section containing navigation links. |

---

## 6. Image & Media Tags

| Tag | Definition |
|---|---|
| `<img>` | Embeds an image; uses `src`, `alt`, `width`, `height` attributes (self-closing). |
| `<figure>` | Groups media content (like an image) with its caption. |
| `<figcaption>` | Defines a caption for the content inside `<figure>`. |
| `<audio>` | Embeds sound/audio content with playback controls. |
| `<video>` | Embeds video content with playback controls. |
| `<source>` | Specifies multiple media resources for `<video>`, `<audio>`, or `<picture>`. |
| `<track>` | Specifies subtitles/captions for `<video>` or `<audio>`. |
| `<iframe>` | Embeds another HTML page/document within the current page. |
| `<embed>` | Embeds external content such as plugins or media. |
| `<object>` | Embeds external resources like PDFs, videos, or Flash content. |
| `<picture>` | Provides multiple image sources for different screen sizes/resolutions. |
| `<canvas>` | Used to draw graphics via JavaScript. |
| `<svg>` | Used to define vector graphics directly in HTML. |

---

## 7. Table Tags

| Tag | Definition |
|---|---|
| `<table>` | Defines a table for displaying tabular data. |
| `<tr>` | Defines a row in a table. |
| `<th>` | Defines a header cell in a table (bold & centered by default). |
| `<td>` | Defines a standard data cell in a table. |
| `<thead>` | Groups the header content of a table. |
| `<tbody>` | Groups the main body content of a table. |
| `<tfoot>` | Groups the footer content of a table. |
| `<caption>` | Defines a title/caption for a table. |
| `<colgroup>` | Groups columns in a table for shared formatting. |
| `<col>` | Defines properties for a specific column inside `<colgroup>`. |

---

## 8. Form Tags

| Tag | Definition |
|---|---|
| `<form>` | Defines a form used to collect user input, sent via `action` and `method` attributes. |
| `<input>` | Defines an input field; `type` attribute decides its behavior (text, email, password, checkbox, radio, etc.). |
| `<textarea>` | Defines a multi-line text input field. |
| `<button>` | Defines a clickable button. |
| `<select>` | Defines a dropdown list. |
| `<option>` | Defines an option inside a `<select>` dropdown. |
| `<optgroup>` | Groups related options inside a `<select>` dropdown. |
| `<label>` | Defines a label for a form input, improving accessibility. |
| `<fieldset>` | Groups related form elements inside a labeled box. |
| `<legend>` | Defines a caption/title for a `<fieldset>`. |
| `<datalist>` | Provides a list of predefined suggestions for an `<input>` element. |
| `<output>` | Displays the result of a calculation or user action. |
| `<progress>` | Displays the progress of a task (e.g., download progress). |
| `<meter>` | Displays a scalar value within a known range (e.g., disk usage). |

**Common `<input>` types:** `text`, `password`, `email`, `number`, `checkbox`, `radio`, `date`, `file`, `submit`, `reset`, `button`, `hidden`, `range`, `color`, `search`, `tel`, `url`.

---

## 9. Semantic / Layout Tags (HTML5)

| Tag | Definition |
|---|---|
| `<header>` | Defines the introductory/header section of a page or section. |
| `<footer>` | Defines the footer section of a page or section (contact info, copyright). |
| `<main>` | Defines the main, unique content of the document. |
| `<section>` | Defines a thematic grouping of content within a document. |
| `<article>` | Defines independent, self-contained content (e.g., blog post, news article). |
| `<aside>` | Defines content indirectly related to the main content (sidebar). |
| `<details>` | Creates an expandable/collapsible content box. |
| `<summary>` | Defines a visible heading for a `<details>` element. |
| `<dialog>` | Defines a dialog box or popup window. |
| `<template>` | Holds HTML content that is not rendered but can be used later via JavaScript. |

---

## 10. Common HTML Global Attributes

| Attribute | Definition |
|---|---|
| `id` | Assigns a unique identifier to an element. |
| `class` | Assigns one or more class names to an element for CSS/JS targeting. |
| `style` | Applies inline CSS directly to an element. |
| `title` | Provides extra tooltip information shown on hover. |
| `href` | Specifies the URL destination for a link. |
| `src` | Specifies the source path of media (image, video, script). |
| `alt` | Provides alternative text for images (accessibility & SEO). |
| `target` | Specifies where to open a linked document (`_blank`, `_self`, etc.). |
| `disabled` | Disables an input/button element. |
| `placeholder` | Shows hint text inside an input field. |
| `value` | Specifies the default value of an input element. |
| `data-*` | Custom data attributes used to store extra information. |

---

# PART 2: CSS

## 1. Introduction to CSS

**CSS (Cascading Style Sheets)** — A stylesheet language used to describe the presentation (layout, colors, fonts, spacing) of an HTML document.

**Types of CSS (ways to apply CSS):**

| Type | Definition |
|---|---|
| **Inline CSS** | CSS written directly inside an HTML tag using the `style` attribute. Applies to a single element only. Example: `<p style="color:red;">Text</p>` |
| **Internal CSS** | CSS written inside a `<style>` tag within the `<head>` of the HTML document. Applies to the whole page. |
| **External CSS** | CSS written in a separate `.css` file and linked using `<link rel="stylesheet" href="style.css">`. Best practice for larger projects — reusable & maintainable. |

---

## 2. CSS Syntax

```css
selector {
    property: value;
}
```
- **Selector** — targets the HTML element to style.
- **Property** — the style aspect to change (e.g., color).
- **Value** — the setting applied to the property.

---

## 3. CSS Selectors

| Selector | Definition |
|---|---|
| `*` (Universal) | Selects all elements on the page. |
| `element` (Type) | Selects all elements of a given tag name, e.g., `p { }`. |
| `.class` | Selects all elements with a specific class name. |
| `#id` | Selects the single element with a specific id. |
| `element, element` | Group selector — applies the same styles to multiple selectors. |
| `element element` (Descendant) | Selects elements nested inside another element. |
| `element > element` (Child) | Selects only direct children of an element. |
| `element + element` (Adjacent Sibling) | Selects the element immediately after another. |
| `element ~ element` (General Sibling) | Selects all sibling elements after a specified element. |
| `[attribute]` | Selects elements with a specific attribute. |
| `[attribute=value]` | Selects elements with a specific attribute value. |
| `:hover` | Selects an element when the mouse pointer is over it (pseudo-class). |
| `:focus` | Selects an element when it is focused (e.g., input field). |
| `:nth-child(n)` | Selects elements based on their position among siblings. |
| `:first-child` / `:last-child` | Selects the first/last child element of its parent. |
| `::before` / `::after` | Inserts generated content before/after an element's content (pseudo-element). |
| `:not(selector)` | Selects all elements except the one matching the selector. |

---

## 4. CSS Box Model

The **Box Model** describes how every HTML element is structured as a rectangular box, from inside out:

| Component | Definition |
|---|---|
| **Content** | The actual text/image inside the element. |
| **Padding** | Space between the content and the border (inside the box). |
| **Border** | A line surrounding the padding and content. |
| **Margin** | Space outside the border, separating the element from others. |

---

## 5. CSS Properties by Category

### A. Text & Font Properties

| Property | Definition |
|---|---|
| `color` | Sets the color of text. |
| `font-family` | Specifies the typeface of text (e.g., Arial, sans-serif). |
| `font-size` | Sets the size of text. |
| `font-weight` | Sets the thickness/boldness of text (normal, bold, 100–900). |
| `font-style` | Sets text style as normal, italic, or oblique. |
| `text-align` | Aligns text horizontally (left, right, center, justify). |
| `text-decoration` | Adds decoration to text (underline, line-through, none). |
| `text-transform` | Controls capitalization (uppercase, lowercase, capitalize). |
| `line-height` | Sets the vertical spacing between lines of text. |
| `letter-spacing` | Sets spacing between characters. |
| `word-spacing` | Sets spacing between words. |
| `text-shadow` | Adds shadow effect to text. |
| `white-space` | Controls how whitespace/line breaks inside an element are handled. |

### B. Background Properties

| Property | Definition |
|---|---|
| `background-color` | Sets the background color of an element. |
| `background-image` | Sets an image as the background. |
| `background-repeat` | Controls whether/how a background image repeats. |
| `background-position` | Sets the starting position of a background image. |
| `background-size` | Sets the size of the background image (cover, contain, etc.). |
| `background-attachment` | Determines if background scrolls with the page or stays fixed. |

### C. Box Model Properties

| Property | Definition |
|---|---|
| `width` / `height` | Sets the width/height of an element. |
| `max-width` / `min-width` | Sets the maximum/minimum width an element can have. |
| `max-height` / `min-height` | Sets the maximum/minimum height an element can have. |
| `padding` | Sets space between content and border (shorthand for top/right/bottom/left). |
| `margin` | Sets space outside the border (shorthand for top/right/bottom/left). |
| `border` | Shorthand to set border width, style, and color. |
| `border-radius` | Rounds the corners of an element's border. |
| `box-sizing` | Defines whether width/height include padding & border (`content-box` vs `border-box`). |
| `box-shadow` | Adds a shadow effect around an element's box. |
| `overflow` | Controls what happens to content that overflows an element's box (visible, hidden, scroll, auto). |

### D. Display & Positioning Properties

| Property | Definition |
|---|---|
| `display` | Defines how an element is rendered (block, inline, inline-block, flex, grid, none). |
| `position` | Sets the positioning method (static, relative, absolute, fixed, sticky). |
| `top` / `right` / `bottom` / `left` | Sets offset positions for positioned elements. |
| `z-index` | Controls the stacking order of overlapping elements. |
| `float` | Pushes an element to the left or right, allowing text to wrap around it. |
| `clear` | Stops an element from wrapping around floated elements. |
| `visibility` | Shows or hides an element without removing its layout space. |

### E. Flexbox Properties

| Property | Definition |
|---|---|
| `display: flex` | Turns a container into a flexbox layout container. |
| `flex-direction` | Sets the direction of flex items (row, column, row-reverse, column-reverse). |
| `justify-content` | Aligns flex items along the main axis (start, center, space-between, etc.). |
| `align-items` | Aligns flex items along the cross axis. |
| `align-content` | Aligns multiple flex lines when there's extra space. |
| `flex-wrap` | Controls whether flex items wrap onto multiple lines. |
| `flex-grow` | Defines how much a flex item grows relative to others. |
| `flex-shrink` | Defines how much a flex item shrinks relative to others. |
| `flex-basis` | Sets the initial size of a flex item before space distribution. |
| `gap` | Sets spacing between flex/grid items. |

### F. Grid Properties

| Property | Definition |
|---|---|
| `display: grid` | Turns a container into a grid layout container. |
| `grid-template-columns` | Defines the number and size of columns in a grid. |
| `grid-template-rows` | Defines the number and size of rows in a grid. |
| `grid-gap` / `gap` | Sets spacing between grid rows and columns. |
| `grid-column` | Specifies how many columns an item spans. |
| `grid-row` | Specifies how many rows an item spans. |
| `justify-items` | Aligns grid items horizontally within their cells. |
| `align-items` | Aligns grid items vertically within their cells. |

### G. Transition, Transform & Animation Properties

| Property | Definition |
|---|---|
| `transition` | Shorthand to animate changes in CSS properties smoothly over time. |
| `transform` | Applies 2D/3D transformations (rotate, scale, translate, skew). |
| `animation` | Shorthand to apply keyframe animations to an element. |
| `@keyframes` | Defines the steps/stages of a CSS animation. |
| `opacity` | Sets the transparency level of an element (0 to 1). |
| `cursor` | Sets the mouse cursor style when hovering over an element. |

### H. Miscellaneous Properties

| Property | Definition |
|---|---|
| `list-style` | Sets bullet/number style for list items. |
| `vertical-align` | Aligns inline/table-cell elements vertically. |
| `content` | Inserts generated content, used with `::before`/`::after`. |
| `filter` | Applies visual effects like blur, brightness, grayscale. |
| `object-fit` | Controls how an image/video fits within its container. |
| `pointer-events` | Controls whether an element responds to mouse/touch events. |

---

## 6. CSS Units

| Unit | Definition |
|---|---|
| `px` | Pixels — a fixed, absolute unit of measurement. |
| `%` | Percentage — relative to the parent element's size. |
| `em` | Relative to the font-size of the parent element. |
| `rem` | Relative to the font-size of the root (`html`) element. |
| `vw` | Relative to 1% of the viewport's width. |
| `vh` | Relative to 1% of the viewport's height. |

---

## 7. CSS Layout Techniques

| Technique | Definition |
|---|---|
| **Normal Flow** | Default layout where elements stack in the order they appear in HTML. |
| **Float Layout** | Older technique using `float` to place elements side by side. |
| **Flexbox** | One-dimensional layout system for arranging items in a row or column. |
| **CSS Grid** | Two-dimensional layout system for arranging items in rows and columns simultaneously. |
| **Responsive Design** | Approach to make layouts adapt to different screen sizes using media queries. |

---

## 8. Media Queries (Responsive CSS)

```css
@media (max-width: 768px) {
    body {
        background-color: lightblue;
    }
}
```
**Media Query** — A CSS technique that applies styles conditionally based on device characteristics like screen width, enabling responsive design.

---

## 9. CSS Specificity & Cascade

| Concept | Definition |
|---|---|
| **Cascade** | The order/rules by which browsers decide which CSS rule applies when multiple rules target the same element. |
| **Specificity** | A ranking system determining which CSS rule wins when there's a conflict (inline > id > class > element). |
| `!important` | A declaration that overrides all other rules regardless of specificity (use sparingly). |
| **Inheritance** | Some CSS properties (like `color`, `font-family`) are automatically passed down from parent to child elements. |

---

*End of Notes — Use this as a quick-reference base and expand each section with live code examples during class.*