class foundNotFound {
  constructor(cards) {
    this.cardsArray = cards;
    this.flips = document.getElementById('flips');
  }

  startGame() {
    this.cardToCheck = null;
    this.clicks = 0;
    this.matched = [];
    this.busy = true;
    setTimeout(() => {
      this.mixCards();
      this.busy = false;
    }, 500);
    this.hideCards();
    this.clicks.innerHTML = this.clicks;
  }

  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.clicks++;
      this.flips.innerHTML = this.clicks;
      card.classList.add('visible');
    }

    if (this.cardToCheck) {
      this.checkForMatch(card);
    } else {
      this.cardToCheck = card;
    }
  }

  mixCards() {
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      const randIndex = Math.floor(Math.random() * (i + 1));
      this.cardsArray[randIndex].style.order = i;
      this.cardsArray[i].style.order = randIndex;
    }
  }

  canFlipCard(card) {
    return (
      !this.busy && !this.matched.includes(card) && card !== this.cardToCheck
    );
  }

  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove('visible');
      card.classList.remove('matched');
    });
  }

  checkForMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
      this.cardMatch(card, this.cardToCheck);
    } else {
      cardMisMatch(card, this.cardToCheck);
    }
    this.cardToCheck = null;
  }

  getCardType(card) {
    return card.getElementsByClassName('perk')[0].src;
  }

  cardMatch(card1, card2) {
    this.matched.push(card1);
    this.matched.push(card2);
    card1.classList.add('matched');
    card2.classList.add('matched');
    if (this.matched.length === this.cardsArray.length) {
      alert('Congratulations! You Won');
    }
  }

  cardMisMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove('visible');
      card2.classList.remove('visible');
      this.busy = false;
    }, 1000);
  }
}

// On window load
window.onload = function () {
  // Important variables
  const cards = Array.from(document.getElementsByClassName('card'));
  const game = new foundNotFound(cards);

  game.startGame();
  // Flip a card when click
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      game.flipCard(card);
    });
  });
};
