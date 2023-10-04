// Count Text
let countSpan = document.querySelector('#content > span');

// Buttons
let decreaseBtn = document.querySelector('.btn-group > button:nth-child(1)');
decreaseBtn.addEventListener('click', decrease);
let resetBtn = document.querySelector('.btn-group > button:nth-child(2)');
resetBtn.addEventListener('click', reset);
let increaseBtn = document.querySelector('.btn-group > button:nth-child(3)');
increaseBtn.addEventListener('click', increase);

let counter = parseInt(countSpan.innerText);

function increase() {
    counter++; // counter = counter + 1
    countSpan.innerHTML = counter.toString();
}
function decrease() {
    counter--; // counter = counter - 1
    countSpan.innerHTML = counter.toString();
}
function reset() {
    counter = 0;
    countSpan.innerHTML = counter.toString();
}