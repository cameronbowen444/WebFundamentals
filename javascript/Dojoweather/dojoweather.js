var popUp = document.querySelector("#cookies");

function hide() {
    popUp.remove();
}

var tempF = [
    document.querySelector(".first1"),
    document.querySelector(".first2"),
    document.querySelector(".first3"),
    document.querySelector(".first4")
];
var tempC = [
    document.querySelector(".last1"),
    document.querySelector(".last2"),
    document.querySelector(".last3"),
    document.querySelector(".last4")
];

var element = tempF;


function tempList(element) {
    element.value.remove();
}
