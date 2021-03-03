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

// Fetching data fro Products table
function getProducts() {
  fetch("https://sleepy-journey-80556.herokuapp.com/show-products/")
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
      let list = document.getElementById("products");
      console.log(list);
      data.forEach((product) => {
        let item = `
          <div class= "card" >
            <img src=${product.image} />
            <h4>${product.name}</h4>
          </div>
        `;
        console.log(item);
        list.innerHTML += item;
      });
    });
}
getProducts();

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
