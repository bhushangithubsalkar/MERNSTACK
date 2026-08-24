document.getElementById("string_btn").addEventListener("click", function () {
    let a = document.getElementById("string_inp").value;
    let b = document.getElementById("string_op");

    b.innerHTML = "Length: " + a.length;

    b.innerHTML += "<br>Uppercase: " + a.toUpperCase();

    b.innerHTML += "<br>Lowercase: " + a.toLowerCase();

    b.innerHTML += "<br>Reverse: " + a.split("").reverse().join("");

});