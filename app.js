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


