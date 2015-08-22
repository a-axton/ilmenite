## ilmenite (WIP)
Titanium style loader with conditional statements

### Usage
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
