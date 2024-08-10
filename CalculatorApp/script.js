// Access the input field and buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let operationPerformed = false;

// Focus on the input field to start with a blinking cursor
window.onload = function() {
    input.focus();
};

// Handle button clicks
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let cursorPosition = input.selectionStart;

        if (e.target.innerHTML == '=') {
            try {
                string = eval(string).toString();
                input.value = string;
                // Reset the cursor position to the end of the result
                input.setSelectionRange(string.length, string.length);
                operationPerformed = true; // Mark that an operation has been performed
            } catch {
                input.value = "Error";
                string = "";
                operationPerformed = false;
            }
        } 
        // All clear button
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
            operationPerformed = false; // Reset the flag
        }
        // Delete button
        else if (e.target.innerHTML == 'DEL') {
            if (cursorPosition > 0) {
                // Remove character before cursor position
                string = string.slice(0, cursorPosition - 1) + string.slice(cursorPosition);
                input.value = string;
                input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
            }
            operationPerformed = false; // Ensure the flag is reset
        } 
        else {
            let buttonValue = e.target.innerHTML;

            // Handle input of digits and operators
            if (operationPerformed && !isNaN(buttonValue)) {
                // If an operation was performed and a digit is clicked, clear the screen
                string = buttonValue;
                operationPerformed = false; // Reset the flag
            } else {
                if (input.value === "0" && !isNaN(buttonValue)) {
                    // Replace leading zero if present
                    string = buttonValue;
                } else {
                    string = string.slice(0, cursorPosition) + buttonValue + string.slice(cursorPosition);
                }
            }

            input.value = string;
            input.setSelectionRange(cursorPosition + buttonValue.length, cursorPosition + buttonValue.length);
        }

        // Ensure the input field remains focused and cursor blinks
        input.focus();
    });
});

// Prevent keyboard input
document.addEventListener('keydown', (e) => {
    e.preventDefault();
});


