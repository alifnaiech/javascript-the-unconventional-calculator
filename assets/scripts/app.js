let currentResult = 0;
let logEntries = [];

function getUserInput(){
  return parseInt(userInput.value);
}

function createAndWriteOuput(operator, resultBeforeCalc, calcNumber){
  calcDescription = `${calcNumber} ${operator} ${resultBeforeCalc}`;
  outputResult(currentResult, calcDescription)
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
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  createAndWriteOuput('+', initialResult, enteredNumber); 
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}


function substraction() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOuput('-', initialResult, enteredNumber);
  writeToLog('SUB', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOuput('*', initialResult, enteredNumber);
  writeToLog('MUL', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOuput('/', initialResult, enteredNumber);
  writeToLog('DIV', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addition);
subtractBtn.addEventListener('click', substraction);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);





