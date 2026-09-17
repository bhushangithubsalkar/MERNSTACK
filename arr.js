let arr = [];
document.getElementById("array_add").addEventListener("click", function () {
    let name = document.getElementById("array_inp").value.trim();

    let salary = document.getElementById("array_inp1").value.trim();

    let output = document.getElementById("array_op");

    if (name === "" || salary === "") {
        output.innerHTML = "Please enter both name and salary.";
        return;
    }

    arr.push({ name: name, salary: salary });

    document.getElementById("array_inp").value = "";
    document.getElementById("array_inp1").value = "";

    output.innerHTML = "Added: " + name + " with salary: " + salary;
});

document.getElementById("array_rem").addEventListener("click", function () {
    let output = document.getElementById("array_op");
    if (arr.length === 0) {
        output.innerHTML = "Array is empty. Nothing to remove.";
        return;
    }
    else {
        let removed = arr.pop();
       output.innerHTML = "Removed: " + removed.name + " with salary: " + removed.salary;
    }
});

document.getElementById("array_dis").addEventListener("click", function () {
    let output = document.getElementById("array_op");
    if (arr.length === 0) {
        output.innerHTML = "Array is empty. Nothing to display.";
        return;
    }
    else {
        let op ="<strong>Current Array:</strong><table>  <tr>   <th>Name</th><th>Salary</th></tr>";
        arr.forEach(emp => {
            op += `<li> ${emp.name} -${ emp.salary}</li>`;
        });
        op += "</ol>";
        output.innerHTML = op;
    }
});