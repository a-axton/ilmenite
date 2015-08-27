var ilmenite = require('ilmenite');

var buttonStyles = {
  wrapper: {
    layout: 'horizontal',
    width: 'size'
  },
  base: {
    width: 'fill',
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

Ti.API.info(JSON.stringify(ilmenite([
  buttonStyles.base,
  buttonStyles.success
])))

describe('it should test', function() {
  it('tests', function() {
    expect((1+1 === 2));
  })
});
