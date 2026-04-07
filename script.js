function login() {
let u = document.getElementById("username").value;
let p = document.getElementById("password").value;

if(u === "admin" && p === "1234") {
window.location.href = "dashboard.html";
} else {
alert("Invalid Login");
}
}