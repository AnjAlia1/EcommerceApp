
let cartBasket = document.querySelector('.cart-content');

// / 1.-->1.Addto cart
let cartBtns = document.querySelectorAll('.add-cart-btn');
cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);

});

var productList = [];

function addCart() {
    console.log("called");
    let watch = this.parentElement;
    let title = watch.querySelector('.watch-title').innerHTML;
    let price = watch.querySelector('.watch-price').innerHTML;
    let imgSrc = watch.querySelector('.watch-img').src;
    var priceNum = parseInt(price.replace("price:", "").replace(",", ""));

    let product = {
        name: title,
        price: priceNum,
        quantity: 1
    };
    if (productList.length === 0) {
        productList.push(product);
        console.log("pro", productList);
    }

    else {
        productList.forEach((cartProduct, index, arr) => {
            if (cartProduct.name === product.name) {
                arr[index].price += product.price;
                arr[index].quantity += product.quantity;
                console.log("arr", arr);
            }
            else {
                productList.push(product);
                console.log("arr", arr);

            }
        });
    }

    let newProductElement = createCartProduct(title, price, imgSrc);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;

    cartBasket.append(element);

    function createCartProduct(title, price, imgSrc) {

        return `
      <div class="cart-box">
      <img src="${imgSrc}" class="cart-img">
      <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
          <div class="cart-price">${price}</div>
           <div class="cart-amt">${price}</div>
       </div>
        <input type="number" value="1" class="cart-quantity">
      </div>
      <ion-icon name="trash" class="cart-remove"></ion-icon>
    </div>
      `
    }


}
















//  function to calculate total price of products in cart





