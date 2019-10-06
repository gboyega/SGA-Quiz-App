const selectedQuestion = QandA.slice(0, 5);
let score = 0;
let questionIndex = 0;

const checkAnswer = (ans) => {
    if (ans == selectedQuestion[questionIndex].answer) {
        score += 100;
    };
    questionIndex += 1;
};

const printSuccess = () => {
    $('.question-question').text("");
    $('.options1').text("");
    $('.options2').text("");
    $('.options3').text("");
    $('.options4').text("");
    let gif;

    if (score == 500) {
        gif = $('<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/i1uUaptbbyL5e" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/rafiki-i1uUaptbbyL5e">via GIPHY</a></p>')
    } else if (score < 500 && score > 200) {
        gif = $('<div style="width:100%;height:0;padding-bottom:93%;position:relative;"><iframe src="https://giphy.com/embed/vgUDKHGEK3hks" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/movie-sad-the-lion-king-vgUDKHGEK3hks">via GIPHY</a></p>')
    } else {
        gif = $('<div style="width:100%;height:0;padding-bottom:48%;position:relative;"><iframe src="https://giphy.com/embed/to3I2nkywr2PS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/deliverance-to3I2nkywr2PS">via GIPHY</a></p>')
    };


    $('.question-question').text(`You scored ${score}!`);
    let viewSpace = $('.question-options')
    gif.appendTo(viewSpace);
}


const showQuestion = (qIndex) => {
    let question = selectedQuestion[qIndex];
    $('.question-question').text(question.question);
    $('.options1').text("");
    $('.options2').text("");
    $('.options3').text("");
    $('.options4').text("");

    question.options.forEach((element, i) => {
        let opt = '.options' + (i + 1);
        let radioB = $('<input type="radio" name="choice" value= ' + element + '/>');
        let radioL = $('<label for=' + element + '>' + element + '</label>');
        radioB.appendTo(opt);
        radioL.appendTo(opt);
    })
};

$("input:radio[name='choice']").click(function() {
    //check answer
    checkAnswer(this.value);

    if (questionIndex == selectedQuestion.length - 1) {

        //show success message 
        printSuccess();
    } else {
        // show next question
        showQuestion(questionIndex);
    };
    console.log(this.value);


});

$(document).ready(function() {
    showQuestion(questionIndex);
});