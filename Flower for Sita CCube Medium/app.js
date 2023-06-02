const buttons = document.querySelectorAll(".box-btn");
const popups = document.querySelectorAll(".popups");
console.log(popups);

buttons.forEach((btn) => {
    btn.addEventListener("click", function(e){
            console.log(e.target);
        })
})