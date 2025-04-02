function performTasks() {
    // Task 1: Declare age and isAdult
    let age = 25;
    let isAdult = age >= 18;
    
    // Task 2: Arithmetic operations
    let x = 10, y = 5;
    let addition = x + y;
    let multiplication = x * y;
    let modulus = x % y;
    
    // Task 3: Check if a number is even or odd
    let n = 7;
    let isEven = (n % 2 === 0) ? "Even" : "Odd";
    
    // Task 4: Store numbers 1 to 5 in an array
    let num = [];
    for (let i = 1; i <= 5; i++) {
        num.push(i);
    }
    
    // Task 5: Function to return the square of a number
    function square(num) {
        return num * num;
    }
    
    // Display results
    document.getElementById("output").innerHTML = `
        Age: ${age} <br>
        Is Adult: ${isAdult} <br>
        Addition: ${addition} <br>
        Multiplication: ${multiplication} <br>
        Modulus: ${modulus} <br>
        Number ${n} is: ${isEven} <br>
        Numbers Array: ${num.join(", ")} <br>
        Square of 4: ${square(4)}
    `;
}