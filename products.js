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
            <p><button onclick="addToCart($product.ID)">Add to Cart</button></p>
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
