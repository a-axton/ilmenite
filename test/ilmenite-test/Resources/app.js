var ilmenite = require('ilmenite');

var buttonStyles = {
  wrapper: {
    layout: 'horizontal',
    width: 'size'
  },
  base: {
    width: 'size',
    height: 40,
    backgroundColor: 'gray',
    '[platform=ios]': {
      style: 'bordered'
    },
    '[formFactor=tablet]': {
      width: 140,
      height: 60
    },
    '[formFactor=handheld height>=500]': {
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

var win = Titanium.UI.createWindow({  
    title: 'Ilmenite',
    backgroundColor: 'red'
});

// Ti.API.info(JSON.stringify(ilmenite([
//   buttonStyles.base,
//   buttonStyles.success
// ])))

// // new view
// var successButton = Ti.UI.createView();

// win.add(successButton);
win.open();

