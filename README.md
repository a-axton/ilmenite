## Titanium Ilmenite (WIP)
Titanium style loader with built in conditional statements for platform, form factor, width, height and more. Built to work with [react-titanium][rt] but works with Titanium/Alloy thanks to [titaniumifier][t].

[rt]: https://github.com/yuchi/react-titanium
[t]: https://github.com/smclab/titaniumifier

### Usage
```js
var buttonStyles = {
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
