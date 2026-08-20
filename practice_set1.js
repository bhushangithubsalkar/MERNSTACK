function op1(event) {
    event.preventDefault();

    let a = "Harry";
    let b = 6;
    let c = a + b;

    let output = document.getElementById("op1");

    output.innerHTML =
        "The value of a is " + a +
        "<br>The value of b is " + b +
        "<br>The sum is: " + c;

    output.classList.add("show");
}


function op2(event) {
    event.preventDefault();

    let a = 6;
    let b = 3;
    let c = a + b;

    let output = document.getElementById("op2");

    output.innerHTML =
        "The value of a is " + a +
        "<br>The value of b is " + b +
        "<br>The datatype of c is: " + typeof c;

    output.classList.add("show");
}


function op3(event) {
    event.preventDefault();

    const a = {
        name: "bhushan",
        age: 23,
        isPrincipal: true
    };

    let output = document.getElementById("op3");

    output.innerHTML =
        "The value of a is: " +
        JSON.stringify(a) +
        "<br><br>You can change the properties of a const object, but you cannot reassign the object.";

    output.classList.add("show");
}


function op4(event) {
    event.preventDefault();

    const a1 = {
        name: "bhushan",
        age: 23,
        isPrincipal: true
    };

    const a2 = {
        name: "bhushan",
        age: 23,
        isPrincipal: true
    };

    a2["friend"] = "harsh";
    a2["age"] = 24;

    let output = document.getElementById("op4");

    output.innerHTML =
        "a1:<br>" + JSON.stringify(a1) +
        "<br><br>a2:<br>" + JSON.stringify(a2);

    output.classList.add("show");
}


function op5(event) {
    event.preventDefault();

    const dict = {
        appreciate: "recognize the full worth of",
        ataraxia: "state of freedom",
        yakka: "hard work"
    };

    let output = document.getElementById("op5");

    output.innerHTML =
        "Appreciate: " + dict.appreciate +
        "<br>Ataraxia: " + dict.ataraxia +
        "<br>Yakka: " + dict.yakka;

    output.classList.add("show");
}


// BUTTON EVENTS

document.getElementById("op1_button").addEventListener("click", op1);
document.getElementById("op2_button").addEventListener("click", op2);
document.getElementById("op3_button").addEventListener("click", op3);
document.getElementById("op4_button").addEventListener("click", op4);
document.getElementById("op5_button").addEventListener("click", op5);