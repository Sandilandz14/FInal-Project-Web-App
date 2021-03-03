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

fetch("https://sleepy-journey-80556.herokuapp.com/show-records/")
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

  if (loggedIn > 0) {
    alert("User logged in");
    window.location.href = "./index.html";
  } else {
    alert("Credentials invalid");
  }
}
