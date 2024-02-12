const start = document.getElementById('start');
const notstarted = document.getElementById('not-started');
const game = document.getElementById('game');
const langnum = document.getElementById('lang-number');

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
    },
    {
        name: 'Italian',
        sample1: 'Il vero viaggio di scoperta non consiste nel cercare nuove terre, ma nell’avere nuovi occhi." - Marcel Proust',
        sample1_en: 'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes." - Marcel Proust',
        sample2: 'Nella vita non si può mai tornare indietro, solo andare avanti." - Haruki Murakami',
        sample2_en: 'In life, you can never go back, only forward." - Haruki Murakami',
        sample3: 'La felicità non è qualcosa di già pronto. Viene dalle tue azioni." - Dalai Lama',
        sample3_en: 'Happiness is not something ready-made. It comes from your own actions." - Dalai Lama',
        sample4: 'Dove c’è amore, c’è vita." - Mahatma Gandhi',
        sample4_en: 'Where there is love, there is life." - Mahatma Gandhi',
    },
    {
        name: 'Russian',
        sample1: 'Мы все в ответе за тех, кого приручили." - Антуан де Сент-Экзюпери',
        sample1_en: 'We are responsible for those who we have tamed." - Antoine de Saint-Exupéry',
        sample2: 'Жизнь – это то, что с тобой происходит, пока ты строишь планы." - Аллен Сондерс',
        sample2_en: 'Life is what happens to you while you’re busy making other plans." - Allen Saunders',
        sample3: 'Счастье можно найти даже в самые темные времена, если не забывать обращаться к свету." - Дж.К. Роулинг',
        sample3_en: 'Happiness can be found even in the darkest of times, if one only remembers to turn on the light." - J.K. Rowling',
        sample4: 'Лучше горькая правда, чем сладкая ложь." - Федор Достоевский',
        sample4_en: 'Better a bitter truth than a sweet lie." - Fyodor Dostoevsky',
    },
    {
        name: 'Mandarin Chinese',
        sample1: '最困难的事情就是认识自己。" - 苏格拉底',
        sample1_en: 'The hardest thing in life is to know yourself." - Socrates',
        sample2: '智者不惑，仁者不忧，勇者不惧。" - 孔子',
        sample2_en: 'The wise are not perplexed, the benevolent are not anxious, the brave are not afraid." - Confucius',
        sample3: '千里之行，始于足下。" - 老子',
        sample3_en: 'A journey of a thousand miles begins with a single step." - Laozi',
        sample4: '天下无难事，只怕有心人。" - 俗语',
        sample4_en: 'Nothing is difficult to the man who will try." - Chinese Proverb',
    },
    {
        name: 'Arabic',
        sample1: 'العقل زينة." - مثل عربي',
        sample1_en: 'Intellect is an ornament." - Arab Proverb',
        sample2: 'الصبر مفتاح الفرج." - مثل عربي',
        sample2_en: 'Patience is the key to relief." - Arab Proverb',
        sample3: 'الكتابة تحيا أكثر من الناس." - نجيب محفوظ',
        sample3_en: 'Writing lives longer than people." - Naguib Mahfouz',
        sample4: 'لا تعد الأيام، اجعل الأيام تعد." - محمد علي',
        sample4_en: 'Don’t count the days, make the days count." - Muhammad Ali',
    },
    {
        name: 'Portuguese',
        sample1: 'A vida é feita de escolhas." - Provérbio popular',
        sample1_en: 'Life is made of choices." - Popular Saying',
        sample2: 'O sucesso nasce do querer, da determinação e persistência." - Ayrton Senna',
        sample2_en: 'Success comes from desire, determination, and persistence." - Ayrton Senna',
        sample3: 'A simplicidade é o último grau de sofisticação." - Leonardo da Vinci',
        sample3_en: 'Simplicity is the ultimate sophistication." - Leonardo da Vinci',
        sample4: 'Nossa maior glória não está em nunca falhar, mas em nos levantar cada vez que falhamos." - Confúcio',
        sample4_en: 'Our greatest glory is not in never failing, but in rising every time we fall." - Confucius',
    },
    {
        name: 'Hindi',
        sample1: 'जीवन वह होता है जो आपके साथ घटित होता है जब आप अन्य योजनाएं बना रहे होते हैं।" - जॉन लेनन',
        sample1_en: 'Life is what happens to you while you are busy making other plans." - John Lennon',
        sample2: 'सपने वो नहीं होते जो हम सोते वक्त देखते हैं, सपने वो होते हैं जो हमें सोने नहीं देते।" - ए.पी.जे. अब्दुल कलाम',
        sample2_en: 'Dreams are not those which we see while we are sleeping, but dreams are those which do not let us sleep." - A.P.J. Abdul Kalam',
        sample3: 'खुशियों की चाभी आपकी सोच में है।" - महात्मा गांधी',
        sample3_en: 'The key to happiness is in your thoughts." - Mahatma Gandhi',
        sample4: 'समय ही धन है।" - प्रोवर्ब',
        sample4_en: 'Time is money." - Proverb',
    },
    {
        name: 'Dutch',
        sample1: 'Het leven is wat je gebeurt terwijl je andere plannen maakt." - John Lennon',
        sample1_en: 'Life is what happens to you while you are busy making other plans." - John Lennon',
        sample2: 'Succes is het resultaat van falen zonder het verlies van enthousiasme." - Winston Churchill',
        sample2_en: 'Success is the result of going from failure to failure without loss of enthusiasm." - Winston Churchill',
        sample3: 'Kennis is macht." - Francis Bacon',
        sample3_en: 'Knowledge is power." - Francis Bacon',
        sample4: 'Liefde overwint alles." - Vergilius',
        sample4_en: 'Love conquers all." - Virgil',
    },
    {
        name: 'Swahili',
        sample1: 'Maisha ni safari na sisi ni wasafiri.',
        sample1_en: 'Life is a journey and we are travellers.',
        sample2: 'Upendo ni kama upepo, huwezi kuiona lakini unaweza kuihisi.',
        sample2_en: 'Love is like the wind, you can\'t see it but you can feel it.',
        sample3: 'Uvumilivu ni ufunguo wa raha.',
        sample3_en: 'Patience is the key to joy.',
        sample4: 'Elimu ni urithi ulio bora kuliko fedha.',
        sample4_en: 'Education is the best legacy than money.',
    },
    {
        name: 'Turkish',
        sample1: 'Hayat, planlar yaparken başınıza gelenlerdir.',
        sample1_en: 'Life is what happens to you while you’re busy making other plans.',
        sample2: 'Mutluluk, paylaştıkça artar.',
        sample2_en: 'Happiness increases by sharing.',
        sample3: 'Bir kitap bin dosttur.',
        sample3_en: 'One book is a thousand friends.',
        sample4: 'Zorluklar, başarıya giden yolda sadece engellerdir.',
        sample4_en: 'Difficulties are just obstacles on the road to success.',
    },
    {
        name: 'Swedish',
        sample1: 'Livet är vad som händer medan du är upptagen med att göra andra planer.',
        sample1_en: 'Life is what happens while you are busy making other plans.',
        sample2: 'Älska dig själv först och allt annat faller på plats.',
        sample2_en: 'Love yourself first and everything else falls into line.',
        sample3: 'Att vara modig innebär inte att man inte är rädd, det betyder att man går framåt trots rädslan.',
        sample3_en: 'Being brave does not mean you are not scared, it means you go on despite the fear.',
        sample4: 'Kunskap är makt.',
        sample4_en: 'Knowledge is power.',
    },
    {
        name: 'Polish',
        sample1: 'Życie to jest to, co się dzieje, gdy jesteś zajęty robieniem innych planów.',
        sample1_en: 'Life is what happens when you’re busy making other plans.',
        sample2: 'Miłość jest wszystkim.',
        sample2_en: 'Love is everything.',
        sample3: 'Cierpliwość jest kluczem do sukcesu.',
        sample3_en: 'Patience is the key to success.',
        sample4: 'Edukacja jest bronią, która może zmienić świat.',
        sample4_en: 'Education is the weapon that can change the world.',
    },
    {
        name: 'Thai',
        sample1: 'ชีวิตคือสิ่งที่เกิดขึ้นขณะที่คุณยุ่งอยู่กับการวางแผนสิ่งอื่น.',
        sample1_en: 'Life is what happens while you are busy making other plans.',
        sample2: 'ความรักคือการให้โดยไม่หวังผลตอบแทน.',
        sample2_en: 'Love is giving without expecting anything in return.',
        sample3: 'ความอดทนนำไปสู่ความสำเร็จ.',
        sample3_en: 'Patience leads to success.',
        sample4: 'ความรู้คือพลัง.',
        sample4_en: 'Knowledge is power.',
    },
    {
        name: 'Greek',
        sample1: 'Η ζωή είναι αυτό που συμβαίνει ενώ κάνεις άλλα σχέδια.',
        sample1_en: 'Life is what happens while you make other plans.',
        sample2: 'Η αγάπη είναι το μόνο που διπλασιάζεται κάθε φορά που το μοιράζεσαι.',
        sample2_en: 'Love is the only thing that doubles every time you share it.',
        sample3: 'Η γνώση είναι δύναμη.',
        sample3_en: 'Knowledge is power.',
        sample4: 'Η επιμονή οδηγεί στην επιτυχία.',
        sample4_en: 'Perseverance leads to success.',
    },
    {
        name: 'Hebrew',
        sample1: 'החיים הם מה שקורה בעודך עסוק בלתכנן אחרת.',
        sample1_en: 'Life is what happens while you are busy making other plans.',
        sample2: 'אהבה היא לא מה שאנחנו מחפשים, אהבה היא מה שאנחנו נותנים.',
        sample2_en: 'Love is not what we are seeking, love is what we are giving.',
        sample3: 'ידע הוא כוח.',
        sample3_en: 'Knowledge is power.',
        sample4: 'הסבלנות היא מפתח להצלחה.',
        sample4_en: 'Patience is the key to success.',
    }            
];

langnum.textContent = languages.length;

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
highscoreDisplay.textContent = highscore;

const english = document.getElementById('eng');

function startGame() {
    samples = ['sample1', 'sample2', 'sample3', 'sample4'];
    currentLanguage = Math.floor(Math.random() * languages.length);
    currentSample = Math.floor(Math.random() * samples.length);
    cindex = Math.floor(Math.random() * samples.length);


    gametext.textContent = languages[currentLanguage][samples[currentSample]];
    
    correctBtn = Math.floor(Math.random() * samples.length);
    
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
    english.textContent = languages[currentLanguage][samples[currentSample] + '_en'];
    setTimeout(() => {
        button.style.backgroundColor = 'var(--bg-accent)';
        english.textContent = '';
        startGame();
    }, 1750);
}

function incorrect(button) {
    button.style.backgroundColor = 'red';
    score = 0;
    scoreDisplay.textContent = score;
    highscoreDisplay.textContent = highscore;
    english.textContent = languages[currentLanguage][samples[currentSample] + '_en'];
    setTimeout(() => {
        button.style.backgroundColor = 'var(--bg-accent)';
        english.textContent = '';
        startGame();
    }, 1750);
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
            }, 1750);
        }
    });
});