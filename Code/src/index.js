
function addition() {

    Module['onRuntimeInitialized'] = onRuntimeInitialized;
    const add = Module.cwrap('add', 'number', ['number', 'number']);

    function onRuntimeInitialized(a, b) {
        var ans = add(a, b);
        document.getElementById("Ans1").value = ans;
    }


    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;

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