let questions = [
  {
    "question": "Welches Land ist bekannt für seine historischen Pyramiden?",
    "answer_1": "Indien",
    "answer_2": "Ägypten",
    "answer_3": "Mexiko",
    "answer_4": "China",
    "right_answer": 2
  },

  {
    "question": "Was ist die Hauptstadt von Australien?",
    "answer_1": "Sydney",
    "answer_2": "Canberra",
    "answer_3": "Melbourne",
    "answer_4": "Perth",
    "right_answer": 2
  },

  {
    "question": "Welche Stadt wird oft als 'die Stadt der Liebe' bezeichnet?",
    "answer_1": "Rom",
    "answer_2": "Paris",
    "answer_3": "Venedig",
    "answer_4": "Madrid",
    "right_answer": 2
  },

  {
    "question": "Welche Insel ist bekannt für ihre Moai-Statuen?",
    "answer_1": "Fidschi",
    "answer_2": "Osterinsel",
    "answer_3": "Bali",
    "answer_4": "Sizilien",
    "right_answer": 2
  },

  {
    "question": "Welches Land ist berühmt für seine Fjorde?",
    "answer_1": "Schweden",
    "answer_2": "Norwegen",
    "answer_3": "Neuseeland",
    "answer_4": "Kanada",
    "right_answer": 2
  },

  {
    "question": "Welche Stadt ist bekannt für den Karnak-Tempel?",
    "answer_1": "Kairo",
    "answer_2": "Luxor",
    "answer_3": "Alexandria",
    "answer_4": "Aswan",
    "right_answer": 2
  },

  {
    "question": "Welches Land hat die meisten Inseln weltweit?",
    "answer_1": "Griechenland",
    "answer_2": "Schweden",
    "answer_3": "Indonesien",
    "answer_4": "Philippinen",
    "right_answer": 2
  },

  {
    "question": "Welche Stadt ist bekannt für den Sitz des Papstes?",
    "answer_1": "Mailand",
    "answer_2": "Vatikanstadt",
    "answer_3": "Florenz",
    "answer_4": "Neapel",
    "right_answer": 2
  },

  {
    "question": "Welcher Berg ist der höchste Gipfel der Welt?",
    "answer_1": "K2",
    "answer_2": "Mount Everest",
    "answer_3": "Mount Kilimanjaro",
    "answer_4": "Mont Blanc",
    "right_answer": 2
  },

  {
    "question": "In welchem Land befindet sich die Ruinenstadt Machu Picchu?",
    "answer_1": "Brasilien",
    "answer_2": "Peru",
    "answer_3": "Chile",
    "answer_4": "Kolumbien",
    "right_answer": 2
  },

];

let currentQuestion = 0;
let correctAnswersCurrent = 0;

function initQuiz() {
  document.getElementById('questionLength').innerHTML = questions.length;
  document.getElementById('positionQuestion').innerHTML = currentQuestion + 1;
  renderQuestion();
}

function renderQuestion() {
  let question = questions[currentQuestion];

  document.getElementById('showQuestion').innerHTML = question['question'];
  document.getElementById('showAnswer_1').innerHTML = question['answer_1'];
  document.getElementById('showAnswer_2').innerHTML = question['answer_2'];
  document.getElementById('showAnswer_3').innerHTML = question['answer_3'];
  document.getElementById('showAnswer_4').innerHTML = question['answer_4'];
}

function answer(selction) {
  let question = questions[currentQuestion];
  let answer = selction.slice(-1);

  let idOfRightAnswer = `showAnswer_${question['right_answer']}`;

  if (question['right_answer'] == answer) {
    document.getElementById(selction).classList.add('background-color-correct');
    correctAnswersCurrent++;
  } else {
    document.getElementById(selction).classList.add('background-color-wrong');
    document.getElementById(idOfRightAnswer).classList.add('background-color-correct');
  }
  document.getElementById('nextQuestionButton').disabled = false;
}

function nextQuestion() {
  if (currentQuestion +1 >= questions.length) {
    endScreen();
  } else {
  currentQuestion++
  initQuiz();
  resetQuestionColor();
}
}

function resetQuestionColor() {
  for (let i = 1; i <= 4; i++) {
    document.getElementById(`showAnswer_${i}`).classList.remove('background-color-correct');
    document.getElementById(`showAnswer_${i}`).classList.remove('background-color-wrong');
  }
}

function endScreen() {
document.getElementById('quizContainer').classList.add('d-none');
document.getElementById('endScreen').classList.remove('d-none');

document.getElementById('endQuestionLenght').innerHTML = questions.length;
document.getElementById('endPointsQuestion').innerHTML = correctAnswersCurrent;

if (correctAnswersCurrent < 5) {
  document.getElementById('showEndScreenText').innerHTML = 'Leider hast du nicht viele Fragen richtig beantwortet übe weiter um besser zu werden';
} else if (correctAnswersCurrent >= 7 && correctAnswersCurrent < 10) {
  document.getElementById('showEndScreenText').innerHTML = 'Sehr gut das hast fast alle Fragen richtig beantwortet du bist Bombe und kannst sehr Stolz auf dich sein';
} else if (correctAnswersCurrent >= 5 && correctAnswersCurrent < 7) {
  document.getElementById('showEndScreenText').innerHTML = 'Du hast die hälfte der fragen richtig beatwortet du kannst stolz auf dich sein aber da geht noch mehr';
} else if (correctAnswersCurrent === 10) {
  document.getElementById('showEndScreenText').innerHTML = 'Herzlichen Glückwunsch du hast alle Fragen richtig beantwortet du bist ein Naturtalent weiter so';
}

}



