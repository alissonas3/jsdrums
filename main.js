function playSound(audioSelector) {

    const element = document.querySelector(audioSelector);

    if (element && element.localName === 'audio') {
        element.play();
    }
    else {
        console.log('Element or Selector not found.');
    }
}

const keyList = document.querySelectorAll('.tecla');

    for (let i = 0; i < keyList.length; i++) {

        const key = keyList[i];

        const instrument = key.classList[1];

        const idAudio = `#som_${instrument}`;

        // console.log(idAudio);

        key.onclick = function () {
            playSound(idAudio);
        };

        key.onkeydown = function (event) {

            if (event.code === 'Enter' || event.code === 'Space') {
                key.classList.add('ativa');
            }
        }

        key.onkeyup = function () {
            key.classList.remove('ativa');
        }

        //   console.log(i);
    }
