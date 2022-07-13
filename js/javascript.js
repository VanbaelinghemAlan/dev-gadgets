const addCart = document.getElementById("add-cta");
const cartNb = document.getElementById("cart-nb");
const addQty = document.getElementById("add-qty");

// value='"+ (giftValue) + "'

// modalContent.innerHTML



addCart.addEventListener("click", function(event){
    cartNb.innerHTML  = addQty.value
    if (cartNb.innerHTML >= 100)
    cartNb.innerHTML = "99+"
    addCart.innerHTML = "Déjà au panier"
    document.getElementById("add-cta").removeEventListener("click",addCart);
});

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
    if (img[i] === undefined || 0)
    i = 5
    console.log(img[i]);
    imgMain.setAttribute("src",img[i]) //petit soucis, arrivé au niveau 0
})
