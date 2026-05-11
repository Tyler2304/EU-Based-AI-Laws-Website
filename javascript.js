// a function that allows the answers to not be visible unless clicked by the user
function QNA() {
    const questions = 
    document.querySelectorAll(".question");

    questions.forEach((question) => {
        question.addEventListener("click", () => {
            question.classList.toggle("active");
            const answer = question.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
    });
});
};

//function for generating the unique ID for users when first loading the site
function uniqueID() {
    const key = 'userid';
    let id = localStorage.getItem(key);
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem(key, id);
    }
    const element = document.getElementById('displayid');
    if (element) element.textContent = id;
    return id;
};

// function for making the popup appear when page is launched
function showPopup() {
    const display = document.getElementById("popup");
    const exitBut = document.getElementById("exit");

    display.showModal();
    if (exitBut.addEventListener("click", () => display.close())); 
};

document.addEventListener("DOMContentLoaded", () => {
    uniqueID();
    showPopup();
    QNA();
});
