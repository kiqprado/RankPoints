import { playerWins, playerDefeats } from '../index.js'
import { rankedLevels } from './rankedLevels.js'

export const playerResult = {
  card: document.querySelector('.resultOf'),
  message: document.querySelector('h2'),
  closeBtn: document.getElementById('closeResult'),

  open() {
    playerResult.card.classList.add('open')
  },
  close() {
    playerResult.card.classList.remove('open')
  }
}

playerResult.closeBtn.onclick = () => {
  playerResult.close()
  playerWins.value = ''
  playerDefeats.value = ''
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    playerResult.close()
    playerWins.value = ''
    playerDefeats.value = ''
  }
})

function openRankedElo() {
  rankedLevels.open()
}

openElo.addEventListener('click', openRankedElo)
