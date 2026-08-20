function lo(event) {
    let tab = document.getElementById("lo");
    for (let i = 1; i < 11; i++) {
        tab.innerHTML += "27 x " + i + " = " + (27 * i) + "<br>";
    }
}

function nat_num(event) {
    let nat = Number(document.getElementById("nat").value);
    let nat_op = document.getElementById("nat_op");
    let nat_sum = 0;
    for (let i = 1; i <= nat; i++) {
        nat_sum += i;
    }
    nat_op.innerHTML = nat_sum;
}

function indexpage(event) {
    window.location.href = "firstpage.html";
}

lo(new Event("submit"));
document.getElementById("nat_button").addEventListener("click", nat_num);

document.getElementById("indexpage").addEventListener("click", indexpage);