🔥 Flamework
--
_Set you project ablaze!_

- [🔥 Flamework](#%F0%9F%94%A5-flamework)
- [LAYOUT](#layout)
- [Utils](#utils)
- [Mixins](#mixins)
- [Vars](#vars)
___
## LAYOUT

```html
<!-- Defining a container -->
<element contain class="contain">...</element>

<!-- Direction -->
<element layout=column column nowrap>...</element>
<element class="row nowrap mobile-wrap">...</element>
<element mobile-layout=row mobile=column>...</element>


<!-- Alignment -->
<element align="center stretch">...</element>
<element mobile-align="center center">...</element>

<!--
Align Options:
  Main Axis:
  - start
  - center
  - end
  - between
  - around

  Cross Axis:
  - start
  - center
  - end
  - stretch
-->


<!-- Flex Columns -->
<element flex="33">...</element>
<element mobile-flex="grow">...</element>

<!--
Flex Options:
- multiples of 5: 5, 10, .. 95, 100
- 33 or 66

  Behavior:
  - none
  - initial
  - noshrink
  - auto
  - stretch
  - grow
-->
```

___

## Utils
- .videoWrapper (makes video responsive 16:9)
- .hide-mobile, .hide-desktop, .show-mobile, .show-desktop (instruct display on breakpoints)

___
## Mixins
```scss
@include shadow;
@include transition(); // array with props
@include icon-small;
@include input-placeholder-color($black3) // custom inputs placeholders color
@include selection($color, $bg) // custom text selection color
@include drag-cursor;
```
---
## Vars
```scss
$container-width:     74rem !default;
$mobile-breakpoint:   69rem !default; // ~780px
$desktop-breakpoint:  $mobile-breakpoint + 0.01;
$mobile:  "screen and (max-width: #{$mobile-breakpoint})" !default;
$desktop: "screen and (min-width: #{$desktop-breakpoint})" !default;

$radius: 6pt !default;

$black8: rgba(29, 33, 41, 0.7) !default;
$black5: rgba(29, 33, 41, .5) !default;
$black3: rgba(29, 33, 41, .25) !default;
$black1: rgba(29, 33, 41, .1) !default;

$white7: rgba(255, 255, 255, .75) !default;
$white5: rgba(255, 255, 255, .5) !default;
$white3: rgba(255, 255, 255, .3) !default;
$white1: rgba(255, 255, 255, .1) !default;

$background: #e0e0e0 !default;

$column: '[column], [layout=column], .layout-column, .column';
$row: '[row], [layout=row], .layout-row, .row';
$mobileColumn: '[mobile-column], [mobile-layout=column], .mobile-layout-column, .mobile-column';
$mobileRow: '[mobile-row], [mobile-layout=row], .mobile-layout-row, .mobile-row';

$base-font: 'Assistant', 'Segoe UI', 'Open Sans',
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  "Roboto",
  "Helvetica Neue", Arial, sans-serif,
  "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !default;
$base-line-height: 1.4 !default;
$base-font-size: 100% !default;
```
