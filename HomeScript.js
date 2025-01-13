
    document.getElementById("html-btn").addEventListener("click", () => {
       
        localStorage.setItem("selectedQuiz", "htmlQus.json");
       
        window.location.href = "QuizPage.html";
    });

    document.getElementById("CSS-btn").addEventListener("click", () => {
       
        localStorage.setItem("selectedQuiz", "cssQus.json");
        
        window.location.href = "QuizPage.html";
    });

    document.getElementById("Js-btn").addEventListener("click", () => {
       
        localStorage.setItem("selectedQuiz", "jsQus.json");
        
        window.location.href = "QuizPage.html";
    });

