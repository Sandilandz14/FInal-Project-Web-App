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
            <p><button>Add to Cart</button></p>
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
