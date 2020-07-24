var cart = document.getElementById('cart');

var carts = document.querySelectorAll('.addToCart');

for ( var i=0; i< carts.length ; i++){
    carts[i].addEventListener("click", (event)=>{
        cartNumbers();
        /**get item content */
        /**img src */
        const item={};
        let fullimgsrc =event.target.parentElement.previousElementSibling.children[0].src;
        let pos =fullimgsrc.indexOf('i');
        let imgsrc=fullimgsrc.slice(pos);
        /**name of product */
        let name= event.target.parentElement.children[0].textContent;
        /**price of product */
        let price= event.target.previousElementSibling.textContent;
        price = price.slice(4);
        item.img=imgsrc;
        item.name=name;
        item.price=price;
        /*put item information in a div */
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item',
        'd-flex',
        'justify-content-between',
        'text-capitalize',
        'my-3','mr-3');
        cartItem.innerHTML=`
            <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">
                <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
                <span>EGP</span>
                <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <div class="quantity">
                <p id="cart-item-quantity" class="font-weight-bold mb-0">Quantity</p>
                <input value='1'>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
                <i class="fas fa-trash"></i>
            </a>`;
        
        var totalPrice = document.querySelector('.cart-total-container');
        cart.insertBefore(cartItem,totalPrice);//insert item in the cart
        showTotalPrice();//update the total price
    })   
}

/** count & show total price**/ 
function showTotalPrice(){
    const prices=[];
    const items=document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
       // console.log(item.textContent)
        prices.push(parseInt(item.textContent));
    });
    //console.log(prices);
    const total = prices.reduce(function(prices,item){
        prices+=item;
        return prices
    },0);
    //console.log(total);
    document.getElementById('cart-total').textContent = total;

}

/** number of items added to the cart**/ 
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers' , productNumbers + 1);
        document.querySelector("span.cart-icon").textContent = productNumbers + 1;

    }else{
        localStorage.setItem('cartNumbers' ,  1);
        document.querySelector("span.cart-icon").textContent = 1;
        
    }
}

/**************/ 
/* open cart */
var open_cart = document.getElementById('open-cart');
open_cart.addEventListener('click',openCart);
function openCart(){
    document.getElementById('cart').style.display="block";

}

/* close cart */
function closeCart(){
    document.getElementById('cart').style.display="none";

}



