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
function fact(event)
{ event.preventDefault();
    let fac=1;
    let fact_num=Number(document.getElementById("fact").value);
    let fact_op=document.getElementById("fact_op");
    for(let i=1;i<=fact_num;i++)
    {
        fac*=i;
    }
     fact_op.innerHTML = fac;
}
function indexpage(event) {
    window.location.href = "firstpage.html";
}

function for_loop_type(event)
{
    let loop_space=document.getElementById("for_loop");
    let obj={ Ram:70,sita:37,gita:45,hardik:34};
    let loop_op="";
    for(let a in obj)
    {
       loop_op += "Marks of " + a +" is "+obj[a]+"<br>";
    }
    loop_space.innerHTML=loop_op;

}

function for_in_loop(event)
{
    let in_loop=document.getElementById("for_loop1");
    let in_loop_op="";
    for (let a of "Harry")
    {
        in_loop_op += a + "<br>";
    }
    in_loop.innerHTML=in_loop_op;
}

for_in_loop(new Event("submit"));
for_loop_type(new Event("submit"));
lo(new Event("submit"));
document.getElementById("nat_button").addEventListener("click", nat_num);
document.getElementById("fact_button").addEventListener("click", fact);

document.getElementById("indexpage").addEventListener("click", indexpage);