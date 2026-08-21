function while_loop(b) {
    let while_loop_even_var = 0;
    let while_loop_odd_var = 0;
    let whi_loop_ele = document.getElementById("countEvenOdd_out");
    let i = 1;
    while (i <= b) {
        if (i % 2 == 0) { while_loop_even_var++; }
        else { while_loop_odd_var++; }
        i++;
    }
    return [while_loop_even_var, while_loop_odd_var];
} // javascript can't return two varible at a time so create a array to return the value 

document.getElementById("countEvenOdd_but").addEventListener("click", function () {
    let Func_num = Number(document.getElementById("countEvenOdd_in").value);
    let dig = while_loop(Func_num);
    let ev = dig[0];
    let od = dig[1];
    document.getElementById("countEvenOdd_out").innerHTML = "The number of even number is " + ev + "<br>The number of odd number is " + od;
});


function d_while_loop(a) {
    let small = 9;
    do {
        let digit = a % 10;
        if (digit < small) { small = digit; }
        a = Math.floor(a / 10);
    } while (a > 0)
    return small;
}

//applying  the function in various places
document.getElementById("small_btn").addEventListener("click", function () {
    let a = Number(document.getElementById("small_inp").value);
    let c = d_while_loop(a);
    document.getElementById("small_out").innerHTML = "smallest digit is " + c;
});

function call(b) {  // call of all the above two function 
    let result1 = while_loop(b);
    let result2 = d_while_loop(b);
    let even = result1[0]; let odd = result1[1];
    return [even, odd, result2];
}

document.getElementById("combine_bt").addEventListener("click", function () {
    let a = Number(document.getElementById("combine").value);
    let c = call(a);
    let ev = c[0], odd = c[1], small = c[2];
    document.getElementById("combine_op").innerHTML = "The number of even number is " + ev + "<br>The number of odd number is " + odd + "<br> smallest digit is " + small;
})

let hello=()=>{alert("Hello how are you");}   //arrow function
document.getElementById("Alert").addEventListener("click",hello);

let student=[];

document.getElementById("student_btn").addEventListener("click",function(){
    let inp = Number(document.getElementById("student_input").value);
    let op=document.getElementById("student_output");
    op.innerHTML="";
    for(i=0;i<=inp;i++)
    {
        op.innerHTML="
        <div> </div>";
    }
});
