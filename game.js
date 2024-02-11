const start = document.getElementById('start');
const notstarted = document.getElementById('not-started');
const game = document.getElementById('game');

// Starting logic

start.addEventListener('click', () => {
    notstarted.animate([
        { opacity: 1 },
        { opacity: 0 }
    ], {
        duration: 1000,
        iterations: 1
    });
    setTimeout(() => {
        notstarted.style.display = 'none';
        game.animate([
            { opacity: 0 },
            { opacity: 1 }
        ], {
            duration: 1000,
            iterations: 1
        });
        setTimeout(() => {
            game.style.display = 'block';
        }, 1000);
    }, 1000);
    startGame();
});


// Languages

const languages = [
    {
        name: 'Korean',
        sample1: '안녕하세요! 한국어로 된 샘플 메시지입니다.',
        sample1_en: 'Hello! This is a sample message in Korean.',
        sample2: '우리 삶의 목적은 행복해지는 것입니다." - 달라이 라마',
        sample2_en: 'The purpose of our lives is to be happy." - Dalai Lama',
        sample3: '사랑은 무엇보다도 무엇인가를 이해하는 것입니다.',
        sample3_en: 'Love is understanding more than anything else.',
        sample4: '사랑은 무엇보다도 무엇인가를 이해하는 것입니다.',
        sample4_en: 'Love is understanding more than anything else.',
    },
    {
        name: 'Japanese',
        sample1: '「人生とは、他の計画を立てるのに忙しいときに起こるものだ」 — ジョン・レノン',
        sample1_en: 'Life is what happens when you are busy making other plans." - John Lennon',
        sample2: '「成功とは、熱意を失わずに失敗を繰り返していくことだ」 — ウィンストン・チャーチル',
        sample2_en: 'Success is going from failure to failure without losing enthusiasm." - Winston Churchill',
        sample3: '「人生で一番しがみついているのはお互いだ」 — オードリー・ヘプバーン',
        sample3_en: 'The most important thing is to hold on to each other." - Audrey Hepburn',
        sample4: '「あなたは思っているよりも勇敢で、見た目よりも強く、思っているよりも賢いのです」',
        sample4_en: 'You are braver than you believe, stronger than you seem, and smarter than you think."',
    },
    {
        name: 'Spanish',
        sample1: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes." - John Lennon',
        sample1_en: 'Life is what happens while you are busy making other plans." - John Lennon',
        sample2: 'El éxito es ir de fracaso en fracaso sin perder el entusiasmo." - Winston Churchill',
        sample2_en: 'Success is going from failure to failure without losing enthusiasm." - Winston Churchill',
        sample3: 'Lo más importante en la vida es aprender a dar amor y dejarlo entrar." - Morrie Schwartz',
        sample3_en: 'The most important thing in life is to learn how to give out love, and to let it come in." - Morrie Schwartz',
        sample4: 'Ser profundamente amado por alguien te da fuerza, mientras que amar a alguien profundamente te da coraje." - Lao Tzu',
        sample4_en: 'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." - Lao Tzu',
    },
    {
        name: 'French',
        sample1: 'La vie est ce qui arrive quand on est occupé à faire d’autres plans." - John Lennon',
        sample1_en: 'Life is what happens when you are busy making other plans." - John Lennon',
        sample2: 'Le succès, c’est d’aller d’échec en échec sans perdre son enthousiasme." - Winston Churchill',
        sample2_en: 'Success is going from failure to failure without losing enthusiasm." - Winston Churchill',
        sample3: 'Il est plus important de savoir quel type de personne a une maladie que de savoir quel type de maladie a une personne." - Hippocrate',
        sample3_en: 'It is more important to know what sort of person has a disease than to know what sort of disease a person has." - Hippocrates',
        sample4: 'Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction." - Antoine de Saint-Exupéry',
        sample4_en: 'Love does not consist in gazing at each other, but in looking outward together in the same direction." - Antoine de Saint-Exupéry',
    },
    {
        name: 'German',
        sample1: 'Das Leben ist das, was passiert, während du beschäftigt bist, andere Pläne zu machen." - John Lennon',
        sample1_en: 'Life is what happens while you are busy making other plans." - John Lennon',
        sample2: 'Erfolg ist, von Misserfolg zu Misserfolg zu gehen, ohne seinen Enthusiasmus zu verlieren." - Winston Churchill',
        sample2_en: 'Success is going from failure to failure without losing enthusiasm." - Winston Churchill',
        sample3: 'Das Wichtigste im Leben ist nicht, was uns passiert, sondern wie wir darauf reagieren." - Epiktet',
        sample3_en: 'The most important thing in life is not what happens to us, but how we respond to what happens to us." - Epictetus',
        sample4: 'Liebe ist nicht das, was man erwartet zu bekommen, sondern das, was man bereit ist zu geben." - Katharine Hepburn',
        sample4_en: 'Love is not about what you expect to get, but what you are prepared to give." - Katharine Hepburn',
    }
];

// Game logic
const gametext = document.getElementById('language');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');

const scoreDisplay = document.getElementById('score');
const highscoreDisplay = document.getElementById('highest');

let currentLanguage = 0;
let currentSample = 0;
let cindex = 0;
let choice;
let correctBtn;

let score = 0;
let highscore = localStorage.getItem('highscore');
if (highscore === null) {
    highscore = 0;
}

function startGame() {
    currentLanguage = Math.floor(Math.random() * languages.length);
    currentSample = Math.floor(Math.random() * 4);
    cindex = Math.floor(Math.random() * 4);

    samples = ['sample1', 'sample2', 'sample3', 'sample4'];

    gametext.textContent = languages[currentLanguage][samples[currentSample]];
    
    correctBtn = Math.floor(Math.random() * 4);
    
    choice = [choice1, choice2, choice3, choice4];
    choice[correctBtn].textContent = languages[currentLanguage].name;
    
    choice = choice.filter((c, i) => i !== correctBtn);

    for (let i = 0; i < 3; i++) {
        content = languages[Math.floor(Math.random() * languages.length)].name;
        if (content !== languages[currentLanguage].name) {
            choice[i].textContent = content;
        } else {
            i--;
        }
    }
}

function updateScore() {
    score++;
    scoreDisplay.textContent = score;
    if (score > highscore) {
        highscore = score;
        highscoreDisplay.textContent = highscore;
    }
}

function correct(button) {
    button.style.backgroundColor = 'green';
    updateScore();
    localStorage.setItem('highscore', score);
    setTimeout(() => {
        button.style.backgroundColor = 'var(--bg-accent)';
        startGame();
    }, 1000);
}

function incorrect(button) {
    button.style.backgroundColor = 'red';
    score = 0;
    scoreDisplay.textContent = score;
    highscoreDisplay.textContent = highscore;
    setTimeout(() => {
        button.style.backgroundColor = 'var(--bg-accent)';
        startGame();
    }, 1000);
}

let buttons = [choice1, choice2, choice3, choice4];
buttons.forEach((button, i) => {
    button.addEventListener('click', () => {
        if (i === correctBtn) {
            correct(button);
        } else {
            incorrect(button);
            let correctButton = buttons[correctBtn];
            correctButton.style.backgroundColor = 'green';
            setTimeout(() => {
                correctButton.style.backgroundColor = 'var(--bg-accent)';
            }, 1000);
        }
    });
});