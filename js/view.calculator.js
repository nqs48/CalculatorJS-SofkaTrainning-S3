import { fnPercentKey, fnOneKey } from "./percent-key.controller.js";

export const calculatorView = () => {
    // Selección del contenedor principal
    const container = document.querySelector("#container");

    // Contenedor de la calculadora
    const calculatorContainer = document.createElement("div");
    calculatorContainer.classList.add("calculator-container");
    // <div class="calculator-container"></div>

    // Display de la calculadora
    const display = document.createElement("input");
    display.type = "text";
    display.id = "display";
    display.value = "0";
    display.readOnly = true;
    // <input type="text" id="display" value="0" readonly>

    // Contenedor del display
    const calculatorDisplay = document.createElement("div");
    calculatorDisplay.classList.add("calculator-display");
    // <div class="calculator-display"></div>

    calculatorDisplay.append(display);
    // < class="calculator-display">
    //     <input type="text" id="display" value="0" readonly>
    // </div>

    // Key clear
    const keyClear = document.createElement("button");
    keyClear.classList.add("calculator-key", "key-clear");
    keyClear.id = "clear";
    keyClear.textContent = "AC";
    // <button class="calculator-key key-clear" id="clear">AC</button>

    // Key sign
    const keySign = document.createElement("button");
    keySign.classList.add("calculator-key", "key-sign");
    keySign.id = "changeSign";
    keySign.textContent = "+/-";
    // <button class="calculator-key key-sign" id="changeSign">+/-</button>

    // Key percent
    const keyPercent = document.createElement("button");
    keyPercent.classList.add("calculator-key", "key-percent");
    keyPercent.id = "percent";
    keyPercent.textContent = "%";
    keyPercent.addEventListener("click", fnPercentKey);
    // keyPercent.onclick = fnPercentKey;
    // <button class="calculator-key key-percent" id="percent">%</button>

    // Key delete
    const keyDelete = document.createElement("button");
    keyDelete.classList.add("calculator-key", "key-delete");
    keyDelete.id = "delete";
    keyDelete.innerHTML = "&#8592;"; // keyPercent.textContent = "&#8592;";
    // <button class="calculator-key key-delete" id="delete">←</button>

    //Second Row
    const keySeven = document.createElement("button");
    keySeven.classList.add("calculator-key", "key-seven");
    keySeven.id = "seven";
    keySeven.textContent = "7";

    const keyFour = document.createElement("button");
    keyFour.classList.add("calculator-key", "key-four");
    keyFour.id = "four";
    keyFour.textContent = "4";

    const keyOne = document.createElement("button");
    keyOne.classList.add("calculator-key", "key-one");
    keyOne.id = "one";
    keyOne.textContent = "1";

    const keyZero = document.createElement("button");
    keyZero.classList.add("calculator-key", "key-zero");
    keyZero.id = "zero";
    keyZero.textContent = "0";

    // //Third Row
    const keyEight = document.createElement("button");
    keyEight.classList.add("calculator-key", "key-eight");
    keyEight.id = "eight";
    keyEight.textContent = "7";

    const keyFive = document.createElement("button");
    keyFive.classList.add("calculator-key", "key-five");
    keyFive.id = "five";
    keyFive.textContent = "4";

    const keyTwo = document.createElement("button");
    keyOne.classList.add("calculator-key", "key-two");
    keyOne.id = "two";
    keyOne.addEventListener("click", fnOneKey);
    keyOne.textContent = "1";

    const keyDecimal = document.createElement("button");
    keyDecimal.classList.add("calculator-key", "key-decimal");
    keyDecimal.id = "decimal";
    keyDecimal.textContent = ".";

    //Four Row
    const keyNine = document.createElement("button");
    keyNine.classList.add("calculator-key", "key-nine");
    keyNine.id = "nine";
    keyNine.textContent = "9";

    const keySix = document.createElement("button");
    keySix.classList.add("calculator-key", "key-six");
    keySix.id = "six";
    keySix.textContent = "6";

    const keyThree = document.createElement("button");
    keyThree.classList.add("calculator-key", "key-three");
    keyThree.id = "three";
    keyThree.textContent = "3";

    const keyEquals = document.createElement("button");
    keyEquals.classList.add("calculator-key", "key-equals");
    keyEquals.id = "equals";
    keyEquals.textContent = "=";

    //Five Row
    const keyAdd = document.createElement("button");
    keyAdd.classList.add("calculator-key", "key-add");
    keyAdd.id = "add";
    keyAdd.textContent = "+";

    const keySubtract = document.createElement("button");
    keySubtract.classList.add("calculator-key", "key-subtract");
    keySubtract.id = "subtract";
    keySubtract.textContent = "-";

    const keyMultiply = document.createElement("button");
    keyMultiply.classList.add("calculator-key", "key-multiply");
    keyMultiply.id = "multiply";
    keyMultiply.textContent = "*";

    const keyDivide = document.createElement("button");
    keyDivide.classList.add("calculator-key", "key-divide");
    keyDivide.id = "divide";
    keyDivide.textContent = "/";

    // Key row
    let calculatorKeysRow = document.createElement("div");
    calculatorKeysRow.classList.add("calculator-keys-row");
    calculatorKeysRow.append(keyClear, keySign, keyPercent, keyDelete);

    let calculatorKeysRowTwo = document.createElement("div");
    calculatorKeysRowTwo.classList.add("calculator-keys-row");
    calculatorKeysRowTwo.append(keySeven, keyFour, keyOne, keyZero);

    let calculatorKeysRowThree = document.createElement("div");
    calculatorKeysRowThree.classList.add("calculator-keys-row");
    calculatorKeysRowThree.append(keyEight, keySix, keyThree, keyEquals);

    let calculatorKeysRowFour = document.createElement("div");
    calculatorKeysRowFour.classList.add("calculator-keys-row");
    calculatorKeysRowFour.append(keyEight, keyFive, keyTwo, keyDecimal);

    let calculatorKeysRowFive = document.createElement("div");
    calculatorKeysRowFive.classList.add("calculator-keys-row");
    calculatorKeysRowFive.append(keyAdd, keySubtract, keyMultiply, keyDivide);

    const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(
        calculatorKeysRow,
        calculatorKeysRowTwo,
        calculatorKeysRowThree,
        calculatorKeysRowFour,
        calculatorKeysRowFive
    );

    calculatorContainer.append(calculatorDisplay, calculatorKeys);
    container.append(calculatorContainer);

    //    container.innerHTML = `<div class="calculator-container">

    //         <div class="calculator-display">
    //             <input type="text" id="display" value="0" readonly>
    //         </div>
    //         <div class="calculator-keys">
    //             <div class="calculator-keys-row">
    //                 <button class="calculator-key key-clear" id="clear">AC</button>
    //                 <button class="calculator-key key-sign" id="changeSign">+/-</button>
    //                 <button class="calculator-key key-percent" id="percent">%</button>
    //                 <button class="calculator-key key-delete" id="delete">&#8592;</button>
    //             </div>
    //             <div class="calculator-keys-row">
    //                 <button class="calculator-key key-seven" id="seven">7</button>
    //                 <button class="calculator-key key-four" id="four">4</button>
    //                 <button class="calculator-key key-nine" id="one">1</button>
    //                 <button class="calculator-key key-zero" id="zero">0</button>
    //             </div>
    //             <div class="calculator-keys-row">
    //                 <button class="calculator-key key-eight" id="eight">8</button>
    //                 <button class="calculator-key key-five" id="five">5</button>
    //                 <button class="calculator-key key-two" id="two">2</button>
    //                 <button class="calculator-key key-decimal" id="decimal">.</button>
    //             </div>
    //             <div class="calculator-keys-row">
    //                 <button class="calculator-key key-nine" id="nine">9</button>
    //                 <button class="calculator-key key-six" id="six">6</button>
    //                 <button class="calculator-key key-three" id="three">3</button>
    //                 <button class="calculator-key key-equals" id="equals">=</button>
    //             </div>
    //             <div class="calculator-keys-row">
    //                 <button class="calculator-key key-add" id="add">+</button>
    //                 <button class="calculator-key key-subtract" id="subtract">&minus;</button>
    //                 <button class="calculator-key key-multiply" id="multiply">&times;</button>
    //                 <button class="calculator-key key-divide" id="divide">&divide;</button>
    //             </div>
    //         </div>
    //  </div>`;
};
