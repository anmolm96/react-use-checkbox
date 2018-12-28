## react-use-checkbox

[![](https://img.shields.io/npm/v/@anmolm/react-use-checkbox.svg)](https://github.com/anmolm96/react-use-checkbox) [![](https://img.shields.io/bundlephobia/min/@anmolm/react-use-checkbox.svg)](https://github.com/anmolm96/react-use-checkbox)

> ⚠️ Warning: Hooks are still in alpha, so only use this for experiments

### About
`react-use-checkbox` is a custom React Hook to use for toggling the state of a Checkbox input.
It was inspired by [hooks.guide](https://www.hooks.guide)

### Install
NOTE: You need to have React 16.7.0-alpha.2 or later installed to use React Hooks (and this package).

```bash
    yarn add @anmolm/react-use-checkbox
```

### Usage

**useCheckbox**: This is a hook that lets you toggle the value of an input of type `checkbox`.
You can pass an initial value of `true` if you wanted the checkbox to be selected, otherwise it defaults to `false`.

```jsx
import React from 'react';
import { useCheckbox } from '@anmolm/react-use-checkbox';

const App = () => {
    const [checked, setChecked] = useCheckbox();
    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={setChecked}
            /> Checkbox
        </>
    );
}
```

### License

MIT