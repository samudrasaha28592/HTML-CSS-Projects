
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let val = btn.value;

        if (val === "C") {
            result.value = "";
        }
        else if (val === "DEL") {
            result.value = result.value.slice(0, -1);
        }
        else if (val === "=") {
            result.value = eval(result.value.replace(/x/g, "*"));
        }
        else {
            result.value += val;
        }
    });
});

