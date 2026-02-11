// script3.js
const coinCountEl = document.getElementById("coinCount");
const plusBtn = document.getElementById("plusBtn");
const minusBtn = document.getElementById("minusBtn");

let coins = 0;

plusBtn.addEventListener("click", () => {
coins++;
coinCountEl.textContent = coins;
});

minusBtn.addEventListener("click", () => {
if (coins > 0) {
    coins--;
    coinCountEl.textContent = coins;
}
});
