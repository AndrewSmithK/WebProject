const initializePhraseAppEnabled = () => {
  if (!localStorage.hasOwnProperty('phraseEnabled')) {
    console.log('hasOwnProperty');
    localStorage.setItem('phraseEnabled', 'false');
  } 

  global.window.togglePhraseapp = function() {
    if (localStorage.phraseEnabled === 'true') {
      localStorage.setItem('phraseEnabled', 'false');
      window.location.reload();
    } else {
      localStorage.setItem('phraseEnabled', 'true');
      window.location.reload();
    }
  }
}

export default initializePhraseAppEnabled;