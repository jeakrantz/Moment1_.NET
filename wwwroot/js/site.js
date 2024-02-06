/*     
    Moment 1.1 - Razor
    Kurs: Webbutveckling med .NET
    Utvecklare: Jeanette Krantz
    Datum: 2024-02-06
 */

let e = document.getElementById("menu");
let openMenuBtn = document.getElementById("open-menu-btn");
let closeMenuBtn = document.getElementById("close-menu-btn");

/* Funktion för att öppna menyn */
function openMenu() {
    if (e.style.display = "none"){
        e.style.display = "inline";
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "inline";
    } 
}

/* Funktion för att stänga menyn */
function closeMenu() {
    if (e.style.display = "inline"){
        e.style.display = "none";
        openMenuBtn.style.display = "inline";
        closeMenuBtn.style.display = "none";
    }
}

/* Funktion för att gömma meny-knappar och visa menyn i större skärmar */
function removeBtn(){
    if(window.innerWidth > 768){
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "none";
        e.style.display = "inline"
    } else {
        openMenuBtn.style.display = "inline";
        e.style.display = "none"
    }
}
