let users = [];

fetch("https://sleepy-journey-80556.herokuapp.com/show-records/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function login() {
  // const form = document.getElementById("login");
  let inputs = document.getElementsByTagName("input");

  let eml = inputs[0].value;
  let pswrd = inputs[1].value;
  console.log(eml);
  console.log(pswrd);
  let loggedIn = users.filter((user) => {
    return user.email == eml && user.password == pswrd;
  });

  console.log(loggedIn);

  if (loggedIn.length > 0) {
    alert("You are now logged in");
    window.location.href = "home.html";
    console.log(window.location.href);
  } else {
    alert("Credentials invalid");
  }
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
