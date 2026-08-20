function oper(event) {
    event.preventDefault();
    let a = 45;
    let b = 6;
    let c = a + b; let d = a - b; let e = a / b; let f = a * b; let g = a ** b; let h = a % b;
    document.getElementById("oper").innerHTML =
        "<h1> OPERATOR </h1> The value of  A is " + a +
        "<br> The value of B is " + b +
        "<br> The value of a+b is " + c +
        "<br> The value of a-b is " + d +
        "<br> The value of a/b is " + e +
        "<br> The value of a*b is " + f +
        "<br> The value of a**b is " + g +
        "<br> The value of a%b is " + h +
        "<br> The value of ++a is :" + (++a) +
        "<br> The value of a++ is " + (a++) +
        "<br> The final value of a is " + (a) +
        "<br> The value of --a is " + (--a) +
        "<br> The value of a-- is " + (a--) +
        "<br> The final value of a is " + (a);
}

function ari(event) {
    event.preventDefault();
    let a = 34, b = 2;
    document.getElementById("ari").innerHTML =
        "<h1> ASSIGNMENT OPERATOR </h1> The value of  A is " + a +
        "<br> The value of B is " + b +
        "<br> a+=b =>   36 <br> a-=b =>   32   <br> a*=b =>   68 <br> a**=b =>   1156 <br> a%=b =>   0 <br> a/=b =>   17";
}

function comp(event) {
    event.preventDefault();
    let a = 6, b = 7, c = 7, d = "7";
    document.getElementById("comp").innerHTML =
        "<h1>Comparison Operator</h1>  The value of  A is " + a +
        "<br> The value of B is " + b +
        "<br> The value of C is " + c +
        "<br> The value of D is " + d +
        " => it is a string <br>The value of a == b is " + (a == b) +
        " <br>The value of a != b is " + (a != b) +
        " <br>The value of b === c is " + (b === c) +
        " => this check the datatype and value <br>The value of b !== c is " + (b !== c) +
        " <br>The value of c === d is " + (c === d) +
        " => this check the datatype and value ";
}

function log(event) {
    event.preventDefault();
    let a = 5, b = 6, c = 7, d = "7";
    document.getElementById("log").innerHTML =
        "<h1>Logical  Operator</h1>  The value of  A is " + a +
        "<br> The value of B is " + b + "<br> The value of C is " + c +
        "<br> The value of D is " + d +
        "<br>The value of (a < b && a == 5) is " + (a < b && a == 5) +
        "<br>The value of (a < b || a == 5) is " + (a < b || a == 5);
}


oper(new Event("submit"));
ari(new Event("submit"));
comp(new Event("submit"));
log(new Event("submit"));