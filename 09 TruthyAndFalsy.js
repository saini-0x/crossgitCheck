// undefined
// null
// 0
// '' / ""
// NaN
//   all these values are falsy value

var user;         // undefined

var logged = "";

if (logged) {
    console.log("Condition is true");
}


// coercion
console.log(2+2);
console.log(2 + "2");
console.log("2" + 2);

var num = "2";

if (2 === num) {
    console.log("Run the condition");
}