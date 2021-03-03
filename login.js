// const loginText = document.querySelector(".title-text .login");
// const loginForm = document.querySelector("form.login");
// const loginBtn = document.querySelector("label.login");
// const signupBtn = document.querySelector("label.signup");
// const signupLink = document.querySelector("form .signup-link a");
// signupBtn.onclick = () => {
//   loginForm.style.marginLeft = "-50%";
//   loginText.style.marginLeft = "-50%";
// };
// loginBtn.onclick = () => {
//   loginForm.style.marginLeft = "0%";
//   loginText.style.marginLeft = "0%";
// };
// signupLink.onclick = () => {
//   signupBtn.click();
//   return false;
// };

let users;

fetch("http://127.0.0.1:5000/show-records/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function login() {
  let inputs = document.getElementsByTagName("input");

  let username = inputs[0].value;
  let password = inputs[1].value;

  let loggedIn = users.filter((user) => {
    return user.username == username && user.password == password
      ? true
      : false;
  });

  if (loggedIn.length > 0) {
    alert("User logged in");
    window.location.href = "./index.html";
  } else {
    alert("Credentials invalid");
  }
}

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
