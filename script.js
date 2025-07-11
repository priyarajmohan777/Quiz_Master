function calculateScore(checkAnswers) {
  const questions = [
    document.getElementById('q1').value,
    document.getElementById('q2').value,
    document.getElementById('q3').value,
    document.getElementById('q4').value,
    document.getElementById('q5').value
  ];

  const score = checkAnswers(questions);
  document.getElementById('finalScore').textContent = "Your Score: " + score + " / 5";
}

function strictScoring(answers) {
  const correctAnswers = [
    "Shakespeare",
    "7",
    "HyperText Markup Language",
    "Mars",
    "Kimono"
  ];

  let total = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (answers[i] === correctAnswers[i]) {
      total++;
    }
  }

  return total;
}

function lenientScoring(answers) {
  const correctAnswers = [
    "Shakespeare",
    "7",
    "HyperText Markup Language",
    "Mars",
    "Kimono"
  ];

  let total = 0;

  for (let i = 0; i < correctAnswers.length; i++) {
    if (answers[i].toLowerCase().trim() === correctAnswers[i].toLowerCase()) {
      total++;
    }
  }

  return total;
}
