// function showingMenu(Menu){
    
// }
let menu = document.querySelector("header nav ul li .fa-bars");
let end = document.querySelector(".secondheader .parts .part1 .bx-x");
menu.addEventListener("click", function() {
    let parts = document.querySelector(".secondheader");
    parts.style.right = "0%";
});
end.addEventListener("click", function() {
    let parts = document.querySelector(".secondheader");
    parts.style.right = "100%";
});
