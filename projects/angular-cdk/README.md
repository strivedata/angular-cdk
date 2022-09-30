# Strive Angular Component Dev Kit (CDK)

Component Dev Kit (CDK) for building Angular UI components.

## Design System

### Colors

The theme replaces the default tailwind colors with a more semantic color scheme consisting of the following colors:

* `primary`: The primary color is the dominant color used most frequently in your UI (usually the brand color).
* `accent`: The accent color is used to emphasize actions and highlight information.
* `neutral`: A neutral color with tints and shades for fonts and backgrounds.

Additionally, we use a set of semantic colors to communicate the intention of certain messages or actions:

* `info`: To indicate help and support.
* `succes` To indicate successful operations or to celebrate a win.
* `alert`: To indicate warning or that progress is impeded.
* `error`: To indicate error states or to emphasize actions that are destructive.

Each color comes with a set of 10 different tints and shades reaching from 100-1000 as well as a default value. This means you can use classes such as `bg-primary` or `bg-primary-500`.

### Fonts

The theme is build around five basic typefaces:

* Normal Body Text (default font size) -> 16px (1rem)
* Large Body Text
* Secondary Text & Labels
* Page Title -> 48px (3rem)
* Section Title -> 24px (1.5rem)

### Spacing

The theme extends the default tailwind spacing system with a more limited set of spacing utilities for a more consistent design. The system uses multiples of eight and an assumed browser font size of 16px.

* `xs` (4px / 0.25rem)
* `s` (8px / 0.5rem)
* `m` (16px / 1rem)
* `l` (24px / 1.5rem)
* `xl` (32px / 2rem)
* `2xl` (40px / 2.5rem)
* `3xl` (48px / 3rem)

The classes are all available with the `padding`, `margin`, `width`, `height`, `maxHeight`, `gap`, `inset`, `space`, and `translate` plugins. This means you can use classes such as `p-wide`.

## Directives

The library includes a set of powerful directives that help you implement common UI patterns in your components without having to write the logic/behavior. This allows you to build so called "headless" components using your own markup and styles.

### Toggle Select (Switch)

Allows to toggle a value between two mutually exclusive states and always has a default value. It can be used to control a variable of type `boolean`.

#### Guidelines

Use a toggle select when there is a binary state that the user should be able to toggle instantly, e.g. `on` and `off`. It works like a switch.

* Toggle switches should take immediate effect and should not require the user to click save or submit
* Provide a short and concise label that describes what the control will do when the toggle is set to true
* Place labels left of the toggle and avoid adding labels to describe the currently selected value

#### Usage

Import Module:

```typescript
import { StriveToggleSelectModule } from '@strivestudio/angular-cdk';
```

Use Directive:

```html
<!-- usage without form -->
<button toggleSelect [checked]="myBoolean" (checkedChange)="myBoolean = $event">Toggle {{ myBoolean }}</button>

<!-- usage within reactive forms -->
<button toggleSelect formControlName="myBoolean">Toggle {{ form.controls['myBoolean'].value }}</button>
```

### Single Select (Radio Group)

The single select directive gives you the same functionality as native HTML radio inputs, without any of the styling. Use them for building out custom UIs for selecting a single value.

#### Guidelines

Use a single select behavior when there is a list of two or more options that are mutually exclusive and the user has to select exactly one option.

#### Usage

Import Module:

```typescript
import { StriveSingleSelectModule } from '@strivestudio/angular-cdk';
```

Use Directive:

```html
<!-- usage without form -->
<div>You selected: {{ singleSelectValue || 'None' }}</div>
<div singleSelectGroup [selectedOption]="singleSelectValue" (selectedOptionChange)="singleSelectValue = $event">
  <div singleSelectOption value="opt-1" [ngClass]="{ 'font-bold': singleSelectValue === 'opt-1' }">Option 1</div>
  <div singleSelectOption value="opt-2" [ngClass]="{ 'font-bold': singleSelectValue === 'opt-2' }">Option 2</div>
  <div singleSelectOption value="opt-3" [ngClass]="{ 'font-bold': singleSelectValue === 'opt-3' }">Option 3</div>
</div>

<!-- usage with reactive forms -->
<div>You selected: {{ form.controls['singleSelectValue'].value || 'None' }}</div>
<div singleSelectGroup formControlName="singleSelectValue" #singleSelect="singleSelectGroup">
  <div singleSelectOption value="opt-1" [ngClass]="{ 'font-bold': singleSelect.isSelectedOption('opt-1') }">Option 1</div>
  <div singleSelectOption value="opt-2" [ngClass]="{ 'font-bold': singleSelect.isSelectedOption('opt-2') }">Option 2</div>
  <div singleSelectOption value="opt-3" [ngClass]="{ 'font-bold': singleSelect.isSelectedOption('opt-3') }">Option 3</div>
</div>
```

### Multi Select (Checkbox)

### Dropdown Select

### Autocomplete Select

### Slider Select

### Modal Overlay

TDB.

### Notification Overlay (Toast)

TDB.

Use for: System Notifications that don't require user interaction and should not interrupt the user in his current workflow.

* Can be placed on the corners or center of the top or bottom
* Can be destroyed after some time automatically
* Can spawn multiple instances at the same time
* Is always destroyed when clicked and can only have one action/input (or no action)
* Used to notify of a state change (e.g. Successfully Saved, Connection Lost)

### Banner Overlay

Like a mixture of modal and notification

* Always takes the full width of the content
* Can be placed on top or bottom of the screen
* Can only be one instance at the same time
* Stays until the user interacts (performs action or dismisses)
* Can be triggered automatically on certain routes
* Used for medium urgent messages or actions that need to be taken by the user (e.g. Cookie-Banner, Marketing Offer)

### Popover Overlay

Popovers are used to offer additional information or interaction options in relation to an element. They appear initially or else on click or tap. Popovers can be closed by the user clicking or tapping on an area outside the popover or on the triggering element.

* floating panels with arbitrary content
* like a modal dialog but with relative positioning, no backdrop and arbirtraty content
* always triggered by the users actions
* can have one or multiple actions
* used for displaying dropdown menus, filter options, or date and time pickers

https://moon.io/components/popover

### Tooltip Overlay

Tooltips are used to offer additional text information for an element. They appear on mouseover or tap and are not initially visible. Tooltips can be closed by the user by clicking or tapping on an area outside the tooltip.

Unlike popovers, tooltips only contain text.

### Sidebar Overlay

* Can be positioned left or right of the page and always takes the full height of the screen
* Stays until explicitly closed (even when navigating)

### Loader

* overlay

### File Dropzone

TBD.

## Utilities

### Query Param Store

* Implemented on top of the Router
* Allows to `.set()` params which will get persisted in the URL/route
* Offers an Observable `state$` that emits current query params
