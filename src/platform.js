function isTabletFallback() {
	return !(Math.min(
		Ti.Platform.displayCaps.platformHeight,
		Ti.Platform.displayCaps.platformWidth
	) < 700);
}

let isTablet = (function() {
	if (Ti.Platform.name === 'iPhone OS') {
		return Ti.Platform.osname === 'ipad';
	} else if (Ti.Platform.name === 'android') {
		var psc = Ti.Platform.Android.physicalSizeCategory;
		return psc === Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_LARGE ||
		       psc === Ti.Platform.Android.PHYSICAL_SIZE_CATEGORY_XLARGE;
	} else if (Ti.Platform.name === 'mobileweb') {
		return !(Math.min(
			Ti.Platform.displayCaps.platformHeight,
			Ti.Platform.displayCaps.platformWidth
		) < 400);
	} else {
		return isTabletFallback();
	}
})();

let isHandheld = !isTablet;

export default {
  isTablet,
  isHandheld,
  isAndroid: Ti.Platform.name === 'android',
  isIOS: Ti.Platform.name === 'iPhone OS',
  isMobileWeb: Ti.Platform.name === 'mobileweb',
  isIPad: Ti.Platform.osname === 'ipad',
  isIPhone: Ti.Platform.osname === 'iphone',
  version: Ti.Platform.version,
  model: Ti.Platform.model
}
