let loginUser = document.getElementById("loginUser");
let loginpass = document.getElementById("loginpass");
let loginBtn = document.getElementById("loginBtn");

function check() {
  let checkUser = localStorage.getItem("username");
  let checkPass = localStorage.getItem("password");

  console.log(checkUser);
  console.log(checkPass);

  if (loginUser.value == checkUser && loginpass.value == checkPass) {
    alert(`welcome ${loginUser.value}`);
  } else {
    alert("plase signup");
  }
}
