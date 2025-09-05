// JavaScript for adding products to the cart (optional feature)
let cart = [];
// Adding event listeners for each "Add to Cart" button

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    const productName =
      this.previousElementSibling.previousElementSibling.innerText;
    cart.push(productName);
    alert(productName + " has been added to the cart!");
    console.log(cart);
  });
});
