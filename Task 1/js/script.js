'use strcikt'

function meeting (arguments, chairs) {
    let rezalt = [];
    let chairCounter = 0;
    for (const conferencehall of arguments) {
        let freelChairs = conferencehall[1] - conferencehall[0].length ;
        freeChairs = freelChairs > 0? freelChairs: 0;

        if (chairs > chairCounter) {
            if (chairs >= chairCounter + freeChairs) {
                chairCounter += freeChairs;
                rezalt.push(freeChairs);
            } else {
                rezalt.push(chairCounter + freeChairs - chairs)
                chairCounter = chairs;
            }
        }
    }
    switch (true) {
        case chairs == 0:
            return console.log('Game On');
        case chairs > chairCounter:
            return console.log('Not enough')
    
        default:
            return console.log(rezalt);
    }
   
}

meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4);
meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0);
meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5);
meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4);