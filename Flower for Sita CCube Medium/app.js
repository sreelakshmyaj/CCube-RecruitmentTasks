// const buttons = document.querySelectorAll(".box-btn");

// buttons.forEach((btn) => {
//     btn.addEventListener("click", function(e){
//             var x 
//         })
// })

function show(id) {
    var popup = document.getElementById(id);
    console.log(popup);
    popup.style.display = 'flex';
}

function hide(id) {
    var popup = document.getElementById(id);
    console.log(popup);
    popup.style.display = 'none';
}