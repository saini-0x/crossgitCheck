var num1 =7;
var num2 = 6;

console.log(num1*num2);

var answer = num1 < num2;
console.log(answer);

// a + b *c / d * e  never do that --> use parenthesis
// discount
// D = (ListPrice -SellingPrice)/ListPrice * 100;

var SellingPrice = 199;
var ListPrice = 799;

var discountPercent = (ListPrice-SellingPrice)/ListPrice * 100;

console.log("Discount percentage : ", + discountPercent);

roundDiscountPercentage = Math.round(discountPercent)
console.log(roundDiscountPercentage + "% off");