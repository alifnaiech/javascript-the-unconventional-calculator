let currentResult = 0;
let logEntries = [];

function getUserInput(){
  return parseInt(userInput.value);
}

function createAndWriteOuput(operator, resultBeforeCalc, calcNumber){
  calcDescription = `${calcNumber} ${operator} ${resultBeforeCalc}`;
  outputResult(currentResult, calcDescription)
}

function calculationResult(calculationType){
    const enteredNumber = getUserInput();
    const initialResult = currentResult;
    let mathOperator = '';

    if(calculationType !== "ADD" && calculationType !== "SUB" && calculationType !== "MUL" && calculationType !== "DIV" || !enteredNumber){
      return;
    }

    // if(calculationType === "ADD" || calculationType === "SUB" || calculationType === "MUL" || calculationType === "DIV"){

    // }

    if(calculationType === "ADD"){
      currentResult += enteredNumber;
      mathOperator = '+';
    }
    else if (calculationType === "SUB"){
      currentResult -= enteredNumber;
      mathOperator = '-';
    }
    else if (calculationType === "MUL"){
      currentResult *= enteredNumber;
      mathOperator = '*';
    }
    else if (calculationType === "DIV"){
      currentResult /= enteredNumber;
      mathOperator = '/';
    }

    createAndWriteOuput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);

}

function writeToLog(operationIdentifier, preResult, number, result){
const logEntry = {
      operation: operationIdentifier,
      prevNumer: preResult,
      nextNumBer: number,
      result: result
    };
    logEntries.push(logEntry);
    console.log(logEntries);
};

function addition() {
  calculationResult('ADD');
}


function substraction() {
  calculationResult('SUB');
}

function multiply() {
  calculcationResult('MUL');
}


function divide() {
  calculationResult('DIV');
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', substraction);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);






