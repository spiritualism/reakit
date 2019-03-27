# reakit-system-palette

<a href="https://npmjs.org/package/reakit-system-palette"><img alt="NPM version" src="https://img.shields.io/npm/v/reakit-system-palette.svg?style=flat-square" /></a>

Create color themes for Reakit components.

## Installation

npm:
```sh
npm i reakit-system-palette
```

Yarn:
```sh
yarn add reakit-system-palette
```

## Setup

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider, Button } from "reakit";
import * as system from "reakit-system-palette";

const App = () => (
  <Provider system={system}>
    <Button>Button</Button>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("root"));
```

## Usage

### Creating your own palette

```jsx
import { shades, ref } from "reakit-system-palette/utils";

const system = {
  palette: {
    white: "#fff",
    black: "#212121",
    green: shades("#4caf50"),
    primary: shades("#2196f3"),
    secondary: shades(ref("green")),
    gray: shades({
      500: ref("green"),
      contrast: "#000"
    })
  }
};
```

### Extending default palette

```jsx
import * as paletteSystem from "reakit-system-palette";
import { color, ref } from "reakit-system-palette/utils";

const system = {
  ...paletteSystem,
  palette: {
    ...paletteSystem.palette,
    primary: color("#2196f3"),
    secondary: color(ref("black"))
  }
};
```

## License

MIT © [Diego Haz](https://github.com/diegohaz)
