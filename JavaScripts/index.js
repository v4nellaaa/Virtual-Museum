const navButton = document.getElementById("navButton");
const navPage = document.getElementById("navPage");

//uh

navButton.addEventListener("mouseover", function(event) {
    navPage.style.marginRight = "0px";
    navPage.style.transition = "0.3s";
})

navButton.addEventListener("mouseout", function(event) {
    navPage.style.marginRight = "-250px";
    navPage.style.transition = "0.3s";
})

navPage.addEventListener("mouseover", function(event) {
    navPage.style.marginRight = "0px";
    navPage.style.transition = "0.3s";
})

navPage.addEventListener("mouseout", function(event) {
    navPage.style.marginRight = "-250px";
    navPage.style.transition = "0.3s";
})