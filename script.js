const promptInput = document.getElementById("promptInput");
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
const message = document.getElementById("message");

submitBtn.addEventListener("click", function () {

    const prompt = promptInput.value.trim();

    if (prompt === "") {

        message.textContent = "Please enter a prompt!";
        output.textContent = "No prompt submitted yet.";

        return;
    }

    message.textContent = "";

    output.textContent = prompt;

    promptInput.value = "";

});