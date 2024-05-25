export function playerRanked(wins) {
  let rank = ''

  switch (true) {
    case wins <= 10:
      rank = 'Ferro'
      break
    case wins >= 11 && wins <= 20:
      rank = 'Bronze'
      break
    case wins >= 21 && wins <= 50:
      rank = 'Prata'
      break
    case wins >= 51 && wins <= 80:
      rank = 'Ouro'
      break
    case wins >= 81 && wins <= 90:
      rank = 'Diamante'
      break
    case wins >= 91 && wins <= 100:
      rank = 'Lendário'
      break
    case wins >= 101:
      rank = 'Imortal'
      break
    default:
      rank = 'Seu Ranking não foi encontrado'
  }

  return rank
}
