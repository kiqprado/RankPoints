import { playerBalance } from './js/playerBalance.js'
import { playerRanked } from './js/playerRanked.js'
import { playerResult } from './js/playerResult.js'

const form = document.querySelector('form')
export const playerWins = document.getElementById('wins')
export const playerDefeats = document.getElementById('defeats')

form.onsubmit = e => {
  e.preventDefault()

  const wins = playerWins.value
  const defeats = playerDefeats.value
  const result = playerBalance(wins, defeats)
  const rank = playerRanked(wins)

  playerResult.open()
  playerResult.message.innerText = `O herói tem o saldo de ${result} Vitórias e se encontra no nível de ${rank} `
}
