document.getElementById("addForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const num1=parseFloat(document.getElementById("num1").value);
    const num2=parseFloat(document.getElementById("num2").value);
    const num3=parseFloat(document.getElementById("num3").value);

    const a_1=parseFloat(num1);  // _ allow 
    const b1=parseFloat(num2);
    const c=parseFloat(num3);
    
    const sum=a_1 + b1 + c;

    document.getElementById("demo").textContent = "The sum is:"+sum;
});