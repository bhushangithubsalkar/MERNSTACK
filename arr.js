let arr = [];
document.getElementById("array_add").addEventListener("click", function () {
    let name = document.getElementById("array_inp").value.trim();

    let salary = document.getElementById("array_inp1").value.trim();

    let output = document.getElementById("array_op");

    if (name === "" || salary === "") {
        output.innerHTML = "Please enter both name and salary.";
        return;
    }
    else if (isNaN(salary)) {
        output.innerHTML = "Salary must be a number.";
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
    }});

document.getElementById("array_dis").addEventListener("click", function () {
    let output = document.getElementById("array_op");
    if (arr.length === 0) {
        output.innerHTML = "Array is empty. Nothing to display.";
        return;
    }
    else {
        let op ="<strong>Current Array:</strong><table>  <tr>   <th>Name</th><th>Salary</th></tr>";
        arr.forEach(emp => {
            op += `<tr><td>${emp.name} </td><td>${ emp.salary}<td>`;
        });
        op += "</table>";
        output.innerHTML = op;
    }});

document.getElementById("array_length").addEventListener("click", function () {
    let output = document.getElementById("array_op");
    output.innerHTML = "Length of Array is: " + arr.length;
});

document.getElementById("array_clear").addEventListener("click", function () {
    let output = document.getElementById("array_op");
    arr = [];
    output.innerHTML = "Array has been cleared.";
});

document.getElementById("array_sort").addEventListener("click", function () {
    let output = document.getElementById("array_op");
    if (arr.length === 0) {
        output.innerHTML = "Array is empty. Nothing to sort.";
        return;
    }
    arr.sort((a, b) => a.name.localeCompare(b.name));
    let op ="<strong>Sorted Array:</strong><table>  <tr>   <th>Name</th><th>Salary</th></tr>";      
});
