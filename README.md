## Titanium Ilmenite (WIP)
Titanium style loader with built in conditional statements for platform, form factor, width, height and more. Built to work with [react-titanium][rt] but works with Titanium/Alloy thanks to [titaniumifier][t]. This is still a WIP and as such the API is subject to change.

[rt]: https://github.com/yuchi/react-titanium
[t]: https://github.com/smclab/titaniumifier
### Installation
Currently this only works as a commonjs package, I haven't tested the Titanium module yet.
```bash
npm install ilmenite --save
```

### Usage - Titianium/Alloy
```js
var buttonStyles = {
  wrapper: {
    layout: 'horizontal',
    width: Ti.UI.SIZE
  },
  base: {
    width: 100,
    height: 40,
    backgroundColor: 'gray',
    '[platform=ios]': {
      // ios specific styles
      style: Ti.UI.iPhone.SystemButtonStyle.BORDERED
    },
    '[formFactor=tablet]': {
      // tablet specific styles
      width: 140,
      height: 60
    },
    '[formFactor=handheld height>=500]': {
      // taller phones
      height: 50
    }
  },
  success: {
    backgroundColor: 'green'
  },
  fail: {
    backgroundColor: 'red'
  }
}

// new view
var successButton = Ti.UI.createView(ilmenite([
  buttonStyles.base,
  buttonStyles.success
]));

// existing view
successButton.applyProperties(ilmenite([
  buttonStyles.base,
  buttonStyles.success
]));
```
### Usage - react-titanium
```js
import React, { Component } from 'react';
import { render } from 'react-titanium';
import ilmenite from 'ilmenite';
import styles from './styles';

export default class IlmeniteExample extends Component {
  render() {
    return (
      <view 
        {...ilmenite(styles.wrapper)} 
        backgroundColor='blue' 
      >
        <button {...ilmenite([styles.base, styles.success])} />
      </view>
    );
  }
}
```
