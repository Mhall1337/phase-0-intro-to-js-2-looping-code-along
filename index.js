const names = ['Lisa', 'Kaitlin', 'Jan'];
const thankYou = [];
function writeCards(names, gifts){
    for(let i=0; i<names.length; i++){
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${gifts} gift!`);
       
    }
    return thankYou;
}

function countDown(){
    let countDown = 10
    while (countDown >= 0){
    console.log(countDown --);}
}

