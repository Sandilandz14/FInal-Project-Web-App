//  FOR NAVBAR
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
};
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
};

// Fetching data from Products table
function getProducts() {
  fetch("https://sleepy-journey-80556.herokuapp.com/show-products/")
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
      let list = document.getElementById("products");
      console.log(list);
      data.forEach((product) => {
        let item = `
          <div class="card" id="container" >
            <div class="product-image">
            <img src=${product.image} />
            </div>

            <div class = "product-info">
            <h4>${product.name}</h4>
            <h4>${product.price}</h4>
            <h5>${product.description}</h5>
            <h5>${product.reviews}</h5>
            <p><button onclick="addToCart(${product.ID})">Add to Cart</button></p>
            <p><a href='details.html'><button>View more details</button></a></p>
            </div>
            
          </div>
        `;
        // console.log(item);
        list.innerHTML += item;
      });
    });
}
getProducts();

// FUNCTION FOR ADD-TO-CART
function addToCart(ID) {
  let modal = document.getElementById("contents");
  let cartItem = productArray.filter((product) => {
    return product.ID == id;
  });
  productCount = cartList.push(cartItem[0]);
  let selectedItems = cartItem[0];

  let cart_stuff = `
<div class="opened-modal-content">
<div id="items${id}"  product-prices=${selectedItems.price}>${selectedItems.name} :R${selectedItems.price}<div> 
<button class="removebutton" onclick="removeItems(${id})">Remove Item</button>
</div>
`;

  modal.innerHTML += cart_stuff;

  console.log(cartList);
  console.log(productCount);
  console.log(cartItem);

  // total price calculation

  function calculateTotalPrice() {
    let totalValue = document.getElementsByClassName("price")[0];
    let num1 = parseInt(totalValue.innerHTML);
    let num2 = document
      .getElementById("items" + id)
      .getAttribute("product-prices");

    let totalAmount = parseInt(num1) + parseInt(num2);
    totalValue.innerHTML = totalAmount;
    console.log(totalValue);
  }
  calculateTotalPrice();

  cartCount();
}

// checkout section
function checkout() {
  let totals = document.getElementsByClassName("price")[0].innerHTML;
  alert(`Thank you for purchasing Your total is R${totals}`);
  let clear = "";
  let x = document.getElementById("contents");
  x.innerHTML = clear;

  let f = productCount - productCount;

  document.getElementById("lblCartCount").innerHTML = f;
  window.location.href = "./home.html";
}
// remove items on checkoutlist

function removeItems(id) {
  let recietTotal = document.getElementsByClassName("price")[0];
  let y = parseInt(recietTotal.innerHTML);
  console.log(y);
  let x = document.getElementById("items" + id).getAttribute("product-prices");
  let total = parseInt(y) - parseInt(x);

  if (total <= -1) {
    alert("something went wrong");
    window.location.reload();
  }

  recietTotal.innerHTML = total;
  console.log(total);
  document.getElementById("items" + id).remove();

  if (total == 0) {
    window.location.href = "./home.html";
  }
}
// MODAL SYSTEM FOR THE CART
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if ((event.target = modal)) {
    modal.style.display = "none";
  }
};
