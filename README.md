Flamework 🔥
--
A *flexbox SCSS* lib. Light, non-intrusive with intuitive and clear syntax to _put your project ablaze!_

- [Flamework 🔥](#flamework-%F0%9F%94%A5)
- [Layout](#layout)
- [Utils](#utils)
- [Mixins](#mixins)
- [Vars](#vars)
___
## Layout

- Defining a container:
```html
<div contain class="contain">...</div>
```
___

- Direction and Wrap:
```html
<div layout=column column nowrap>[columns]</div>
<div class="row nowrap mobile-wrap">[row but wraps in mobile]</div>
<div mobile-layout=row mobile=column>[column | mobile rows]</div>
<div class="row row-reverse" row="nowrap reverse">[reverse]</div>
```
___

- Alignment:
```html
<div align="center stretch">...</div>
<div mobile-align="center center">...</div>
```
Options:
Main axis:
- start
- between
- around
- even
- center
- end

Cross axis:
- start
- center
- end
- stretch
___

Flex Columns

```html
<div flex="33">...</div>
<div mobile-flex="grow">...</div>
```

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

___

## Utils
- .videoWrapper (makes video responsive 16:9)
- .w100, .h100 (util: width or height 100%)
- .hide-mobile, .hide-desktop, .show-mobile, .show-desktop (instruct display on breakpoints)

## Mixins
```scss
@include shadow;
@include transition(); // array with props
@include icon-small;
@include input-placeholder-color($black3) // custom inputs placeholders color
@include selection($color, $bg) // custom text selection color
@include drag-cursor;
@include reset-button; // Remove relevant button styles
@include absolute; // set position: absolute; and zeroes all axis
```

## Vars
```scss
$container-width:     76rem !default;
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
