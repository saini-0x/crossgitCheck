// create an application with following roles: 
// admin -- gets full access
// subadmin -- gets access to create/delete course
// testprep -- gets access to create/delete tests
// user -- gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete course");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume contents");
        break;
    default:
        console.log("Trial user");
        break;
}