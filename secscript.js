let a = null;
let b = 345;
let c = true;
let d = BigInt("123456789012345678901") + BigInt("987654376");     // always pass the double quotes for BigInt values otherwise it will throw an error
let e = Symbol("hi everyone");
let f = "Hello World";
let g = undefined;
let h = typeof f;
let tar = document.getElementById("demo1");
tar.innerHTML = "The value of a is:  " + a + 
",<br> the value of b is: " + b + 
", <br> the value of c is: " + c + 
", <br> the value of d is: " + d + 
", <br> the value of e is: " + e.toString() + 
", <br> the value of f is: " + f + 
",<br> the value of g is: " + g + 
", <br> the value of h is: " + h;

//object in js    = it is key value pair they are non premative data type
const items =
{
    "bhushan": "true",
    "Rahul": "false",
    "Aparna": 67,
    "Gauri": undefined,
    "Rohit": null,
    "Ramesh": 123456789012345678901n,
    "Suresh": Symbol("hi everyone"),
    "Anjali": "Hello World"
}

let target = document.getElementById("demo2");

target.innerHTML = 
"The value of bhushan is:  " + items.bhushan + 
",<br> the value of Rahul is: " + items.Rahul + 
", <br> the value of Aparna is: " + items.Aparna + 
", <br> the value of Gauri is: " + items.Gauri + 
", <br> the value of Rohit is: " + items.Rohit + 
", <br> the value of Ramesh is: " + items.Ramesh + 
", <br> the value of Suresh is: " + items.Suresh.toString() + 
", <br> the value of Anjali is: " + items.Anjali + 
" <br> the value of undefine item is : " + items.undefinedItem;  
// it will return undefined because we have not defined any key with name undefinedItem in the object items
