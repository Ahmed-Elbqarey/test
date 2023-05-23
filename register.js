let registerUser = document.getElementById("registerUser");
let registerpass = document.getElementById("registerpass");
let registerBtn = document.getElementById("registerBtn");

function register() {
  localStorage.setItem("username", registerUser.value);
  localStorage.setItem("password", registerpass.value);
  console.log(registerUser.value);
  console.log(registerpass.value);
}
