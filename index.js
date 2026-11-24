const buttons = document.querySelectorAll(".btn");
const message = document.getElementById("message");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        message.innerHTML = "You clicked the " +
                            this.innerText + " button!";
    });
});