let luffy = 0;
let buttonClick = document.querySelector("#buttonClick");
number = 1;
document.getElementById("luffyPerClick").innerHTML = number + ' luffy par clique';


buttonClick.addEventListener("click", function cookieClick(){
    luffy += number;
    document.getElementById("luffy").innerHTML = luffy;
});

let cursors = 0;
let pointCursors = 0;

let buyCursor = document.querySelector("#buyCursor");
buyCursor.addEventListener("click", () =>{
    let cursorCost = Math.floor(10 * Math.pow(2,cursors));     //works out the cost of this cursor
    if(luffy >= cursorCost){                                   //checks that the player can afford the cursor
        cursors += 1;                                   //increases number of cursors
        pointCursors += 1 ;
    	luffy = luffy - cursorCost;                          //removes the luffy spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('luffy').innerHTML = luffy;  //updates the number of luffy for the user
        number += 1;
        

    };
    let nextCursorsCost = Math.floor(10 * Math.pow(2,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCursorsCost;  //updates the cursor cost for the user


});

let booster = 0;
let pointBooster = 0;

let buyBooster = document.querySelector("#buyBooster");

buyBooster.addEventListener("click", () => {
    let boosterCost = Math.floor(50 * Math.pow(2,booster));
	if (luffy >= boosterCost) {
		booster = booster + 1;
		pointBooster = pointBooster + 10 ;
		luffy = luffy - boosterCost;
		document.getElementById('booster').innerHTML = booster;  
        document.getElementById('luffy').innerHTML = luffy;  
	};
	let nextBoosterCost = Math.floor(50 * Math.pow(2,booster))
	document.getElementById('boosterCost').innerHTML = nextBoosterCost;

    
});

window.setInterval(function(){
	
    document.getElementById('luffySecond').innerHTML =  pointBooster + ' luffy par seconde';
    luffy += pointBooster;
    document.getElementById("luffy").innerHTML = luffy;
    
}, 1000);





