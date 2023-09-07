console.log("Coin Flip")

const input = prompt("Plat Eller Krone: ");

if ( input == "Plat" || input == "Krone") {
    let randomNumber = Math.floor(Math.random() * 2);
    let coinflip;
    
    switch (randomNumber) {
        case 0:
            coinflip = 'Krone';
            break;
        case 1:
            coinflip = 'Plat';
            break;
        default:
            console.log("Sut den")
    }
    
    console.log("Det blev:")
    console.log(coinflip)
    if ( input == coinflip ) {
        console.log("Tilykke! Du fik rigtigt!")
    } else {
        console.log("Du havde forkert!")
    }
}
