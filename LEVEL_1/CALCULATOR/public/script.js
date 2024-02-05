let displayValue = '0';


function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
    // console.log(displayValue)
}

function appendToDisplay(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}
function remove(){
    
        displayValue = displayValue.slice(0,-1);
        if (displayValue === '') {
            displayValue ='0';
        }
    
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = 'Error';
        setTimeout(()=>{if (displayValue == 'Error') {
            displayValue = '0';
        }updateDisplay();},1000)
        
        updateDisplay();
    }
}
