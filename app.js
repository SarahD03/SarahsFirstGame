let redPlayer = 'red'
let yellowPlayer = 'yellow'
let currentPlayer = redPlayer
let result = document.querySelector('.playerText')
let taken
let reset = document.querySelector('button')

let tiles = document.querySelectorAll('.tile')
// adds tiles in spots clicked and adds taken class so it cant be played over again
for (let i = 0; i < tiles.length; i++) {
  tiles[i].onclick = () => {
    if (
      tiles[i + 7].classList.contains('taken') &&
      !tiles[i].classList.contains('taken')
    ) {
      if (currentPlayer == redPlayer) {
        tiles[i].classList.add('taken')
        tiles[i].classList.add('redTile')
        currentPlayer = yellowPlayer
      } else if (currentPlayer == yellowPlayer) {
        tiles[i].classList.add('taken')
        tiles[i].classList.add('yellowTile')
        currentPlayer = redPlayer
      }
    } else return
  }
}

// const init = () => {
//   document
//     .getElementsByClassName('taken')
//     .addEventListener('mouseover', highlightTile)
//   document
//     .getElementsByClassName('taken')
//     .addEventListener('mouseout', unhighlight)
// }

// const highlightTile = () => {
//   document.getElementsByClassName('tile').style.accentColor = 'grey'
// }
// const unhighlight = () => {
//   document.getElementsByClassName('tile').style.accentColor = 'white'
// }

// init()

const ResetBoard = () => {
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove('redTile')
    tiles[i].classList.remove('yellowTile')
  }
}
reset.addEventListener('click', ResetBoard)
