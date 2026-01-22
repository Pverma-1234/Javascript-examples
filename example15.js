let userRole = "admin";
let isAuthenticated = true;
let userAge = 22;


if(!isAuthenticated){
    console.log("Please log in");
}else if(isAuthenticated && userRole=='admin'){
    console.log("Welcome to the Dashboard");
}else if(isAuthenticated && userRole!='admin'){
    console.log("Access Denied");
}
