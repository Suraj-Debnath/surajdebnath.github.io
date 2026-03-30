// ========= DROPDOWN =========
const spans = document.querySelectorAll(".span");

spans.forEach((span, index) => {
    const items = span.querySelectorAll("li");

    items.forEach(item => {
        item.addEventListener("click", () => {
            span.firstChild.nodeValue = item.innerText + " ⏷";
            updateInputLabel();
        });
    });
});

// ========= ELEMENTS =========
const input = document.getElementById("mainInput");
const inputLabel = document.getElementById("inputLabel");

const decimal = document.getElementById("decimal");
const octal = document.getElementById("octal");
const hex = document.getElementById("hex");
const binary = document.getElementById("binary");

const convertBtn = document.querySelector(".convert-btn");
const resetBtn = document.querySelector(".reset-btn");
const swapBtn = document.querySelector(".swap-btn");

// ========= LABEL + PLACEHOLDER =========
function updateInputLabel() {
    let from = spans[0].innerText.replace("⏷","").trim();

    inputLabel.innerText = "Enter " + from + " number";
    input.placeholder = "Enter " + from + " number";
}

// ========= CONVERT =========
convertBtn.addEventListener("click", () => {

    let from = spans[0].innerText.replace("⏷","").trim();
    let to = spans[1].innerText.replace("⏷","").trim();

    let value = input.value.trim();

    if(value === "") return;

    let decimalValue;

    // 🔥 convert input → decimal
    if(from === "Binary"){
        decimalValue = parseInt(value, 2);
    }
    else if(from === "Decimal"){
        decimalValue = parseInt(value, 10);
    }
    else if(from === "Octal"){
        decimalValue = parseInt(value, 8);
    }
    else if(from === "Hexadecimal"){
        decimalValue = parseInt(value, 16);
    }

    if(isNaN(decimalValue)){
        alert("Invalid input!");
        return;
    }

    // 🔥 clear all first
    decimal.value = "";
    octal.value = "";
    hex.value = "";
    binary.value = "";

    // 🔥 only selected output
    if(to === "Decimal"){
        decimal.value = decimalValue;
    }
    else if(to === "Binary"){
        binary.value = decimalValue.toString(2);
    }
    else if(to === "Octal"){
        octal.value = decimalValue.toString(8);
    }
    else if(to === "Hexadecimal"){
        hex.value = decimalValue.toString(16);
    }
});

// ========= RESET =========
resetBtn.addEventListener("click", () => {
    input.value = "";
    decimal.value = "";
    octal.value = "";
    hex.value = "";
    binary.value = "";
});

// ========= SWAP =========
swapBtn.addEventListener("click", () => {
    let temp = spans[0].innerText;
    spans[0].innerText = spans[1].innerText;
    spans[1].innerText = temp;

    updateInputLabel();
});
