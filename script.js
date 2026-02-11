const levelBadge = document.getElementById("levelBadge");
const levelText = document.getElementById("levelText");
const levelUpBtn = document.getElementById("levelUpBtn");

let level = 1; 
const maxLevel = 6; 

levelUpBtn.addEventListener("click", () => {
if (level < maxLevel) {
    level++;
    levelBadge.textContent = level;
    levelText.textContent = `You are at Level ${level}`;
}
});
