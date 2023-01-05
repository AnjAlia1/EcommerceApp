
let cartBasket = document.querySelector('.cart-content');
let cartId = 0;
let sum = 0;

let itemElement = document.createElement('div');

let cartBtns = document.querySelectorAll('.add-cart-btn');
cartBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        addCart(event);
        updateTotal();
        // showCart();
    });
});

// ()-using ()-will call function right now
let productList = [];

function addCart(event) {
    let watch = event.target.parentElement;
    let title = watch.querySelector('.watch-title').innerHTML;
    let price = watch.querySelector('.watch-price').innerHTML;
    let imgSrc = watch.querySelector('.watch-img').src;
    let priceNum = parseInt(price.replace("price : ", "").replace(",", ""));
    let newProductElement = createCartProduct(title, price, imgSrc);

    let product = {
        name: title,
        price: priceNum,
        quantity: 1,
        id: cartId,
        img: imgSrc,
    };


    const addedProduct = productList.find(element => element.name === product.name);

    if (addedProduct !== undefined) {
        addedProduct.price += product.price;
        addedProduct.quantity += product.quantity;
        const quantity = document.getElementById(`cartTitle-${addedProduct.name}`);
        quantity.innerHTML=quantity.value++;
        document.getElementById(`totalprice${addedProduct.id}`).innerHTML= quantity.value * product.price;  
    }
    else {
        productList.push(product);
        itemElement = document.createElement('div');
        cartBasket.append(itemElement);
        itemElement.innerHTML = newProductElement;
        createCartProduct(title, price, imgSrc);
        cartId++;
    }
}


// !create product on clicking add to cart

function createCartProduct(title, price, imgSrc) {
    return `
  <div class="cart-box" id="cartNo-${cartId}">
    <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
                <div class="cart-price">${price}</div>
                <div id="totalprice${cartId}" class="cart-amt">${price}</div>
                <input name="${title}" id="cartTitle-${title}" type="number" value="1" class="cart-quantity" onchange="changeQuantity(event)"/>
                <ion-icon name="trash" class="cart-remove" onclick="removeProductFromCart(event)"></ion-icon>
        </div>
    </div>
  </div>
  `
}

// !on Incresing quantity;

function changeQuantity(event) {
    let singleProductPrice = event.target.parentElement.children[0].innerHTML.replace("price : ", "").replace(",", "");
    let totalPriceOfEachTypeProduct = event.target.parentElement.children[1];
    let quantity = event.target.parentElement.children[2].value;
    totalPriceOfEachTypeProduct.innerHTML = quantity * singleProductPrice; 
    let s=parseInt(totalPriceOfEachTypeProduct.innerHTML) ;
    console.log("type of totalPriceOfEachTypeProduct.innerHTML ", typeof s);
    // sum+=s;
    console.log("sum",totalPriceOfEachTypeProduct);
    updateTotal();
    // console.log
}



function updateTotal()
{
    let totalPrice = 0;
    productList.forEach(item=>{
    totalPrice+=item.price;
   
  })
  document.getElementById('total-price').innerHTML=totalPrice;
}



function removeProductFromCart(event) {
    let remove = event.target.parentElement.parentElement.parentElement;
    console.log(remove);
    remove.style.display = "none";
}

function removeCart(event) {
    const cartContainer = document.getElementById('cart-items');
    // console.log("ccchil",cartContainer.children);
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
    cartId = 0;
    productList = [];
}

















