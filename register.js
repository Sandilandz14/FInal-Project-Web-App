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
      alert("You have been succesfully registered");
      window.location.href = "./loginform.html";
      document.getElementById("reg-form").reset();
    });
}
