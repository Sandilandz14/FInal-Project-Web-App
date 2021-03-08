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
        // console.log(item);
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
