var count = 0;
var countnum = 0;
var countnumber = 0;
var countLike = document.querySelector("#like1");
var countLike2 = document.querySelector("#like2");
var countLike3 = document.querySelector("#like3");

console.log(like1);
console.log(like2);
console.log(like3);

function add1() {
    count++;
    countLike.innerText = count + " like(s)";
    console.log(count);
}

function add2() {
    countnum++;
    countLike2.innerText = countnum + " like(s)";
    console.log(countnum);
}

function add3() {
    countnumber++;
    countLike3.innerText = countnumber + " like(s)";
    console.log(countnumber);
}
