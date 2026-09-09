document.getElementById("string_btn").addEventListener("click", function () {

    let a = document.getElementById("string_inp").value;
    let c = document.getElementById("string_op");
    c.innerHTML += "Length: " + a.length;
});


document.getElementById("string_upper_btn").addEventListener("click", function () {
    let a = document.getElementById("string_inp").value;
    let c = document.getElementById("string_op");
    c.innerHTML = "<br>Uppercase: " + a.toUpperCase();
});


document.getElementById("string_lower_btn").addEventListener("click", function () {
    let a = document.getElementById("string_inp").value;
    let c = document.getElementById("string_op");
    c.innerHTML += "<br>Lowercase: " + a.toLowerCase();
});

document.getElementById("string_reverse_btn").addEventListener("click", function () {
    let a = document.getElementById("string_inp").value;
    let c = document.getElementById("string_op");
    c.innerHTML += "<br>Reverse: " + a.split("").reverse().join("");
});

document.getElementById("string_conc_btn").addEventListener("click", function () {
    let a = document.getElementById("string_inp").value;
    let b = document.getElementById("string_inp1").value;
    let c = document.getElementById("string_op");
    let d=a+" "+b;
    c.innerHTML += "<br>Conconatenate: " + d;
});

document.getElementById("string_new_btn").addEventListener("click", function () {
    let d = document.getElementById("string_inp").value;
let sen = ` <br> the name is ${d}`;
let c = document.getElementById("string_op");
c.innerHTML += sen;
});



let fruit = 'Bhushan\'s'; //it is the example of excape character