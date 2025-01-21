const cardArray = [
    {
        name: 'asian-semi-longhair-cat',
        img: 'images/asian-semi-longhair-cat.png'
    },
    {
        name: 'australian-mist-cat',
        img: 'images/australian-mist-cat.png'
    },
    {
        name: 'maine-coon-cat',
        img: 'images/maine-coon-cat.png'
    },
    {
        name: 'munchkin-cat',
        img: 'images/munchkin-cat.png'
    },
    {
        name: 'ragdoll-cat',
        img: 'images/ragdoll-cat.png'
    },
    {
        name: 'singapura-cat',
        img: 'images/singapura-cat.png'
    },
    {
        name: 'asian-semi-longhair-cat',
        img: 'images/asian-semi-longhair-cat.png'
    },
    {
        name: 'australian-mist-cat',
        img: 'images/australian-mist-cat.png'
    },
    {
        name: 'maine-coon-cat',
        img: 'images/maine-coon-cat.png'
    },
    {
        name: 'munchkin-cat',
        img: 'images/munchkin-cat.png'
    },
    {
        name: 'ragdoll-cat',
        img: 'images/ragdoll-cat.png'
    },
    {
        name: 'singapura-cat',
        img: 'images/singapura-cat.png'
    },
]

cardArray.sort(() => 0.5 - Math.random()) //shuffles the array randomly.

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

console.log(gridDisplay)

const createBoard = () => {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard) //flipCard as an callback function
        gridDisplay.appendChild(card)
    }
}
createBoard()

const checkMatch = () => {
    const cards = document.querySelectorAll('img') 
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for a match!')
    if (optionOneId === optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('You clicked the same image!')
    }

    if (cardsChosen[0] === cardsChosen[1]) {
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry! try again!')
    }
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You have found them all!'
        
    }
}


//flipping cards when clicked.

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}