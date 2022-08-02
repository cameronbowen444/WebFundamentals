
for(var x = 1; x <= 20; x++) {
    if(x % 2 == 0) {
        console.log(x);
    }
}

for(var i = 100; i >= 0; i--) {
    if(i % 3 == 0) {
        console.log(i);
    }
}

for(var y = 4; y >= -4; y-=1.5) {
    console.log(y);
}

var a = 1;
var sum = 0;

while(a <= 100) {
    console.log(a);
    sum = sum + a;
    a++;
    console.log(sum);
}

var b = 1;
var sum1 = 1;

while(b <= 12) {
    console.log(b);
    sum1 = sum1 * b;
    b++;
    console.log(sum1);
}