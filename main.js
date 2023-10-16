function playSom(idElementAudio) {
    document.querySelector(idElementAudio).play()

}

const listaTeclas = document.querySelectorAll('.tecla');

let cont = 0


while (cont < listaTeclas.length) {

    const tecla = listaTeclas[cont];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio);

    tecla.onclick = function () {
        playSom(idAudio);
   };

   cont++;

    //   console.log(cont);
}