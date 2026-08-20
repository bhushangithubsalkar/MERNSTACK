function op1(event) {
    event.preventDefault();
    let a = "Harry";
    let b = 6;
    let c = a + b;
    document.getElementById("op1").innerHTML =
        "The value of a is " + a +
        "<br> The value of b is " + b +
        "<br>The sum is:" + c;
}

function op2(event) {
    event.preventDefault();
    let a = 6;
    let b = 3;
    let c = a + b;
    document.getElementById("op2").innerHTML =
        " The value of a is " + a +
        "<br> The value of b is " + b +
        " <br> The datatype of c is : " + typeof c;
}

function op3(event) {
    const a = { name: "bhushan", age: 23, isPrincipal: true };
    //a=45;
    let mes = " the constant a is an object and we can change the properties of the object but we cannot reassign the object to a new value";

    document.getElementById("op3").innerHTML =
        "The value of a is " + JSON.stringify(a) +
        "<br> the message is:" + mes;
}

function op4(event) {
    const a1 = { name: "bhushan", age: 23, isPrincipal: true };
    const a2 = { name: "bhushan", age: 23, isPrincipal: true };
    a2["friend"] = "harsh";  //new property added to a2
    a2["age"] = 24;          //edited
    
    document.getElementById("op4").innerHTML =
        "The value of a1 is <br>" + JSON.stringify(a1) +
        "<br>The value of a2 is:" + JSON.stringify(a2);
}

function op5(event) {
    const dict = {
        appreciate: "recognize the full worth of ",
        ataraxia: "state of freedom",
        yakka: "hard work"
    };
    document.getElementById("op5").innerHTML =
        "the value of appriaciation:  " + dict.appreciate +
        "<br> the value of ataraxia:  " + dict.ataraxia +
        "<br> the value of yakka:  " + dict.yakka;
}
op1(new Event("submit"));
op2(new Event("submit"));
op3(new Event("submit"));
op4(new Event("submit"));
op5(new Event("submit"));

