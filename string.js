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
    let d = a + " " + b;
    c.innerHTML += "<br>Conconatenate: " + d;
});

document.getElementById("string_new_btn").addEventListener("click", function () {
    let d = document.getElementById("string_inp").value;
    let sen = ` <br> the name is ${d}`;
    let c = document.getElementById("string_op");
    c.innerHTML += sen;
});

document.getElementById("string_replace_btn").addEventListener("click", function () {
    let c = document.getElementById("string_inp").value;
    let original = ` This is the original sentence`;
    let d = original.replace("original", c);
    let a = document.getElementById("string_op");
    a.innerHTML += "<br>" + d;
});

document.getElementById("Remove_space_btn").addEventListener("click", function () {
    let a = document.getElementById("string_inp").value;
    let c = document.getElementById("string_op");
    let d = a.trim();
    c.innerHTML += "<br>After removing space: " + d;

});

document.getElementById("string_slice_btn").addEventListener("click", function () {
    let a = document.getElementById("string_slice_inp1").value;
    let b = Number(document.getElementById("string_slice_inp2").value);
    let c = Number(document.getElementById("string_slice_inp3").value);
    let d = document.getElementById("string_slice_op");

    if (a === "" || isNaN(b) || isNaN(c)) {
        d.innerHTML = "Please enter valid inputs.";
        return;
    }
    else if (b < 0 || c < 0 || b >= a.length || c > a.length || b >= c) {
        d.innerHTML = "Please enter valid indices.";
        return;
    }
    else {
        d.innerHTML = "Result :-" + a.slice(b, c);
    }

});
document.getElementById("string_conc_btn2").addEventListener("click", function () {
    const boxes = document.querySelectorAll(".box");
    const nameInp = document.getElementById("string_conc2");
    const op = document.getElementById("string_conc_op2");
    const string_conc_btn = document.getElementById("string_conc_btn2");

    if (nameInp.value.trim() === "") {
        op.innerHTML = "Please enter a valid name.";
        return;
    }

    string_conc_btn.disabled = true;

    // FIX 2: Fixed typo (op,innerHTML -> op.innerHTML)
    op.innerHTML = "Processing...";

    let counter = 0;
    let currentIndex = 0;
    const steps = Math.floor(Math.random() * 16) + 15;

    const interval = setInterval(function () {

        boxes.forEach((boxItem) => boxItem.classList.remove("highlight"));
        currentIndex = counter % boxes.length;

        boxes[currentIndex].classList.add("highlight");

        counter++;

        // Stop condition
        if (counter >= steps) {
            clearInterval(interval);

            // Get selected box text/attribute
            const selectedBox = boxes[currentIndex].getAttribute("data-value");

            // Concatenate user input with selected box value
            op.innerHTML = "Result: <strong>" + nameInp.value + " the " + selectedBox + "</strong>";

            // FIX 5: Re-enable the correct button variable
            string_conc_btn.disabled = false;
        }
    }, 150);
});

document.getElementById("string_conc_btn3").addEventListener("click", function () {
    let a = document.getElementById("string_conc3").value;
    let b = document.getElementById("string_conc_op3");
    for (let i = 0; i < a.length - 1; i++) {
        b.innerHTML = "<br>Character at index " + i + ": " + a.charAt(i);
    }
});

document.getElementById("string_email_btn").addEventListener("click", function () {
    let a = document.getElementById("string_email").value;
    let b = document.getElementById("string_email_op");
    if (a.includes("@") && a.includes(".") && !a.startsWith("@") && !a.endsWith("@") && !a.endsWith(".")) {
        b.innerHTML = "Valid email";
    }
    else{
        b.innerHTML = "Invalid email";
    }
});

let fruit = 'Bhushan\'s'; //it is the example of excape character