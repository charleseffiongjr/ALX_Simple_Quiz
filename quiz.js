function checkAnswer() {
    const correctAnswer = '4';
};
const selectedRadioButton = document.querySelector('input[name="quiz"]');
const userAnswer = document.querySelector(['checked, value = 4' ]);

if (userAnswer === correctAnswer){
    document.getElementById('#feedback').textContent = ["Correct! Well done."];
} else {
    document.getElementById('#feedback').textContent = ["That is incorrect, Try again"];
}