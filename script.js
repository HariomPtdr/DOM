const buttons = document.querySelectorAll(".btn");
const body = document.body;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        
        buttons.forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        body.style.background = btn.id;

        if (btn.id === "yellow") {
            body.style.color = "black";
        } else {
            body.style.color = "white";
        }
    });
});
