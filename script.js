let display = document.getElementById("display");
let buttons = document.querySelectorAll(".equipments");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        // 🔴 Clear সব
        if (value === "C") {
            expression = "";
            display.innerText = "";
        }

        // 🔴 Last delete
        else if (value === "🗑") {
            expression = expression.slice(0, -1);
            display.innerText = expression;
        }

        // 🔴 Calculate
        else if (value === "=") {
            try {
                let result = eval(expression);
                display.innerText = result;
                expression = result.toString();
            } catch {
                display.innerText = "Error";
                expression = "";
            }
        }

        // 🔴 Normal input
        else {
            // operator convert
            if (value === "➗") value = "/";
            if (value === "⛌") value = "*";
            if (value === "M") value = "%";  // 🔥 modulo

            expression += value;
            display.innerText = expression;
        }
    });
});
