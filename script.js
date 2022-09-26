let display = document.querySelector('#display');
let numbers = document.querySelectorAll('.numbers');

for (item of numbers) {
    item.addEventListener('click', (e) => {
        numbershtml = e.target.innerHTML;
        display.value += numbershtml;

    });
}

function sin() {
    display.value = Math.sin(display.value);
}

function cos() {
    display.value = Math.cos(display.value);
}

function tan() {
    display.value = Math.tan(display.value);
}

function log() {
    display.value = Math.log(display.value);
}