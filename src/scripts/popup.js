let closeArray = document.querySelectorAll(".closePopup");
const popup = document.querySelector("#popupBackground");
const popupBox = document.querySelector("#popup");

setTimeout(function() {
    popup.style.display = "flex";
}, 15000);

closeArray.forEach(item => {
    item.addEventListener("click", function (){
        popup.style.display = "none";
    }); 
});
let check = 0;
popupBox.addEventListener("click", function () {
    check = 1;
});

popup.addEventListener("click", e => {

    if (check == 0) {
        popup.style.display = "none";
    }
    console.log(check);
    check = 0;
});



