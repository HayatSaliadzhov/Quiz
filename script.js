document.addEventListener("DOMContentLoaded", function () {
  const quiz = {
    name: "Quiz Time",
    questions: [
      {
        text: 'Какво е хиподинамия?',
        options: [
          "повишената захар в кръвта",
          "ниската физическа активност",
          "повишена гъвкавост",
        ],
        answer: "ниската физическа активност",
        wrongAnswerText: "Грешен отговор, направете 20 бърпита",
        wrongGif:
          "https://media2.giphy.com/media/l4pT6Obikzs5gxWSI/giphy.gif?cid=6c09b952fw6pwmgbxcvz7ywy31w1erryp3zm7jdzsf9a22du&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g", // Path to the GIF for wrong answer
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPNOjm-_gIUA-BPSTA1XUlhviMt6U9QiauR3TYvQANA&s',
      },
      {
        text: "По време на физическо натоварване:",
        options: ["Рязко започва да се понижава концентрацията на лактат (млечна киселина)  в кръвта", "намялява оксидативният капацитет на мускулите","се отделят опиумоподобни пептдидни вещества: ендорфини и енкефалини, произвеждащи се в хипофизата, които, свързвайки се със съответните мозъчни рецептори, упражняват успокоителен и обезболяващ ефект"],
        answer: "се отделят опиумоподобни пептдидни вещества: ендорфини и енкефалини, произвеждащи се в хипофизата, които, свързвайки се със съответните мозъчни рецептори, упражняват успокоителен и обезболяващ ефект",
        wrongAnswerText: "Грешен отговор, направете 15 лицеви опори ",
        wrongGif:
          "https://hips.hearstapps.com/hmg-prod/images/pushup-1462808858.gif",
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOWsqiPCbOgZtX2_I883L3egnu5JSKjQre1oi3oLxww&s',
      },
      {
        text: "Калориите, получени от простите източници на въглехидратите, могат да се разглеждат като",
        options: ["„богати“ калории","“празни” калории", "„важни“ калории"],
        answer: '“празни” калории',
        wrongAnswerText: "Грешен отговор, направете 20 скални катерача",
        wrongGif:
          "https://i.pinimg.com/originals/0b/3c/b4/0b3cb465e4a3a09139819e0bce4036a0.gif", 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIYaCuFODCc3YkmXtIL6G5cfFCnqEKc-FUG50cg0stWw&s',
      },
      {
        text: "Сложните въглехидрати се считат за висококачествени храни:",
        options: ["доставят бърза енергия на организма","водят до бързо покачване на кръвната захар","тъй като могат да се натрупват в организма във формата на глюкоза"],
        answer: 'тъй като могат да се натрупват в организма във формата на глюкоза',
        wrongAnswerText: 'Грешен отговор, направете 20 коремни преси',
        wrongGif: 'https://i.pinimg.com/originals/fb/7d/88/fb7d88e46efd63d70963c84c02974414.gif',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGlDAgGXbQzeBBhhtSN9wn0o6RRZwZ7ZcCEJNout1FlA&s',
      },
      {
        text: "„Основното гориво” за мускулите по време на физическо натоварване е?",
        options: ["гликогенът",'кислородът','body mass index, BMI'],
        answer: ['гликогенът'],
        wrongAnswerText: 'Грешен отговор, направете 45 секунди планк',
        wrongGif: 'https://cdn.jefit.com/assets/img/exercises/gifs/631.gif',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzL3Y-usk8wI94f1tzL1ubw1pyowmJHSJpeoavn3h1PQ&s',
      },
      {
        text: 'Извън тренировъчната залата препоръчително е поеманата вода да е:',
        options: ['20ml на килограм телесно тегло','30ml на килограм телесно тегло','10ml на килограм телесно тегло'],
        answer: '30ml на килограм телесно тегло',
        wrongAnswerText: 'Грешен отговор, направете 25 клека',
        wrongGif: 'https://i0.wp.com/b-reddy.org/wp-content/uploads/2021/01/Squat-GIF.gif?fit=860%2C860&ssl=1&w=640',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx52q7J1xMw9rhpr8v68NsGm9nIAZivNakMAoCWw_UHg&s',
      },
      {
        text: 'Водата (H2O) като основно хранително вещество изпълнява пластична функция. Колко процента е водата в човешкото тяло?',
        options: ['около 65% от телесната маса е вода','около 35% от телесната маса е вода','около 85% от телесната маса е вода'],
        answer: 'около 65% от телесната маса е вода',
        wrongAnswerText: 'Грешен отговор, направете обиколка на залата',
        wrongGif: 'https://i.pinimg.com/originals/f9/2e/1b/f92e1bb2a6789fff27bfd483145e0efc.gif',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgB4ywWeEDQjYvIe4h97FBHsJclRcgJE1x8QbI2NWCrw&s',

      },
      {
        text: 'Активната почивка се основава на явлението:',
        options: ['спиране на всякакви специални движения (почивка, докато стоите, седите, лежите)','3-5 минути масаж са еквивалентни на 20-30 минути пасивна почивка','при което дейността на някои нервни центрове помага за премахване на умората в други центрове'],
        answer: 'при което дейността на някои нервни центрове помага за премахване на умората в други центрове',
        wrongAnswerText: 'Грешен отговор, направете 20 Jumping Jacks',
        wrongGif: 'https://www.icegif.com/wp-content/uploads/jumping-jacks-icegif-5.gif',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEZgUNGXCOLw-mc0ATw5QHmuAzs1Vy4gnBIPZZIxbjQ&s',
      },
      {
        text: 'Олимпийският символ е една от най-разпознаваемите емблеми в света. Тя се състои от пет преплетени кръга – син, черен, червен, жълт и зелен. Символът е по предложение на френския барон Пиер дьо Кубертен и символизира ?',
        options: ['символизира петте континента - Участието на атлети от всички населени континенти: Северна Америка, Южна Америка, Африка, Евразия и Океания','Олимпиади се провеждат на всеки 5 години','Възможност за участие на състезател в до пет спорта.'],
        answer: 'символизира петте континента - Участието на атлети от всички населени континенти: Северна Америка, Южна Америка, Африка, Евразия и Океания',
        wrongAnswerText: 'Грешен отгвор, направете 20 sitting twitsts',
        wrongGif: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5bJmXXsM-h4lNkkpLi1gVH0aYxwet7iEtB_nRsmREw&s',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5N4Nvco8q86KR8rrcQpw20DmbjWHBbrrMHHox9Lrh6w&s',
      },
    ],
  };
  const quizContainer = document.getElementById("quiz-container");
  const quizTitle = document.getElementById("quiz-title");
  const questionContainer = document.getElementById("question-container");
  const optionsContainer = document.getElementById("options-container");
  const nextButton = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementsByClassName("close")[0];

  let currentQuestionIndex = 0;
  let totalScore = 0;

  function displayQuestion() {
    if (currentQuestionIndex < quiz.questions.length) {
        const currentQuestion = quiz.questions[currentQuestionIndex];
        quizTitle.textContent = quiz.name;
        
        // Create an image element
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const image = document.createElement("img");
        // Set the image source based on the current question
        image.src = currentQuestion.image;
        // Set any other image attributes as needed
        image.alt = "Question Image";
        // Append the image to the image container
        imageContainer.appendChild(image);
        // Append the image container to the question container
        questionContainer.innerHTML = "";
        questionContainer.appendChild(imageContainer);

        // Append the question text
        const questionText = document.createElement("div");
        questionText.textContent = currentQuestion.text;
        questionContainer.appendChild(questionText);

        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const input = document.createElement("input");
            input.type = "radio"; // Change input type to radio
            input.name = "answer"; // Set the same name for all radio inputs in a question group
            input.value = option;
            input.id = `option${index + 1}`; // Assign unique id for each radio input
            input.required = true;
            optionsContainer.appendChild(input);

            const label = document.createElement("label");
            label.textContent = option;
            label.setAttribute("for", `option${index + 1}`); // Associate label with radio input
            optionsContainer.appendChild(label);
            optionsContainer.appendChild(document.createElement("br"));
        });
        } else {
            // Hide question container and options container
            questionContainer.style.display = "none";
            optionsContainer.style.display = "none";
            nextButton.style.display = "none";
            showScore();
        }
    }
    // Function to display the modal with wrong answer text and GIF
    function displayWrongAnswerModal(wrongAnswerText, wrongGif) {
        const wrongGifElement = document.querySelector("#modal .gif");
        const wrongAnswerTextElement = document.querySelector("#modal #wrong-answer-text");
        wrongGifElement.src = wrongGif; // Set the source of the GIF
        wrongAnswerTextElement.textContent = wrongAnswerText; // Set the wrong answer text
        modal.style.display = "block";
    }

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    function checkAnswer() {
        const selectedOption = optionsContainer.querySelector("input[type='radio']:checked");
        if (selectedOption) {
            const selectedAnswer = selectedOption.value;
            const currentQuestion = quiz.questions[currentQuestionIndex];
            if (currentQuestion.answer.includes(selectedAnswer)) {
                totalScore++;
            } else {
                displayWrongAnswerModal(currentQuestion.wrongAnswerText, currentQuestion.wrongGif);
            }
        }
    }

    function showScore() {
        const scoreImageContainer = document.createElement("div");
        scoreImageContainer.classList.add("score-image-container");

        // Create an image element for the score page
        const scoreImage = document.createElement("img");
        scoreImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFKDyow2Mf8bpVKmzf5KHX8CtzQ6g_vjcIfivq79nUbA&s"; // Replace "score_image.jpg" with the path to your image
        scoreImage.alt = "Score Image";
        scoreImageContainer.appendChild(scoreImage);

        // Create a paragraph element for the score text
        const scoreText = document.createElement("p");
        scoreText.textContent = "Благодаря ви за участието! Резултат: " + totalScore + "/" + quiz.questions.length;
        scoreImageContainer.appendChild(scoreText);

        scoreContainer.appendChild(scoreImageContainer);
    }

    function nextQuestion() {
    checkAnswer();
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (!selectedOption) {
        // Display a message or alert to indicate that the user must select an option
        alert("Please select an option before proceeding.");
        return;
    } // Prevent further execution of the function
    currentQuestionIndex++;
    
    displayQuestion();
}

  displayQuestion();

  nextButton.addEventListener("click", nextQuestion);
});
