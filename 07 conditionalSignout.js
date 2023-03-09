// show user a signout button if he is authenticated
// otherwise show him option login/signup

var authenticated = true;

// if(authenticated) {
//     console.log("Show signout button");
// } else {
//     console.log("show login option");
// }

authenticated ? console.log("Signout button") : console.log("Login Option");;