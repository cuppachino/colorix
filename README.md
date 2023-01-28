# Colorix

Colorix helps you recognize and track ansi escape sequences in your code, and provides a simple way to define and layer color presets.

```ts
import cx from 'colorix'

const goblinInk = cx('bgGreen', 'black', 'bold')

console.log(goblinInk('hello goblin', '!'))
```

![goblin-example](./public/globin-example.jpg)

With TypeScript, you'll see how the color sequences are applied to your strings.

```ts
declare const goblinMessage: Colorix<['bgGreen', 'black', 'bold'], ['hello goblin', '!']>
// => `\u001B[42;30;1mhello goblin!\u001B[0m`
```

This is useful with primitive strings as well.

```ts
declare const goblinMessage: Colorix<['bgGreen', 'black', 'bold'], [string, ...string[]]>
// => `\u001B[42;30;1m${string}\u001B[0m`
```

## Installation

Add `colorix` to your project using your favorite package manager.

### NPM

```hs
npm install colorix
```

### PNPM

```llvm
pnpm add colorix
```

### Yarn

```llvm
yarn add colorix
```

## Exports

### `colorix` / `cx` / `default`

| Colorix | Description |
| --- | --- |
| [`default`](src/index.mts) | create presets for colorizing [`Stringifiable`](https://github.com/Cuppachino/type-space/blob/9f1a2d71db0c6ef0e3c74b7f4cbdbe7efc390dcb/src/stringifiable.ts) values. |
| [`colorix`](src/index.mts) | alias for `cx` |
| [`cx`](src/index.mts) | named export |

```ts
// create a theme by passing colors to the first function.
declare const cx: <Colors extends Color[]>(...colors: Colors) =>
  // then pass stringifiable values to the second function to colorize them.
  <Strings extends Stringifiable[]>(...strings: Strings) =>
    // the returned value is an ansified string.
    Colorix<Colors, Strings>
```

### Constants

| Name | Description |
| --- | --- |
| [`CSI`](src/ansi.mts) | control sequence introducer (`"\x1b["`) |
| [`SGRT`](src/ansi.mts) | select graphic rendition terminator (`"m"`) |
| [`FOREGROUND`](src/colors.mts) | readonly foreground lookup object |
| [`BACKGROUND`](src/colors.mts) | readonly background lookup object |
| [`MODIFIER`](src/colors.mts) | readonly modifier lookup object |
| [`COLORS`](src/colors.mts) | readonly color lookup object (foreground, background, and modifiers) |

### Types

| Generic | Description |
| --- | --- |
| [`Colorix`](src/types/colorix.mts) | utility for creating literals wrapped in ANSI sequences |
| [`ColorSequence`](src/types/color-sequence.mts) | utility for creating literal ANSI sequences |

| Alias | Description |
| --- | --- |
| [`ResetSequence`](src/types/color-sequence.mts) | literal reset sequence that is always appended to the end of a color sequence |
| [`ColorTable`](src/types/colors.mts) | readonly record of color aliases and color codes |
| [`Color`](src/types/colors.mts) | a foreground, background, or modifier color (`keyof ColorTable`) |
| [`ColorCode`](src/types/colors.mts) | an SGR color code |
| [`Foreground`](src/types/colors.mts) | a foreground color |
| [`Background`](src/types/colors.mts) | a background color |
| [`Modifier`](src/types/colors.mts) | a modifier color |

#### Color Tables

| Foreground | Code | Foreground Bright | Code |
| --- | :---: | --- | :---: |
| `"black"` | 30 | `"gray"` | 90 |
| `"red"` | 31 | `"redBright"` | 91 |
| `"green"` | 32 | `"greenBright"` | 92 |
| `"yellow"` | 33 | `"yellowBright"` | 93 |
| `"blue"` | 34 | `"blueBright"` | 94 |
| `"magenta"` | 35 | `"magentaBright"` | 95 |
| `"cyan"` | 36 | `"cyanBright"` | 96 |
| `"white"` | 37 | `"whiteBright"` | 97 |

| Background | Code | Background Bright | Code |
| --- | :---: | --- | :---: |
| `"bgBlack"` | 40 | `"bgGray"` | 100 |
| `"bgRed"` | 41 | `"bgRedBright"` | 101 |
| `"bgGreen"` | 42 | `"bgGreenBright"` | 102 |
| `"bgYellow"` | 43 | `"bgYellowBright"` | 103 |
| `"bgBlue"` | 44 | `"bgBlueBright"` | 104 |
| `"bgMagenta"` | 45 | `"bgMagentaBright"` | 105 |
| `"bgCyan"` | 46 | `"bgCyanBright"` | 106 |
| `"bgWhite"` | 47 | `"bgWhiteBright"` | 107 |

| Modifier | Code |
| --- | :---: |
| `"reset"` | 0 |,
| `"bold"` | 1 |,
| `"dim"` | 2 |,
| `"italic"` | 3 |,
| `"underline"` | 4 |,
| `"inverse"` | 7 |,
| `"hidden"` | 8 |,
| `"strikethrough"` | 9 |
