// Access the input field and buttons
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

// Focus on the input field to start with a blinking cursor
window.onload = function() {
    input.focus();
};

// Handle button clicks
// For using all the buttons , we make an array named arr
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
            } catch {
                input.value = "Error";
                string = "";
            }
        } 
        // All clear button
        else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        }
        // Delete button
        else if (e.target.innerHTML == 'DEL') {
            if (cursorPosition > 0) {
                // Remove character before cursor position
                string = string.slice(0, cursorPosition - 1) + string.slice(cursorPosition);
                input.value = string;
                input.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
            }
        } 
        else {
            let buttonValue = e.target.innerHTML;
            // Handle input of digits and operators
            if (input.value === "0") {
                // Replace leading zero if present
                string = buttonValue;
            } else {
                string = string.slice(0, cursorPosition) + buttonValue + string.slice(cursorPosition);
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


