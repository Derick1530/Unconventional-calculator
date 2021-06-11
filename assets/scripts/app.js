const defaultResult = 0;
let currentResult = defaultResult;
let testArray = [];
function getUserNumberInput() {
  return parseInt(userInput.value);
}
function addLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    myPreviousResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  testArray.push(logEntry);
  console.log(logEntry);
}
function creatraAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescrption = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescrption);
}
function calculResult(operationType) {
  const enteredNumber = getUserNumberInput();
  if (
    operationType !=="ADD" &&
    operationType !=="SUB" &&
    operationType != "DIV" &&
    operationType !== "MULT" ||
    !enteredNumber
  ){
    return;
  }
  
  const initialResult = currentResult;
  let mathOperator;
  if (operationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+"
  }
  else if(operationType ==="SUB"){
    currentResult -= enteredNumber;
    mathOperator = "-"
  }
  else if(operationType ==="DIV"){
    currentResult /= enteredNumber;
    mathOperator = "/"
  }
  else if(operationType ==="MULT"){
    currentResult *= enteredNumber;
    mathOperator = "*" 
  }
  creatraAndWriteOutput(mathOperator,initialResult,enteredNumber);
  addLog(mathOperator,initialResult,enteredNumber,currentResult);
}
function add() {
  calculResult("ADD");
}
function subtract() {
  calculResult("SUB");
}
function multiply() {
 calculResult("MULT");
}
function divide() {
  calculResult("DIV");
}
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
