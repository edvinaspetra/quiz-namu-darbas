"use strict"


var question = document.getElementById("question");
var button = document.querySelectorAll("button");
var progress = document.getElementById("progress");
var questionNumber = 0;
var resultNumber = 0;

var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam", "Petrui", "Kepenims", "Odai"],
        answer: "Odai"
    },
    {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
    },
    {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
    },
    {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
    },
    {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
    }
]

// Uzkrauna klausima ir atsakymus
var populate = () =>{
    if(questionNumber < questions.length) {
        question.innerText = questions[questionNumber].text;
    button.forEach((x, i) => {
    x.innerText = `${questions[questionNumber].choices[i]}`;
    });
    } else{
        showResults();
    }
}

// Skaiciuoja teisingus atsakymas
var check = guess => {
    if(guess.innerText === questions[questionNumber].answer) resultNumber++;
}

// Rodo progresa
var showProgress = () => {
    questionNumber++;
    // Uzkrauna progreso skaiciu
    progress.innerText = questionNumber + 1;
    console.log(resultNumber);
}

// Result page
var showResults = () => {
    var quiz = document.getElementById("quiz");
    if(resultNumber == 1){
        quiz.innerHTML = `<h1 style="transform: scale(1);">Your</h1>`;
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(1.5);">Your Result: </h1>`;
        }, 1000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1>`;
        }, 2000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1> <img src="https://media1.giphy.com/media/MwOuiiTfWfWgM/200w.webp?cid=ecf05e47thb0edzrl62argq3hl99fohrnoq1xh2737dv18ua&rid=200w.webp&ct=g" alt="">`;
        }, 3000)
    } else if(resultNumber == 2){
        quiz.innerHTML = `<h1 style="transform: scale(1);">Your</h1>`;
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(1.5);">Your Result: </h1>`;
        }, 1000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1>`;
        }, 2000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1> <img src="https://media1.giphy.com/media/26xBKqeFFspRZjDTW/200w.webp?cid=ecf05e470ngldsyii5wofuql01svq5khap4ezod9er1ylz3v&rid=200w.webp&ct=g" alt="">`;
        }, 3000)

    } else if(resultNumber == 3){
        quiz.innerHTML = `<h1 style="transform: scale(1);">Your</h1>`;
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(1.5);">Your Result: </h1>`;
        }, 1000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1>`;
        }, 2000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1> <img src="https://media3.giphy.com/media/12WxFiMHBUl1RK/giphy.webp?cid=ecf05e47nnct8krboatj2vc7t5ycrwlbytegeworj04gycin&rid=giphy.webp&ct=g" alt="">`;
        }, 3000)
    } else if(resultNumber == 4){
        quiz.innerHTML = `<h1 style="transform: scale(1);">Your</h1>`;
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(1.5);">Your Result: </h1>`;
        }, 1000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1>`;
        }, 2000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1> <img src="https://media2.giphy.com/media/Jq824R93JsLwZCaiSL/200w.webp?cid=ecf05e47ne5vk195ety5qd635j8rem0cxqna1x9vtkovz37j&rid=200w.webp&ct=g" alt="">`;
        }, 3000)
    } else if(resultNumber == 5){
        quiz.innerHTML = `<h1 style="transform: scale(1);">Your</h1>`;
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(1.5);">Your Result: </h1>`;
        }, 1000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1>`;
        }, 2000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1> <img src="https://media2.giphy.com/media/8Iv5lqKwKsZ2g/100.webp?cid=ecf05e47cepx3nwy2osgdnqg1c0wux7ruyqlr0ihdcxz7yqe&rid=100.webp&ct=g" alt="">`;
        }, 3000)
    } else{
        quiz.innerHTML = `<h1 style="transform: scale(1);">Your</h1>`;
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(1.5);">Your Result: </h1>`;
        }, 1000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1>`;
        }, 2000)
        setTimeout(function(){
            quiz.innerHTML = `<h1 style="transform: scale(2);">Your Result: ${resultNumber}</h1> <img src="https://media0.giphy.com/media/d2lcHJTG5Tscg/200w.webp?cid=ecf05e478jk92jkv86oqq76u8y8e8i6n9jsbswasjlqrhpsp&rid=200w.webp&ct=g" alt="">`;
        }, 3000)
    }
    
}

// Priskiria funkcija mygtukams
button.forEach((x) => {
    x.addEventListener("click", function(){
        // if(questionNumber === questions.length) return;
        setTimeout(function(){
            // Rodo progresa
            showProgress();
            // Uzkrauna klausima ir atsakymus
            populate();
        }, 10)
        // Skaiciuoja teisingus atsakymus
        check(this);
    });
});

// Pirmas funkcijos paleidimas
populate();
