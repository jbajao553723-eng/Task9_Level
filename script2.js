document.getElementById("submitBtn").onclick = function() {
let name = document.getElementById("nameInput").value.trim();
let msg = document.getElementById("message");

if (name === "") {
    msg.textContent = "Name cannot be empty!";
    msg.style.color = "red";
} else {
    msg.textContent = "Welcome, " + name + "!";
    msg.style.color = "green";
}
};
