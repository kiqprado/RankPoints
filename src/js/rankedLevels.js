export const rankedLevels = {
  onTable: document.querySelector('.rankOf'),
  closeElo: document.getElementById('closeElo'),

  open() {
    rankedLevels.onTable.classList.add('open')
  },
  close() {
    rankedLevels.onTable.classList.remove('open')
  }
}

rankedLevels.closeElo.onclick = () => {
  rankedLevels.close()
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    rankedLevels.close()
  }
})
