const game = {
  title: 'Guess the Number!',

  biggestNum: 100,

  smallestNum: 1,

  secretNum: null,

  prevGuesses: [],



  getGuess: function(){
    let playerGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`);
    let num = parseInt(playerGuess)
    
    return num
  },

  play: function() {
    let playerInput
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

      while(playerInput !== this.secretNum){
        playerInput = this.getGuess()
        this.prevGuesses.push(playerInput)
        this.render(playerInput)
      }
  },
    render: function(playerInput) {
      if (playerInput > 1 && playerInput <101){
        if(playerInput === this.secretNum){
          alert(`Congrats! You guessed the number in ${this.prevGuesses.length} guesses!`)
        }
        else if(playerInput > this.secretNum){
          alert(`Your guess is too high Previous guesses: ${this.prevGuesses.join(`, `)}`)
        }
        else if(playerInput < this.secretNum){
          alert(`Your guess is too low Previous guesses: ${this.prevGuesses.join(`, `)}`)
        }




      }
    }



}