
//defining our global variables 
var cookie = document.querySelector("#warning");
var img = document.querySelector(".background-img");

//this funciton was to get rid of the cookies and data when accepted
function hide() {
    cookie.remove();
}
//this funciton was to alert the customer that there cart was empty
function showCart() {
    alert('Your cart is empty!')
}
//the functions below explain the hover feature when holding the mouse over the image in the center
function over() {
    img.src = "succulents-2.jpg";
}

function out() {
    img.src = "succulents-1.jpg";
}