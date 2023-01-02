
let cartBasket = document.querySelector('.cart-content');
let cartId = 0;


let element = document.createElement('div');

let cartBtns = document.querySelectorAll('.add-cart-btn');
cartBtns.forEach((btn) => {
    btn.addEventListener('click',(event)=>{
         addCart(event);
    } );
});

// ()-using ()-will call function right now
let productList = [];

function addCart(event) {
    
    console.log("called");
    console.log("etarget",event.target);
    let watch = event.target.parentElement;
    let title = watch.querySelector('.watch-title').innerHTML;
    let price = watch.querySelector('.watch-price').innerHTML;
    let imgSrc = watch.querySelector('.watch-img').src;
    let priceNum = parseInt(price.replace("price : ", "").replace(",", ""));
    console.log("priceNum",priceNum);   
    let newProductElement = createCartProduct(title, price, imgSrc);

    let product = {
        name: title,
        price: priceNum,
        quantity: 1,
        id:cartId,
        img:imgSrc,
    };
    if (productList.length === 0) {
        productList.push(product);
        console.log("pro", productList);
        element = document.createElement('div');

    cartBasket.append(element);
        createCartProduct(title, price, imgSrc);
        cartId++;
    }

    else {
        productList.forEach((cartProduct, index, productList) => {
            if (cartProduct.name === product.name) {
                console.log("cart",cartProduct);
                console.log("cartPrice",cartProduct.price);
                 cartProduct.price += product.price;
                cartProduct.quantity += product.quantity;
            }
            else {
                productList.push(product);
                element = document.createElement('div');
                 cartBasket.append(element);
                cartId++;
                createCartProduct(title, price, imgSrc);
            }
        });

    }
    element.innerHTML = newProductElement;
    
}


// !create product on clicking add to cart


function createCartProduct(title, price, imgSrc) {
    return `
  <div class="cart-box" id="cartno${cartId}">
    <img src="${imgSrc}" class="cart-img">
    <div class="detail-box">
        <div class="cart-food-title">${title}</div>
        <div class="price-box">
                <div class="cart-price">${price}</div>
                <div id="totalprice${cartId}" class="cart-amt">${price}</div>
                <input name="${title}" type="number" value="1" class="cart-quantity" onchange="changeQuantity(event)"/>
                <ion-icon name="trash" class="cart-remove" onclick="removeProductFromCart(event)"></ion-icon>
        </div>
    </div>
  </div>
  `
}

// .previouslement sibling
// !on Incresing quantity

function changeQuantity(event) {
     console.log("anjd");
     let singleProductPrice=event.target.parentElement.children[0].innerHTML.replace("price : ","").replace(",","");
     let totalPriceOfEachTypeProduct=event.target.parentElement.children[1];
     console.log("ghhg",event.target.parentElement.children[1].innerHTML);
    let quantity = event.target.parentElement.children[2].value;
    totalPriceOfEachTypeProduct.innerHTML =quantity*singleProductPrice;
    console.log(totalPriceOfEachTypeProduct);
}


function removeProductFromCart(event) {
    let remove =event.target.parentElement.parentElement.parentElement;
    console.log(remove);
    remove.style.display="none";
}

function removeCart() {

}

function countCartProduct(title) {

}
// For each -To read
// Map- 
// Find-
// Filter-
// Destructing--
// 

















