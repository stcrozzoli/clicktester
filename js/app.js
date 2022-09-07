// DIVS
const divInicio = document.querySelector('.divInicio')
const divOpciones = document.querySelector('.divOpciones')
const divJuego = document.querySelector('.divJuego')
const divClickAqui = document.querySelector('.divClickAqui')
const divClickAquiContando = document.querySelector('.divClickAquiContando')
const divJuego2 = document.querySelector('.divJuego2')
const divcontainerClicks = document.querySelector('.containerClicks')
const divStopClicks = document.querySelector('.divStopClicks')

// BOTONES
const buttonJugar = document.querySelector('.buttonJugar')
const buttonOpciones = document.querySelector('.buttonOpciones')
const buttonOpcionesAtras = document.querySelector('.buttonOpcionesAtras')
const buttonJuegoInicio = document.querySelector('.buttonJuegoInicio')
const buttonReload = document.querySelector('#reload')
const time = document.querySelector('.time')
const cruz = document.querySelector('#cruz')
const h2res1 = document.querySelector('.h2res1')
const h2res2 = document.querySelector('.h2res2')
const imgres = document.querySelector('#imgres')



// APP
tiempo = 0
totalClicks = 0
boolean = true

buttonJugar.onclick = () => {
    divJuego.classList.add('divJuego--active')
}

buttonJuegoInicio.onclick = () => {
    divJuego.classList.remove('divJuego--active')
}

buttonOpciones.onclick = () => {
    divOpciones.classList.add('divOpciones--active')
}

buttonOpcionesAtras.onclick = () => {
    divOpciones.classList.remove('divOpciones--active')
}

divClickAqui.onclick = () => {
    totalClicks++
    console.log(totalClicks)
    divClickAqui.innerHTML= `${totalClicks}`

    if (boolean == true){
        const interval = setInterval(()=>{
            tiempo++
            time.innerHTML=`
            <p>Tiempo: ${tiempo}</p>
            `
            if(tiempo == 5){
                clearInterval(interval)
                divStopClicks.classList.add('divStopClicks--active')
                h2res2.innerHTML = `Realizaste ${totalClicks} clicks en 5 segundos!
                                    (${totalClicks / 5} clicks por segundo)
                `
                h2res1.innerHTML = `<h2 class="h2res1">Tienes la velocidad de un Caracol</h2>`
            }
        },1000)
        boolean = false
    }
}

cruz.onclick = () => {
    divStopClicks.classList.remove('divStopClicks--active')
    boolean = true
    totalClicks = 0
    tiempo = 0
    time.innerHTML=`
    <p>Tiempo: ${tiempo} </p>
    `
    divClickAqui.innerHTML= `${totalClicks}`
}

// options buttons
const musicButtonInside = document.querySelector('.musicButtonInside')
const darkModeButtonInside = document.querySelector('.darkModeButtonInside')
const musicButton = document.querySelector('.musicButton')
const darkModeButton = document.querySelector('.darkModeButton')
const audio = document.querySelector('#audio')

// darkmode
const dm0 = document.querySelector('.divInicio')
const dm1 = document.querySelector('.divLogo')
const dm2 = document.querySelector('.pLogo')
const dm3 = document.querySelector('.buttonJugar')
const dm4 = document.querySelector('.buttonOpciones')
const dm5 = document.querySelector('.divOpciones')
const dm6 = document.querySelector('.divJuego')
const dm7 = document.querySelector('.divClickAqui')
const dm8 = document.querySelector('.divStopClicks')
const dm9 = document.querySelector('.divStopClicksModal')


musicButtonInside.onclick=()=>{
    if(musicButtonInside.classList.contains('musicButtonInside--active')){
        musicButtonInside.classList.remove('musicButtonInside--active')
        musicButtonInside.classList.add('musicButtonInside--active2')
        musicButton.classList.remove('musicButton--active')
        audio.innerHTML=``
    }else{
        musicButtonInside.classList.add('musicButtonInside--active')
        musicButtonInside.classList.remove('musicButtonInside--active2')
        musicButton.classList.add('musicButton--active')
        audio.innerHTML=`<audio src="./sound/soundtrack.mp3" autoplay loop></audio>`
    }
}

darkModeButtonInside.onclick=()=>{
    if(darkModeButtonInside.classList.contains('musicButtonInside--active')){
        darkModeButtonInside.classList.remove('musicButtonInside--active')
        darkModeButtonInside.classList.add('musicButtonInside--active2')
        darkModeButton.classList.remove('musicButton--active')
        dm1.innerHTML=`
        <p class="pLogo">EPIC CLICK TESTER</p>
        <img class="logo" src="./imgs/logolight.gif" width="150px">`
        dm0.classList.remove('divInicio--dm')
        dm1.classList.remove('divLogo--dm')
        dm2.classList.remove('pLogo--dm')
        dm3.classList.remove('buttonJugar--dm')
        dm4.classList.remove('buttonOpciones--dm')
        dm5.classList.remove('divOpciones--dm')
        dm6.classList.remove('divJuego--dm')
        dm7.classList.remove('divClickAqui--dm')
        dm8.classList.remove('divStopClicks--dm')
        dm9.classList.remove('divStopClicksModal--dm')
    }else{
        darkModeButtonInside.classList.add('musicButtonInside--active')
        darkModeButtonInside.classList.remove('musicButtonInside--active2')
        darkModeButton.classList.add('musicButton--active')
        dm1.innerHTML=`
        <p class="pLogo pLogo--dm">EPIC CLICK TESTER</p>
        <img class="logo" src="./imgs/logodark.gif" width="150px">`
        dm0.classList.add('divInicio--dm')
        dm1.classList.add('divLogo--dm')
        dm2.classList.add('pLogo--dm')
        dm3.classList.add('buttonJugar--dm')
        dm4.classList.add('buttonOpciones--dm')
        dm5.classList.add('divOpciones--dm')
        dm6.classList.add('divJuego--dm')
        dm7.classList.add('divClickAqui--dm')
        dm8.classList.add('divStopClicks--dm')
        dm9.classList.add('divStopClicksModal--dm')
    }
}








