
function addition() {

    Module['onRuntimeInitialized'] = onRuntimeInitialized;
    //Use cwrap to import WebAssembly function
    const add = Module.cwrap('add', 'number', ['number', 'number']);

    //Only call function once Intialization is complete
    function onRuntimeInitialized(a, b) {
        //Pass parameters to webAssembly function
        var ans = add(a, b);
        //Display answer on HTML page
        document.getElementById("Ans1").value = ans;
    }

    //Get Values from HTML page
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    //Pass variables
    onRuntimeInitialized(a, b);

}

function multiplication() {

    Module['onRuntimeInitialized'] = onRuntimeInitialized;
    const multiply = Module.cwrap('multiply', 'number', ['number', 'number']);

    function onRuntimeInitialized() {
        var ans = multiply(a, b);
        document.getElementById("Ans1").value = ans;
    }
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

    onRuntimeInitialized(a, b);

}

function subtraction() {

    Module['onRuntimeInitialized'] = onRuntimeInitialized;
    const multiply = Module.cwrap('subtract', 'number', ['number', 'number']);

    function onRuntimeInitialized() {
        var ans = multiply(a, b);
        document.getElementById("Ans1").value = ans;
    }
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    
    onRuntimeInitialized(a, b);

}

function division() {

    Module['onRuntimeInitialized'] = onRuntimeInitialized;
    const multiply = Module.cwrap('divide', 'number', ['number', 'number']);

    function onRuntimeInitialized() {
        var ans = multiply(a, b);
        document.getElementById("Ans1").value = ans;
    }
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    
    onRuntimeInitialized(a, b);

}