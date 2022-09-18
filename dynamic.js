let keys = document.querySelectorAll(".key");
let keyData;

document.addEventListener("keydown", function (event) {
    keyData = event.key;
    keys.forEach(function (key) {
        if (key.innerHTML === keyData || key.innerHTML === keyData.toUpperCase() || key.id === keyData || key.id === event.code) {
            key.classList.add('key--held');
        }
    })
    console.log(keyData);

})
document.addEventListener("keyup", function (event) {
    event.preventDefault();
    keyData = event.key;
    keys.forEach(function (key) {
        if (key.innerHTML === keyData || key.innerHTML === keyData.toUpperCase() || key.id === keyData || key.id === event.code || event.which===91) {
            key.classList.remove('key--held');
            key.classList.add('key--selected');
        }
    })
})