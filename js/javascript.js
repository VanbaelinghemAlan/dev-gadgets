//BUCKET CHALLENGE

const addCart = document.getElementById("add-cta");
const cartNb = document.getElementById("cart-nb");
const addQty = document.getElementById("add-qty");

addCart.addEventListener("click", function(event){
    cartNb.innerHTML  = addQty.value
    if (cartNb.innerHTML >= 100)
    cartNb.innerHTML = "99+"
    addCart.innerHTML = "Déjà au panier"
    document.getElementById("add-cta").removeEventListener("click",event);
});

//DUCK MAIN

const img = ["img/canard-jaune-1-l.png", "img/canard-jaune-2-l.png", "img/canard-jaune-3-l.png", "img/canard-jaune-4-l.png", "img/canard-jaune-5-l.png"]
const imgMain = document.getElementById("imgMain");
console.log(img[1]);

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const thumbs = document.querySelectorAll(".thumbs-itm")

let i = 0;

nextBtn.addEventListener("click", function (event) {
    img[i++];
    if (img[i] === undefined) 
    i = 0
    console.log(img[i]);
    imgMain.setAttribute("src",img[i])
})
console.log(img[i++]);

prevBtn.addEventListener("click", function (event) {
    img[i--];
    if (img[i] === undefined ||img[-1])
    i = 5
    console.log(img[i]);
    imgMain.setAttribute("src",img[i]) //petit soucis, arrivé au niveau 0, plein d'essai, mais ça veut pas
})

//biggerImagePartFail

// const thumbsPic = document.querySelectorAll(".thumbs-img")
// thumbsPic.addEventListener("mouseover", () => {
//     thumbsPic.classList.style.backgroundColor = "red";

// onmouseover = imgMain.setAttribute("src",img[i])
// })

// })

//ACCORDEONTIME
const accordeon = document.getElementById("product-advantages")
const productAd = document.getElementById("product-advantages")
const productCar = document.getElementById("product-car")

document.getElementById("accordeon").addEventListener("click", function (){
    productAd.classList.toggle("active")
})

document.getElementById("accordeon2").addEventListener("click", function (){
    productCar.classList.toggle("active")
})


//TryingLocalStorage

// const active = ""

// localStorage.setItem(active, "active")
// console.log(localStorage.setItem("accordeon", "active"));

// function activeOrNot() {
//     if (productCar.classList.toggle("active"))
//     localStorage.setItem(active, "active")
//         else (productCar.classList.toggle(""))
//         localStorage.setItem(active, "none")
// }

//The finalTest//tomuchtodoandnotime