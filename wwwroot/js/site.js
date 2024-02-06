// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
let e = document.getElementById("menu");
let openMenuBtn = document.getElementById("open-menu-btn");
let closeMenuBtn = document.getElementById("close-menu-btn");

function openMenu() {
    if (e.style.display = "none"){
        e.style.display = "inline";
        openMenuBtn.style.display = "none";
        closeMenuBtn.style.display = "inline";
    } 
}

function closeMenu() {
    if (e.style.display = "inline"){
        e.style.display = "none";
        openMenuBtn.style.display = "inline";
        closeMenuBtn.style.display = "none";
    }
}

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
