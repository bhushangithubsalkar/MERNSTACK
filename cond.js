function runFunction(event) {
    event.preventDefault();
    alert("Be alert");
}

function driveage(event) {
    let age = Number(document.getElementById("age").value);
    let result = document.getElementById("res");
    if (age < 10) 
        { result.innerHTML = "You are kid because age is " + age; }
    else if (age > 10 && age < 29) 
        { result.innerHTML = "You are young because age is " + age; }
    else if (age > 30 && age < 50) 
        { result.innerHTML = "You are teeneger because age is " + age; }
    else if (age > 51 && age < 80) 
        { result.innerHTML = "You are adult because age is " + age; }
    else 
        { result.innerHTML = "You are old because age is " + age; }
}

function com(event) {
    let a = document.getElementById("language").value;
let result = document.getElementById("lang_res");
let ter = document.getElementById("thank_res");
    switch (a) {
        case "javascript": 
        result.innerHTML = "It is mainly used for web developement "; break;
        case "C": 
        result.innerHTML = "It is used for hardware  developement "; break;
        case "C++": 
        result.innerHTML = " used for game developement "; break;
        case "java": 
        result.innerHTML = "mainly used for app developement "; break;
        default: break;
    }
    ter.innerHTML = (a != "" ? "Thanks" : "Select an option");

}

document.getElementById("lan_But").addEventListener("click", com);
document.getElementById("ageButton").addEventListener("click", driveage);
document.getElementById("Alert_button").addEventListener("click", runFunction);