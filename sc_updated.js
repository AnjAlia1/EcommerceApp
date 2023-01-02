
let cartBasket = document.querySelector('.cart-content');
var cartId = 0;
// var sum=0;

// / 1.-->1.Addto cart
let cartBtns = document.querySelectorAll('.add-cart-btn');
cartBtns.forEach((btn) => {
    btn.addEventListener('click', addCart);

});

var productList = [];

function addCart() {
    // Updatetotalprice();
    // updatePrice();
    console.log("called");
    let watch = this.parentElement;
    let title = watch.querySelector('.watch-title').innerHTML;
    let price = watch.querySelector('.watch-price').innerHTML;
    let imgSrc = watch.querySelector('.watch-img').src;
    var priceNum = parseInt(price.replace("price : ", "").replace(",", ""));
    console.log("priceNum",priceNum);


    let product = {
        name: title,
        price: priceNum,
        quantity: 1,
        id:cartId,
        img:imgSrc,
        // total:product.priceNum*product.quantity
    };
    if (productList.length === 0) {
        productList.push(product);
        console.log("pro", productList);
        cartId++;
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
                cartId++;

            }
        });

    }

    // productList.map((value) => {
    //     return `<div class="cart-box" id="cartno${value.cartId}"><img src="${value.img}" class="cart-img"> <div class="detail-box"> <div class="cart-food-title">${value.title}</div><div class="price-box"> <div class="cart-price">${value.price}</div><div class="cart-amt">${value.price}</div> </div><input name="${value.title}" type="number" value="1" class="cart-quantity" onchange="changeQuantity(this)"> </div> <ion-icon name="trash" class="cart-remove"></ion-icon> </div> ` 
    //   })

    let element = document.createElement('div');

    cartBasket.append(element);
   
    let newProductElement = createCartProduct(title, price, imgSrc);
    
    // // cartId++;
    element.innerHTML = newProductElement;
    // Updatetotalprice();
    console.log("pname", product.name);

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
   </div>
    <input name="${title}" type="number" value="1" class="cart-quantity" onchange="changeQuantity(this)">
  </div>
  <ion-icon name="trash" class="cart-remove"></ion-icon>
</div>
  `
}


function changeQuantity(product) {
    console.log("changed");
    productList.forEach((value,index,arr)=>{
        if(product.name===value.name){
           arr[index].quantity=product.value;
            console.log(arr[index]);
            document.getElementById(`totalprice${cartId}`).innerHTML=arr[index].price*arr[index].quantity;
        }
    })
    
    console.log("productlist",productList);

    
}
// For each -To read
// Map- 
// Find-
// Filter-
// Destructing--
// 

// var tishal = "";
// function updatePrice() {
//     let carAmount = document.querySelector('.cart-amt');
//     let carPrice = document.querySelectorAll('.cart-price');
//     for (cp of carPrice) {
//         console.log("carp", cp);
//     }
//     // carAmount.innerHTML=quantityvalue   ;

// }
















