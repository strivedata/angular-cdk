# Strive Angular Component Dev Kit (CDK)

Component Dev Kit (CDK) for building Angular UI components.

## Design System

### Colors

The theme replaces the default tailwind colors with a more semantic color scheme consisting of the following colors:

* Primary: The primary color is the dominant color used most frequently in your UI (usually the brand color).
* Accent: The accent color is used to emphasize actions and highlight information.
* Neutrals: A neutral color with tints and shades for fonts and backgrounds.
* Semantics: A set of colors for success, error, alert and info states.

Each color comes with a set of 10 different tints and shades reaching from 100-1000 as well as a default value. This means you can use classes such as `bg-primary` or `bg-primary-500`.

### Fonts

The theme uses five basic typefaces:

* Normal Body Text (default font size)
* Large Body Text
* Secondary Text & Labels
* Page Title
* Section Title

### Spacing

The theme extends the default tailwind spacing system with a more limited set of spacing utilities for a more consistent design. The system uses multiples of eight and an assumed browser font size of 16px.

* XS (4px / 0.25rem)
* S (8px / 0.5rem)
* M (16px / 1rem)
* L (24px / 1.5rem)
* XL (32px / 2rem)
* 2XL (40px / 2.5rem)
* 3XL (48px / 3rem)

The classes are all available with the `padding`, `margin`, `width`, `height`, `maxHeight`, `gap`, `inset`, `space`, and `translate` plugins. This means you can use classes such as `p-wide`.

## Directives

The library includes a set of powerful directives that help you implement common UI patterns in your components.

### Switch (Toggle)

Allows to toggle a value between two mutually exclusive states and always has a default value. It can control a variable of type `boolean`.

#### Guidelines

Use a switch when there is a binary state that the user should be able to toggle instantly, e.g. `on` and `off`.

* Toggle switches should take immediate effect and should not require the user to click save or submit
* Provide a short and concise label that describes what the control will do when the Switch is ON
* Place labels left of the Switch and avoid adding labels to describe the currently selected value

#### Usage

Import Module:

```typescript
import { StriveAngularCdkSwitchModule } from '@strivestudio/angular-cdk';
```

Use directive:

```html
<!-- usage without form -->
<button superSwitch [checked]="switch" (checkedChange)="this.switch = $event">Toggle {{ switch }}</button>

<!-- usage within form -->
<button superSwitch formControlName="switch">Toggle {{ form.controls['switch'].value }}</button>
```

### Autocomplete

TDB.

### Modal Overlay

TDB.

### Tooltip Overlay

TDB.

### File Dropzone

TBD.
