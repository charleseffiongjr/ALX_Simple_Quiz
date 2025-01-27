function checkAnswer() {
    const correctAnswer = '4';
};
const selectedRadioButton = document.querySelector('input[name="quiz"]');
const userAnswer = document.querySelector(['checked, value = 4' ]);

if (correctAnswer === userAnswer){
    document.getElementById('#feedback').textContent = "Correct! well done";
} else {
    document.getElementById('#feedback').textContent = "That is incorrect, Try again"
}