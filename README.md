# Quiz_Master
## Date: 11-07-2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)


## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>QuizMaster</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
 
 
  <h1>QuizMaster</h1>

  <div class="quiz-card">
  <p>Question 1: Who wrote "Hamlet"?</p>
  <input type="text" id="q1">

  <p>Question 2: What is the square root of 49?</p>
  <input type="text" id="q2">

  <p>Question 3: What does HTML stand for?</p>
  <input type="text" id="q3">

  <p>Question 4: What planet is known as the Red Planet?</p>
  <input type="text" id="q4">

  <p>Question 5: What is the traditional Japanese garment called?</p>
  <input type="text" id="q5">
</div>


  <button onclick="calculateScore(strictScoring)">Check Score (Strict)</button>
  <button onclick="calculateScore(lenientScoring)">Check Score (Lenient)</button>

  <p id="finalScore"></p>

  

  <script src="script.js"></script>
</body>
</html>

```

## CSS Code:
```
body 
{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f6ff;
  font-family: 'Segoe UI', Tahoma, sans-serif;
  padding: 40px;
  color: #2e2e2e;
}

.quiz-card 
{
  border: 2px solid #d0c4f6;
  width: 30%;
  padding: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px 15px rgba(128, 90, 213, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 
{
  margin-top: 0%;
  text-align: center;
  color: #7c3aed;
}

input 
{
  width: 300px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline-color: #7c3aed;
}

button 
{
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 6px;
  background-color: #ff6b6b;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover 
{
  background-color: #e65a5a;
}

#finalScore 
{
  margin-top: 25px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #7c3aed;
}


```

## JavaScript Code:
```
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

```

## Output:
<img width="1919" height="1010" alt="image" src="https://github.com/user-attachments/assets/43d9241a-b737-4a9e-b79d-43af220f5f12" />

<img width="1919" height="1007" alt="image" src="https://github.com/user-attachments/assets/911d00f8-8ade-41f9-8620-ee2b90fc3f50" />



## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
