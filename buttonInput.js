document.addEventListener("DOMContentLoaded", () => {
    let displayProb = document.querySelector(".inputField.active");
    let displayAns = document.querySelector(".answer.active");
    const buttons = document.querySelectorAll(".btnFieldInput");
    const equalsButton = document.getElementById("equals");
    const clearEntry = document.getElementById("clearEntry");
    const del = document.getElementById("delete");
    displayProb.value = "";

    // Function to update display with button value
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            console.log(button);
            displayProb.value += button.getAttribute("data-value");

            console.log(displayProb.value.length);
        });
    });

    // Evaluate the expression on equals button click
    equalsButton.addEventListener("click", () => {
        try {
            if (displayProb.value != "") {
                displayAns.innerHTML = eval(displayProb.value);

                console.log(eval(displayProb.value));

                displayProb.classList.remove("active");
                displayAns.classList.remove("active");

                console.log("WORKING");
                const newItem = document.createElement("div");
                newItem.className = "calcScreenItem";
                newItem.innerHTML = `<input class="inputField active" maxlength="20" type="text" />
                        <div class="answer active"></div>`;
                document.querySelector(".calcScreen").appendChild(newItem);
                console.log("IS THIS SHIT EVEN WORKING");

                displayProb = document.querySelector(".inputField.active");
                displayAns = document.querySelector(".answer.active");
            }
            // catches errors and  throws message
        } catch (e) {
            console.log(e);
            displayAns.innerHTML = "Error";
        }
    });
    // Delete one character from input when del button is clicked

    del.addEventListener("click", () => {
        let lastCharPlace = displayProb.value.length - 1;
        let newDisplayProbValue = "";

        for (let x = 0; x < lastCharPlace; x++) {
            newDisplayProbValue += displayProb.value[x];
        }
        displayProb.value = newDisplayProbValue;
    });
    //   Clear the current entry on ce button click
    clearEntry.addEventListener("click", () => {
        displayProb.value = "";
    });
});
