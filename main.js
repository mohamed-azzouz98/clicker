let cookies = 0;
let buttonClick = document.querySelector("#buttonClick");


buttonClick.addEventListener("click", function coockieClick(num = 1){
    cookies += 1;
    document.getElementById("cookies").innerHTML = cookies;
});

let cursors = 0;
let pointCursors = 0;

let buyCursor = document.querySelector("#buyCursor");
buyCursor.addEventListener("click", () =>{
    let cursorCost = Math.floor(10 * Math.pow(2,cursors));     //works out the cost of this cursor
    if(cookies >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
        pointCursors = pointCursors + 1 ;
    	cookies = cookies - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = cookies;  //updates the number of cookies for the user

    };
    let nextCursorsCost = Math.floor(10 * Math.pow(2,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCursorsCost;  //updates the cursor cost for the user
});

let booster = 0;
let pointBooster = 0;

let buyBooster = document.querySelector("#buyBooster");


buyBooster.addEventListener("click", () => {
    let boosterCost = Math.floor(50 * Math.pow(2,booster));
	if (cookies >= boosterCost) {
		booster = booster + 1;
		pointBooster = pointBooster + 10 ;
		cookies = cookies - boosterCost;
		document.getElementById('booster').innerHTML = booster;  
        document.getElementById('cookies').innerHTML = cookies;  
	};
	let nextBoosterCost = Math.floor(50 * Math.pow(2,booster))
	document.getElementById('boosterCost').innerHTML = nextBoosterCost;
});

window.setInterval(function(){
	
	document.getElementById('cookiesSecond').innerHTML = pointCursors + pointBooster + ' par seconde';
	cookieClick(pointCursors + pointBooster);
	
}, 1000);