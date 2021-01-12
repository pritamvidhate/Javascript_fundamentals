var listingPrice = 799;
var sellingPrice = 199;

disountPercent = (((listingPrice - sellingPrice) / listingPrice) * 100)

console.log(disountPercent);

displayDiscountPercent = Math.round(disountPercent);
console.log(displayDiscountPercent + " % off");
