function writeCards(listFriends, celebratedDay){
    let gratitudeCard = [];
    for (let i=0; i<listFriends.length;i++){
      gratitudeCard.push(`Thank you, ${listFriends[i]}, for the wonderful ${celebratedDay} gift!`);
    }

    return gratitudeCard;
}

writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(i){
    while (i > 0){
        console.log(i--);
    }
    console.log(i);
}

countDown(10);