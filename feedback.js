function saveFeedback() {
    let fb = document.getElementById("feedback").value;

    if (fb.trim() === "") {
        alert("Please enter feedback!");
        return;
    }

    let stored = JSON.parse(localStorage.getItem("feedbackList") || "[]");
    stored.push(fb);
    localStorage.setItem("feedbackList", JSON.stringify(stored));

    document.getElementById("feedback").value = "";
    displayFeedback();
}

function displayFeedback() {
    let stored = JSON.parse(localStorage.getItem("feedbackList") || "[]");
    let list = document.getElementById("feedbackList");

    list.innerHTML = "";
    stored.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

window.onload = displayFeedback;
