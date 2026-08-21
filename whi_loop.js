function while_loop(b) {
    let while_loop_even_var = 0;
    let while_loop_odd_var = 0;
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

let hello = () => { alert("Hello how are you"); }   //arrow function
document.getElementById("Alert").addEventListener("click", hello);

let student = [];

document.getElementById("student_count").addEventListener("click", function () {
    let inp = Number(document.getElementById("student_input").value);
    let op = document.getElementById("student_output");
    op.innerHTML = "";
    for (let i = 0; i < inp; i++) {
        op.innerHTML += `
        <div> <input type="text" id="name_${i}" placeholder="name ${i + 1}"><input type="number" id="marks_${i}" placeholder="marks ${i + 1}"> </div>`;
    }
});

document.getElementById("student_save").addEventListener("click", function () {
    let n = Number(document.getElementById("student_input").value);
    student = [];
    for (let i = 0; i < n; i++) {
        let name = document.getElementById("name_" + i).value;
        let marks = Number(document.getElementById("marks_" + i).value);
        student.push({ name: name, marks: marks });
    }

    //for higher and lower marks 
    let high = student[0];
    let low = student[0];
    for (let i = 1; i < n; i++) {
        if (high.marks < student[i].marks) { high = student[i]; }
        if (low.marks > student[i].marks) { low = student[i]; }
    }

    let output = "<h3> Students Details </h3>";
    for (let i = 0; i < n; i++) {
        for (let key in student[i]) {
            output += key + " : " + student[i][key] + "<br>";
        }  //student[0] = { name: "Rahul",marks: 78};   => for(let key in student[0])    => give key = "name" key = "marks"   => student[0][key]   student[0]["name"]  → Rahul  and student[0]["marks"] → 78
    }
    output += "<br>";
    output += "<br> Highest Marks <br> Name: " + high.name + " Marks : " + high.marks + "<br>";
    output += "<br> Lowest Marks <br> Name: " + low.name + " Marks : " + low.marks + "<br>";

    document.getElementById("student_output").innerHTML = output;

});

document.getElementById("pass_but").addEventListener("click", function () {
    let a = Number(document.getElementById("pass_in").value);
    let b = document.getElementById("pass_out");
    let password = 123456;
    if (a==password){
        window.location.href="secpage.html";
     }
     else {
        b.innerHTML="Enter correct password";
     }
});

let mean_num=[];
document.getElementById("mean_button").addEventListener("click", function () {
    let a = Number(document.getElementById("mean_in").value);
    let b = document.getElementById("mean_enter");
    b.innerHTML="";
    for(let i=0;i<a;i++)
    {
        b.innerHTML+=`<input type="number" id="mean_num${i}" placeholder="Number ${i+1}"> <br>`;
    }
});

document.getElementById("mean_calcu").addEventListener("click", function () {
    mean_num=[];
    let a = Number(document.getElementById("mean_in").value);
    let sum=0;
    for(let i=0;i<a;i++)
    {let value=Number(document.getElementById("mean_num"+i).value);
        mean_num.push(value);
        sum+=mean_num[i];}
    let mean =sum/a;
    document.getElementById("mean_op").innerHTML="Mean is "+mean;
    
});
