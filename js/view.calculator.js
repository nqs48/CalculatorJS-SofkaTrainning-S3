import {fnPercentKey} from './percent-key.controller.js';

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

    // Key row
    let calculatorKeysRow = document.createElement("div");
    calculatorKeysRow.classList.add("calculator-keys-row");
    calculatorKeysRow.append(keyClear, keySign, keyPercent, keyDelete);
    // <div class="calculator-keys-row">
    //     <button class="calculator-key key-clear" id="clear">AC</button>
    //     <button class="calculator-key key-sign" id="changeSign">+/-</button>
    //     <button class="calculator-key key-percent" id="percent">%</button>
    //     <button class="calculator-key key-delete" id="delete">&#8592;</button>
    // </div>

    const calculatorKeys = document.createElement("div");
    calculatorKeys.classList.add("calculator-keys");
    calculatorKeys.append(calculatorKeysRow);

    calculatorContainer.append(calculatorDisplay, calculatorKeys);
    container.append(calculatorContainer);

        container.innerHTML = `<div class="calculator-container">
        <div class="calculator-display">
            <input type="text" id="display" value="0" readonly>
        </div>
        <div class="calculator-keys">
            <div class="calculator-keys-row">
                <button class="calculator-key key-clear" id="clear">AC</button>
                <button class="calculator-key key-sign" id="changeSign">+/-</button>
                <button class="calculator-key key-percent" id="percent">%</button>
                <button class="calculator-key key-delete" id="delete">&#8592;</button>
            </div>
            <div class="calculator-keys-row">
                <button class="calculator-key key-seven" id="seven">7</button>
                <button class="calculator-key key-four" id="four">4</button>
                <button class="calculator-key key-nine" id="one">1</button>
                <button class="calculator-key key-zero" id="zero">0</button>
            </div>
            <div class="calculator-keys-row">
                <button class="calculator-key key-eight" id="eight">8</button>
                <button class="calculator-key key-five" id="five">5</button>
                <button class="calculator-key key-two" id="two">2</button>
                <button class="calculator-key key-decimal" id="decimal">.</button>
            </div>
            <div class="calculator-keys-row">
                <button class="calculator-key key-nine" id="nine">9</button>
                <button class="calculator-key key-six" id="six">6</button>
                <button class="calculator-key key-three" id="three">3</button>
                <button class="calculator-key key-equals" id="equals">=</button>
            </div>
            <div class="calculator-keys-row">
                <button class="calculator-key key-add" id="add">+</button>
                <button class="calculator-key key-subtract" id="subtract">&minus;</button>
                <button class="calculator-key key-multiply" id="multiply">&times;</button>
                <button class="calculator-key key-divide" id="divide">&divide;</button>
            </div>
        </div>
    </div>`;
};
