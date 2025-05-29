function nextPage() {
  // Get the value from the input box with id="answer1"
  const answer = document.getElementById("answer1").value;

  // Store the answer in the browser's localStorage
  localStorage.setItem("answer1", answer);

  // Redirect to the next page (question2.html)
  window.location.href = "question2.html";
}