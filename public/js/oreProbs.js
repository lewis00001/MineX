function calcPercents(currentAsteroid, storage) {

    let ores = [
        ["Uranium", "Neodymium", "Praseodymium", "Galium"],
        ["Idium", "Terbium", "Silver", "Hafnium"],
        ["Rhenium", "Germanium", "Gold", "Platinum"],
        ["Palladium", "Rhodium", "Diamond", "Blue Diamond"]
    ];

    // hold generated percents
    let percentArray = [];
    let arrayTotal = 0;
    // generate first 4 percentages
    for (let i = 0; i < 4; i++) {
        let p = Math.floor(Math.random() * 25);
        arrayTotal += p;
        percentArray.push(p);
    }
    // get 5th percent
    if (arrayTotal < 100) {
        let diff = 100 - arrayTotal;
        percentArray.push(diff);
    }
    // sort array, large to small
    percentArray.sort(function (a, b) {
        return b - a
    });

    // holds mined ores objects to return
    let minedOres = [];

    // assign ores to percentages for first 3 asteroids
    if (currentAsteroid < 4) {
        minedOres = [{
                ore: ores[currentAsteroid - 1][0],
                percent: percentArray[0],
                kilos: percentArray[0] * storage
            },
            {
                ore: ores[currentAsteroid - 1][1],
                percent: percentArray[1],
                kilos: percentArray[1] * storage
            },
            {
                ore: ores[currentAsteroid - 1][2],
                percent: percentArray[2],
                kilos: percentArray[2] * storage
            },
            {
                ore: ores[currentAsteroid - 1][3],
                percent: percentArray[3],
                kilos: percentArray[3] * storage
            },
            {
                ore: ores[currentAsteroid][Math.floor(Math.random() * 3)],
                percent: percentArray[4],
                kilos: percentArray[4] * storage
            }
        ];
    } else {
        // assign ores to percentages for last asteroid
        minedOres = [{
                ore: ores[currentAsteroid - 2][Math.floor(Math.random() * 3)],
                percent: percentArray[0],
                kilos: percentArray[0] * storage
            },
            {
                ore: ores[currentAsteroid - 1][0],
                percent: percentArray[1],
                kilos: percentArray[1] * storage
            },
            {
                ore: ores[currentAsteroid - 1][1],
                percent: percentArray[2],
                kilos: percentArray[2] * storage
            },
            {
                ore: ores[currentAsteroid - 1][2],
                percent: percentArray[3],
                kilos: percentArray[3] * storage
            },
            {
                ore: ores[currentAsteroid - 1][3],
                percent: percentArray[4],
                kilos: percentArray[4] * storage
            },
        ];
    }
    return minedOres;
}