
let arr =
    [
        ['Question 1', '1 , 3, 7, 10, ?', '17', '26', '23'],
        ['Question 2', '36, 34, 30, 28, 24, …', '22', '26', '23'],
        ['Question 3', '7, 10, 8, 11, 9, 12, …', '10', '26', '23'],
        ['Question 4', '2, 1, (1/2), (1/4), …', '(1/8)', '(2/8)', '(1/4)'],
        ['Question 5', '80, 10, 70, 15, 60, …', '20', '30', '50'],
        ['Question 6', '12 X 12 = 9, 23 x 23 = 16, 43 x 34 = ? ', '13', '17', '21'],
        ['Question 7', '1 = 4 , 2 = 16, 3 = 64, 4 = ?', '256', '85', '210'],
        ['Question 8', 'A + B = 76, A - B = 38, A / B = ?', '3', '23', '8'],
        ['Question 9', 'Use the number 2,3,4,5 and symbol + and = to make a true equation', '2 + 5 = 3 + 4', '5 + 5 = 2 + 4', '4 + 5 = 3 + 2'],
        ['Question 10', '1  3  5  2  4  ?', '6', '7', '8'],
    ]

let key = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

// audio
var x = document.getElementById("myAudio");
function playAudio() {
    x.play();
}

let okeStop = true
let timeleft = document.getElementById('countdowntimer').textContent
var timer = setInterval(function () {
    timeleft--;
    document.getElementById("countdowntimer").textContent = timeleft;
    if (timeleft <= 0) {
        okeStop = false
        clearInterval(timer);
    }
    if (okeStop == false) {
        console.log('hore sudah selesai!')
        alert(`Game Over`)
    }
}, 1000);

let soal = document.getElementById('Qst')
let number = document.getElementById('nums')
let answer = document.getElementsByTagName('button')
let buttons = document.getElementsByClassName('button');
let indexQuestion = 0

var playerAnswer = []
for (var i = 0; i < buttons.length; i++) {

    (function (i) {
        buttons[i].onclick = function () {

            indexQuestion += 1
            console.log(indexQuestion)

            playerAnswer.push(i)
            console.log(playerAnswer)

            number.innerHTML = arr[indexQuestion][0]
            soal.innerHTML = arr[indexQuestion][1]
            buttons[0].innerHTML = arr[indexQuestion][2]
            buttons[1].innerHTML = arr[indexQuestion][3]
            buttons[2].innerHTML = arr[indexQuestion][4]
            // console.log(indexQuestion)

            if (indexQuestion > 8) {
                console.log('hore sudah selesai!')
                alert(`your score is ${indexQuestion + score}`)

                let score = 0
                for (let a = 0; a < key.length; a++) {
                    if (key[a] == playerAnswer[a]) {
                        score += 1
                    }
                }
                alert(score)
            }
        }
    })(i)
}

function getScore(playerAnswer) {
    let score = 0
    for (let a = 0; a < key.length; a++) {
        if (key[a] == playerAnswer[a]) {
            score += 1
        }
    }
    return score
}
function displayScore(score) {
    return score
}

function playerAnswer(element) {
    alert("value is " + element.value);
};

soal.innerHTML = arr[0][1]
number.innerHTML = arr[0][0]
answer[0].innerHTML = arr[0][2]
answer[1].innerHTML = arr[0][3]
answer[2].innerHTML = arr[0][4]



// let tempBtn = 'btn'
// if (document.getElementById('btn0')) {
//     tempBtn = 'btn' + 0
// } if (document.getElementById('btn1')) {
//     tempBtn = 'btn' + 1
// } if (document.getElementById('btn2')) {
//     tempBtn = 'btn' + 2
// }
// console.log(tempBtn)

// let indexQuestion = 0
// let btn = document.getElementById('btn0')
// btn.addEventListener('click', function () {
//     indexQuestion += 1
//     console.log(indexQuestion)

//     number.innerHTML = arr[indexQuestion][0]
//     soal.innerHTML = arr[indexQuestion][1]
//     answer[0].innerHTML = arr[indexQuestion][2]
//     answer[1].innerHTML = arr[indexQuestion][3]
//     answer[2].innerHTML = arr[indexQuestion][4]
//     console.log(indexQuestion)

//     if (indexQuestion > 9) {
//         console.log('hore sudah selesai!')
//         alert(`your score is ${indexQuestion + 1}`)
//     }
// })

// let btn1 = document.getElementById('btn1')
// btn.addEventListener('click1', function () {
//     indexQuestion += 1
//     console.log(indexQuestion)

//     number.innerHTML = arr[indexQuestion][0]
//     soal.innerHTML = arr[indexQuestion][1]
//     answer[0].innerHTML = arr[indexQuestion][2]
//     answer[1].innerHTML = arr[indexQuestion][3]
//     answer[2].innerHTML = arr[indexQuestion][4]
//     console.log(indexQuestion)

//     if (indexQuestion > 9) {
//         console.log('hore sudah selesai!')
//         alert(`your score is ${indexQuestion + 1}`)
//     }
// })