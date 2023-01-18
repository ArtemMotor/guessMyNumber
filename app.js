const secretNum = Math.ceil(Math.random() * 10) // загадываем число от 1 до 10
console.log(secretNum) // чит, в консоле можно увидеть загаданное число

let tries = 5 // количество попыток, которые мы будем уменьшать
const totalTries = tries // общее количество попыток(нужно, чтобы сообщить пользователю, что он не смог угадать число за totalTries попыток, а так же вывести количество попыток в параграф с id='numberTriese' из index.html)

let countTries = 1 // считаем сколько было попыток

document.getElementById(
  'numberTriese'
).textContent = `Вам дается ${totalTries} попыток, чтобы его отгадать` // этот кусок автоматически вставляет текст в параграф с id = 'numberTriese' в index.html, чтобы не менять количество доступных попыток в ручную. Этот кусок должен всегда идти после определениия константы totalTries, иначе js подумает, что константа неопределенна, и текст не будет выведен на странице

function guessNum(num) {
  if (tries <= 1 && num != secretNum) {
    alert(
      `Вы не смогли отгадать число с ${totalTries} попыток. Загаданное число было ${secretNum}.`
    )
    let doYouWantToPlayMore = confirm(
      'Если хотите сыграть ещё раз нажмите "OK"'
    )
    if (doYouWantToPlayMore) {
      alert('Отлично! Я загадал новое число!')
      window.location.reload()
    } else {
      alert('Ждём вас снова, а я пока что загадал новое число')
      window.location.reload()
    }
  } else if (num !== secretNum && tries >= 1) {
    tries--
    countTries++
    if (num > secretNum && tries >= 1) {
      alert(
        `Вы не угадали число. У вас осталось ${tries} попыток. Загаданное число меньше, чем ${num}`
      )
    } else if (num < secretNum && tries >= 1) {
      alert(
        `Вы не угадали число. У вас осталось ${tries} попыток. Загаданное число больше, чем ${num}`
      )
    }
  } else if (num === secretNum && countTries >= 1) {
    alert(
      `Вы угадали число с ${countTries} попыток. Загаданное число было ${secretNum}`
    )
    let doYouWantToPlayMore = confirm(
      'Если хотите сыграть ещё раз нажмите "OK"'
    )
    if (doYouWantToPlayMore) {
      alert('Отлично! Я загадал новое число!')
      window.location.reload()
    } else {
      alert('Ждём вас снова, а я пока что загадал новое число')
      window.location.reload()
    }
  }
}
