// Selectores

const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('.submit');
const contenedorPrincipal = document.querySelector('.contenedor')

// Events
btn.addEventListener('click', priceWithDiscount);

// Functions

const parrafo = document.createElement('p');
const contenedorParrafo = document.createElement('div');
contenedorParrafo.appendChild(parrafo);
contenedorPrincipal.appendChild(contenedorParrafo);

function priceWithDiscount (){
    if (inputDiscount.value > 100 || inputDiscount.value < 0){
        parrafo.innerText = "Descuento fuera de rango, ingrese otro descuento"
    } else if (inputPrice.value == 0 || inputPrice.value == ""){
        parrafo.innerText = "Ingrese el precio de algún producto"
    }else{
        const finalPrice = inputPrice.value * (1 - inputDiscount.value/100)

        parrafo.innerText = 'Precio final del producto: $' + finalPrice; 
    }
    
}

// Descuento aplicado por cupones

const inputProductPrice = document.querySelector('#priceProduct');
const inputCouponProduct = document.querySelector('#couponProduct');
const btnPriceFinal = document.querySelector('.submitCoupon')
const principalContainer = document.querySelector('.couponsDiscountContainer')

//AddEvents

btnPriceFinal.addEventListener('click', priceWithCoupon);

// Create elements

const newP = document.createElement('p');
const newDiv = document.createElement('div');

newDiv.appendChild(newP);
principalContainer.appendChild(newDiv);

const coupons = {
    'Ver2023': 20,
    'Oto2023': 15,
    'BlackFriday': 30,
}

// Functions

function priceWithCoupon (){
    if (inputProductPrice.value == 0){
        return newP.innerText = 'Ingrese el valor del producto'
    };

    let discount;
    if (coupons[inputCouponProduct.value]){
        discount = coupons[inputCouponProduct.value]
    } else {
        return newP.innerText = 'Cupón invalido, precio final:$' + inputProductPrice.value
    }

    const finalPrice = inputProductPrice.value * (1 - discount/100)

    newP.innerText = 'Precio final del producto: $' + finalPrice.toFixed(2)

    // if (inputProductPrice.value == 0 || inputProductPrice.value < 0 || inputProductPrice.value == ""){
    //     newP.innerText = 'Ingresa el precio del producto'
    // } else if(inputCouponProduct.value == "") {
    //     newP.innerText = 'Precio final del producto: $' + inputProductPrice.value;
    // } else{
    //     if (inputCouponProduct.value != null){
    //         for (let i of Object.keys(coupons)){
    //             if (i == inputCouponProduct.value){
    //                 const finalPriceCoupon = inputProductPrice.value * (1 - coupons[i]/100)
    //                 return newP.innerText = 'Precio final del producto: $' + finalPriceCoupon
    //             } 
    //         }
    //         return newP.innerText = 'Cupón incorrecto'
    //     }
    // }
}


// Descuento aplicado por cupones con método find y filter

// Selectores

const inputPrice2 = document.querySelector('#priceProduct2');
const inputCoupon2 = document.querySelector('#couponProduct2');
const btcCalcular2 = document.querySelector('.submitCoupon2');
const principalContainer2 = document.querySelector('.couponsDiscountContainer2');

// Add Events

btcCalcular2.addEventListener('click', priceFinal2);

// Create Elements

const newP2 = document.createElement('p');
const newDiv2 = document.createElement('div');

newDiv2.appendChild(newP2);
principalContainer2.appendChild(newDiv2);

// Coupons object

const coupons2 = {
    'Ver2023': 20,
    'Oto2023': 15,
    'BlackFriday': 30,
}

// Function

// Utilizando el método find

function priceFinal2 (){
    const keysCoupons = Object.keys(coupons2);
    console.log(keysCoupons)

    function isCouponInCoupons (coupon){
        return coupon == inputCoupon2.value
    }
    
    const myCoupons = keysCoupons.find(isCouponInCoupons);
    console.log(myCoupons)

    if (!inputPrice2.value){
        return newP2.innerText = 'Ingresa el precio del producto'
    }

    if (myCoupons){
        discount2 = coupons2[myCoupons]
        return newP2.innerText = 'Precio final del producto: $' + inputPrice2.value * (1 - discount2/100)
    } else {
        return newP2.innerText = 'Cupón invalido, precio final: $' + inputPrice2.value
    }
}

// Utilizando el método filter

// function priceFinal2 (){
//     const keyDiscounts = Object.keys(coupons2)
//     console.log(keyDiscounts)

//     function isCouponInCoupons (coupon) {
//         return coupon == inputCoupon2.value
//     };

//     const myCopupons = keyDiscounts.filter(isCouponInCoupons);
//     console.log(myCopupons)

//     if(!inputPrice2.value){
//         return newP2.innerText = 'Ingresar el valor del producto'
//     }

//     if (myCopupons.length > 0){
//         const discount2 = coupons2[myCopupons[0]]
//         newP2.innerText = 'Valor final del producto: $' + inputPrice2.value * (1 - discount2/100)
//     } else{
//         return newP2.innerText = 'Cupón invalido, valor final: $' + inputPrice2.value
//     }
// }

// Descuento aplicado por cupones con método find y filter y utilizando una lista de objetos para los cupones

//-----Selectores

const inputPrice3 = document.querySelector('#priceProduct3');
const inputCoupon3 = document.querySelector('#couponProduct3');
const btn3 = document.querySelector('.submitCoupon3');
const couponsDiscountContainer3 = document.querySelector('.couponsDiscountContainer3');

//-----Add Events
btn3.addEventListener('click', priceFinal3);

//-----Crear contenido HTML
const newP3 = document.createElement('p');
const newDiv3 = document.createElement('div');

newDiv3.appendChild(newP3);
couponsDiscountContainer3.appendChild(newDiv3);

//-----Function

const allCoupons = [];

allCoupons.push({
    name:'Ver2023',
    discount: 15,
});
allCoupons.push({
    name:'Oto2023',
    discount: 20,
});
allCoupons.push({
    name:'BlackFriday',
    discount: 30,
});

console.log(allCoupons)

function priceFinal3 (){

    function isCouponInCoupons (coupon){
        return coupon.name == inputCoupon3.value;
    };
    const myCoupons= allCoupons.filter(isCouponInCoupons)

    if(!inputPrice3.value || inputPrice3.value ==0){
        return newP3.innerText = 'Favor ingresar el precio del articulo'
    }
    if(myCoupons.length > 0){
        const discount3 = myCoupons[0].discount;
        const priceFinal3 = inputPrice3.value * (1 - discount3/100);
        return newP3.innerText = 'Precio final del producto: $' + priceFinal3;
    } else{
        newP3.innerText = 'Cupón invalido, precio final: $' + inputPrice3.value
    }
}   
