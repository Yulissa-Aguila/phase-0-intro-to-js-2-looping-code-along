// Code your solutions in this file
function writeCards(names,event){
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
    }
    return messages;
}

function countDown(n){
    let i = n;
    while (i >= 0){
        console.log(i);
        i--;
    }
}