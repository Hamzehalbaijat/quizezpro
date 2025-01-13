document.addEventListener("DOMContentLoaded", () => {

    const userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
    const correctAnswers = JSON.parse(sessionStorage.getItem("correctAnswers"));
    const questions = JSON.parse(sessionStorage.getItem("questions"));
    const score = sessionStorage.getItem("score");

    const correctCount = userAnswers.filter((answer, index) => answer === correctAnswers[index]).length;
    const totalQuestions = questions.length;
    const percentage = ((correctCount / totalQuestions) * 100).toFixed(2);

    const resultText = `${correctCount} of ${totalQuestions} Points (${percentage}%)`;
    document.querySelector(".highlight").textContent = resultText;

    const statusText = percentage >= 50 ? "PASSED" : "FAILED";
    const statusElement = document.querySelector(".status");

 
    if (statusText === "PASSED") {
      statusElement.classList.add("passed");
      statusElement.classList.remove("failed");
      document.querySelector("#congratulations-message").textContent = "Congratulations, you’ve successfully passed the test!";
      document.querySelector("#result-image").src = "passed.png";
    } else {
      statusElement.classList.add("failed");
      statusElement.classList.remove("passed");
      document.querySelector("#congratulations-message").textContent = "Sorry, you have failed the test. Better luck next time.";
      document.querySelector("#result-image").src = "fail.png"; 
    }

    statusElement.textContent = statusText;

    const questionsTableBody = document.querySelector("#questions-table tbody");
    questions.forEach((question, index) => {
      const row = document.createElement("tr");

      const questionCell = document.createElement("td");
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = `Question ${index + 1}: ${question.question}`;
      details.appendChild(summary);

      const div = document.createElement("div");
      const userAnswer = question.answers[userAnswers[index] - 1]; 
      const correctAnswer = question.answers[correctAnswers[index] - 1]; 
      
      if(userAnswers[index] === null){
        div.innerHTML = `
        <p>Your Answer: No Answer</p>
        <p>Correct Answer: ${correctAnswer}</p>
      `;

      }else{
        div.innerHTML = `
        <p>Your Answer: ${userAnswer}</p>
        <p>Correct Answer: ${correctAnswer}</p>
      `;

      }
      details.appendChild(div);
      questionCell.appendChild(details);
      row.appendChild(questionCell);

      if (userAnswers[index] === correctAnswers[index]) {

        summary.classList.add("correct");

      }
      
       else {
    
        summary.classList.add("incorrect");

      }

      questionsTableBody.appendChild(row);
    });

    document.getElementById("show-results-Buttons").addEventListener("click", () => {
      const questionsTable = document.getElementById("questions-table");
      if (questionsTable.style.display === "none" || !questionsTable.style.display) {
        questionsTable.style.display = "table";
        document.getElementById("Try-again").style.display = 'inline'

        document.getElementById("show-results-Buttons").textContent = "Hide Results";
      } else {
        questionsTable.style.display = "none";
        document.getElementById("Try-again").style.display = 'none'
        document.getElementById("show-results-Buttons").textContent = "Show Results";
      }
    });

    document.getElementById("Try-again").addEventListener("click", () => {
      window.location.href = 'QuizPage.html'; 
    });
    document.getElementById("go-home-btn").addEventListener("click", () => {
      window.location.href = 'musabHome.html' 
    });
  });