const correctDoor = 2;

function checkDoor(choice) {
const result = document.getElementById("result");
if (choice === correctDoor) {
    result.textContent = "Correct Door!";
    result.style.color = "green";
} else {
    result.textContent = "Wrong door, try again!";
    result.style.color = "red";
}
}
