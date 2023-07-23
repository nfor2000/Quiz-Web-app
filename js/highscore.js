let Highscore = JSON.parse(localStorage.getItem('Highscore'));
document.getElementById("highscore").innerText = `${Highscore}`