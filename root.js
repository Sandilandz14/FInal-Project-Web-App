function addUsers() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-data/", {
    method: "POST",
    body: JSON.stringify({
      name: inputs[0].value,
      email: inputs[1].value,
      addr: inputs[2].value,
      password: inputs[3].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("User has been created");
      document.getElementById("reg-form").reset();
    });
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// PASSWORD
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
