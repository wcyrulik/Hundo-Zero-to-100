//alert('Hello from JS');

function getValues(){

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    
    // parse start and end values into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue,endValue);
        displayNumbers(numbers);
    } else {
        alert("You must enter integers for start and end values");
    }
}

function generateNumbers(sValue, eValue) {
    let numbers = [];

    for (let index = sValue; index <= eValue; index++) {
        numbers.push(index);
    }
    return numbers;
}

function displayNumbers(numbers){
    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        
        let number = numbers[index];
        let className = "even";

        if (number % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }

    // The following is for proper display in prism on the code page for
    // this project.  Prism doesn't render template literals properly.
    //  templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        
    }
    document.getElementById("results").innerHTML = templateRows;
}