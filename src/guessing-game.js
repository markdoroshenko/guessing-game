
class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.numToGuess = 0;
    }

    setRange( min, max ) {
        if ( min >= max ) {
            throw new Error( "Invalid range: min must be less than max" );
        }
        this.min = min;
        this.max = max;
    }

    lower() {
        this.max = this.numToGuess
    }

    greater() {
        this.min = this.numToGuess
    }

    guess() {
        const arr = []
        for (let i = this.min; i <= this.max; i++) {
            arr.push(i);
        }
        this.numToGuess = arr[Math.floor(arr.length / 2)];

        return this.numToGuess;
    }
}

module.exports = GuessingGame;
