let luffy = 10000;


let buttonClick = document.querySelector("#buttonClick");

let number = 1;


document.getElementById("luffyPerClick").innerText = parseInt(number) + ' luffy par clique';


buttonClick.addEventListener("click", function cookieClick() {
    luffy += number;
    document.getElementById("luffy").innerText = parseInt(luffy);
   
});



let booster = 0;
let pointBooster = 0;

let boosterCost = 10;
let buyBooster = document.querySelector("#buyBooster");


buyBooster.addEventListener("click", () => {

    if (luffy >= boosterCost) {
        booster += 1;
        pointBooster += 0.1;
        luffy -= boosterCost;
        document.getElementById('booster').innerText = booster;
        document.getElementById('luffy').innerText = parseInt(luffy);
        boosterCost += 3
        document.getElementById('boosterCost').innerText = Math.floor(boosterCost);
    };



});



let luffyKidCost = 100;
let luffyKidBooster = 0;
let luffyKidPoint = 0;

let buyLuffyKid = document.querySelector("#buttonLuffyKid");
let imgShopLuffyKid = document.querySelector("#shopLuffyKid img")





buyLuffyKid.addEventListener("click", () => {

    if (luffy >= luffyKidCost && luffyKidBooster < 10) {
        luffyKidBooster += 1;
        luffyKidPoint += 10;
        luffy -= luffyKidCost;
        luffyKidCost += 200;
        document.getElementById('luffyKidCost').innerText = Math.floor(luffyKidCost);
        
        let divLuffyKid = document.querySelector("#middleContainer div:nth-child(1)")
        divLuffyKid.style.visibility = "visible"
        let imgLuffyKid = document.createElement("img")
        imgLuffyKid.src = "img/luffyKid.png"
        
        divLuffyKid.appendChild(imgLuffyKid)
        if (luffyKidBooster == 10) {
            document.querySelector("#shopLuffyKid").style.display = "none"
        }
    }

});

let luffyBeginCost = 500;
let luffyBeginBooster = 0;
let luffyBeginPoint = 0;

let buyLuffyBegin = document.querySelector("#buttonLuffyBegin");
let imgShopLuffyBegin = document.querySelector("#shopLuffyBegin img")


buyLuffyBegin.addEventListener("click", () => {

    if (luffy >= luffyBeginCost && luffyBeginBooster < 10) {
        luffyBeginBooster += 1;
        luffyBeginPoint += 50;
        luffy -= luffyBeginCost;
        luffyBeginCost *= 2;
        document.getElementById('luffyBeginCost').innerText = Math.floor(luffyBeginCost);
        
        let divLuffyBegin = document.querySelector("#middleContainer div:nth-child(2)")
        divLuffyBegin.style.visibility = "visible"
        let imgLuffyBegin = document.createElement("img")
        imgLuffyBegin.src = "img/luffy.png"
        
        divLuffyBegin.appendChild(imgLuffyBegin)
        if (luffyBeginBooster == 10) {
            document.querySelector("#shopLuffyBegin").style.display = "none"
        }
    }

});




window.setInterval(function () {

    //Calcul et Affichage du score total
    let total = parseFloat(pointBooster + luffyKidPoint + luffyBeginPoint).toFixed(1);
    document.getElementById('luffySecond').innerText =  total + ' luffy par seconde';

    luffy = luffy + pointBooster + luffyKidPoint + luffyBeginPoint
    document.getElementById("luffy").innerText = parseInt(luffy);
   

    // Affichage des div avec l'image caché
    if (Math.abs(luffy - luffyKidCost) >= 100) {
        let divLuffyKidShop = document.querySelector("#shopForm div:nth-child(1)").style.visibility = "visible";
    }
    if (Math.abs(luffy - luffyBeginCost) >= 100){
        let divLuffyBeginShop = document.querySelector("#shopForm div:nth-child(2)").style.visibility = "visible";
    }

    // Affichage des img
    if (luffy >= luffyKidCost || luffyKidBooster != 0){
        imgShopLuffyKid.style.filter = "brightness(100%)"
    } else{
        imgShopLuffyKid.style.filter = "brightness(0%)"
    }

    if (luffy >= luffyBeginCost || luffyBeginBooster != 0){
        imgShopLuffyBegin.style.filter = "brightness(100%)"
    } else{
        imgShopLuffyBegin.style.filter = "brightness(0%)"
    }
}, 1000);






