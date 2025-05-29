function nextPage() {
  // Get the value from the input box with id="answer1"
  const answer = document.getElementById("answer1").value;

  // Store the answer in the browser's localStorage
  localStorage.setItem("answer1", answer);

  // Redirect to the next page (question2.html)
  window.location.href = "question2.html";
}

function loadAnswer1() {
  const stored = localStorage.getItem("answer1");
  if (stored !== null) {
    const el = document.getElementById("answer1-display");
    if (el) {
      el.textContent = stored;
    }
  }
}

function finishSurvey() {
  const answer = document.getElementById("answer2").value;
  localStorage.setItem("answer2", answer);
  alert("Thanks for completing the survey!");
}
