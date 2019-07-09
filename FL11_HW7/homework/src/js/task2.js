let i = 3;
let max = 8;
let total_prize = 0;
let current_prize = 100;
const return_prize = 100;
const max_plus = 4;
const return_i = 4;
const min = 0;
const half = 2;
const mes = {
    'r':'Choose a roulette pocket number from 0 to ',
    'a':'\nAttempts left: ',
    't':'\nTotal prize: ',
    'c':'\nPossible prize on current attempt: ',
    'd':'$'
}
if (confirm('Do you want to play a game?')) {
    for (i; i > 0; i--) {
        let random_number = Math.floor(Math.random() * max) + 1;
        let user_number = +prompt(mes.r+max+mes.a+i+mes.t+total_prize+mes.d+mes.c+current_prize+mes.d+random_number);
        if (random_number===user_number) {
            total_prize += current_prize;
            if (confirm('Congratulation, you won!   Your prize is: '+total_prize+'$. Do you want to continue?')) {
                max += max_plus;
                i = return_i;
                current_prize += return_prize;
                random_number;
                user_number;
            } else {
                alert('Thank you for your participation. Your prize is: '+total_prize+mes.d);
            }
        } if (!user_number) {
            alert('Thank you for your participation. Your prize is: '+total_prize+mes.d);
            break;
        }
    }
} else {
    alert('You did not become a billionaire, but can.');
}
