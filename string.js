document.getElementById("string_btn").addEventListener("click", function () {

    let a = document.getElementById("string_inp").value;
    let b = document.getElementById("string_inp1").value;
    let c = document.getElementById("string_op");

    c.innerHTML = "Length: " + a.length;

    c.innerHTML += "<br>Uppercase: " + a.toUpperCase();

    c.innerHTML += "<br>Lowercase: " + a.toLowerCase();

    c.innerHTML += "<br>Reverse: " + a.split("").reverse().join("");

    c.innerHTML += "<br>Concatenation: " + (a + b);

    let d="pratham";
    let sen=` <br> the name is ${d}`;
    c.innerHTML+=sen;
    
});