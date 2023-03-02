window.calculateSumListener = function calculateSumListener() {
    //Devuelve el valor del input #firstNumber
    var stringA = document.getElementById("firstNumber").value;
    //Devuelve el valor del input #secondNumber
    var stringB = document.getElementById("secondNumber").value;

    let result = parseInt(stringA) + parseInt(stringB);

    document.getElementById("resultNumber").value = result;
};