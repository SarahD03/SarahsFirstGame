let redPlayer = 'red'
let yellowPlayer = 'yellow'
let currentPlayer = redPlayer
let result = document.querySelector('.playerText')
let taken

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
