var sum;
var operatorType;

function numberButton(id) {
    switch (id) {
        case "numOne":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "1";
            break;

        case "numTwo":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "2";
            break;

        case "numThree":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "3";
            break;

        case "numFour":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "4";
            break;

        case "numFive":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "5";
            break;

        case "numSix":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "6";
            break;

        case "numSeven":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "7";
            break;

        case "numEight":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "8";
            break;

        case "numNine":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "9";
            break;

        case "numZero":
            document.getElementById('numberss').value = document.getElementById('numberss').value + "0";
            break;

        case "numDelete":
            document.getElementById('numberss').value = document.getElementById('numberss').value.slice(0, -1);
    }
}

function getNumInput(num, id) {
    sum = num;
    operatorType = id;
    document.getElementById('numberinput').reset();
}

function mathematics(num) {
    switch (operatorType) {
        case "btnAdd":
            sum = sum + num;
            break;

        case "btnSubtract":
            sum = sum - num;
            break;

        case "btnMultiply":
            sum = sum * num;
            break;

        case "btnDivide":
            if(num!=0){
                sum = sum / num;
            }
            else{
                alert("Boi");
                document.getElementById('numberinput').reset();
            }
            
            break;

    }
    document.getElementById('numberss').value = sum.toString();
}

function resetCalculator(){
    sum = null;
    operatorType = null;
    document.getElementById('numberinput').reset();
}
