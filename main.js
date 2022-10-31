const $ = (etiqueta) => document.querySelector(etiqueta)

let btnCirculo = $('#circulo')
let btnEquis = $('#equis')
let sectores = Array.from(document.querySelectorAll('.sectores'))

btnCirculo.addEventListener('click', ()=>{
    funcionMain(btnCirculo.innerText)
    btnEquis.disabled = true
    quienInicia(sectores, btnCirculo.innerText)
})

btnEquis.addEventListener('click', ()=>{
    funcionMain(btnEquis.innerText)
    btnCirculo.disabled = true
    quienInicia(sectores, btnEquis.innerText)
})



function funcionMain(eleccion) {

    let sectores = Array.from(document.querySelectorAll('.sectores'))
    for (const iterator of sectores) {
        
        iterator.onclick = ()=>{
            if (iterator.dataset.ocupado == 'true') {
                console.log('kieto')
            }else{
                iterator.innerText = eleccion
                iterator.dataset.ocupado = 'true'
                console.log('dentro')
                let aprovado = false

                validarSiGano(sectores, eleccion)

                if (!terminoElJuego(sectores)) {
                    while (aprovado == false){

                        let random = Math.floor(Math.random() * 9)

                        if (sectores[random].dataset.ocupado == 'false') {
                            sectores[random].innerText = eleccionRival(eleccion)
                            sectores[random].dataset.ocupado = 'true'
                            aprovado = true
                        }
                    }
                    validarSiGano(sectores, eleccion)
                }
                
                
            }
        }
    }   
}

function quienInicia(sectores, eleccion) {
    let primerIntento = Math.floor(Math.random()*2)
    if (primerIntento == 1) {
        let random = Math.floor(Math.random() * 9)
        sectores[random].innerText = eleccionRival(eleccion)
        sectores[random].dataset.ocupado = 'true'
        console.log('inicia la maquina')
    }else{
     console.log('inicia tu')   
    }
}





function eleccionRival(eleccionJugador) {
    if (eleccionJugador === '❌') {
        return '⭕'
    }else{
        return '❌'
    }
}


function terminoElJuego(sectores) {
    let isEnd = sectores.every((a)=>a.dataset.ocupado == "true")
    return isEnd
}

function validarSiGano(sectores, eleccionJugador) {

    let uno = sectores[0].innerText
    let dos = sectores[1].innerText
    let tres = sectores[2].innerText
    let cuatro = sectores[3].innerText
    let cinco = sectores[4].innerText
    let seis = sectores[5].innerText
    let siete = sectores[6].innerText
    let ocho = sectores[7].innerText
    let nueve = sectores[8].innerText

    let termino = false
    let victoria = false

    //validaciones para saber si gano

    if (uno == dos && dos == tres && uno != "") {
        if (eleccionJugador == uno ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (cuatro == cinco && cinco == seis && cuatro != "") {
        if (eleccionJugador == cuatro ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (siete == ocho && ocho == nueve && siete != "") {
        if (eleccionJugador == siete ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (uno == cuatro && cuatro == siete && uno != "") {
        if (eleccionJugador == uno ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (dos == cinco && cinco == ocho && dos != "") {
        if (eleccionJugador == dos ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (tres == seis && seis == nueve && tres != "") {
        if (eleccionJugador == tres ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (uno == cinco && cinco == nueve && uno != "") {
        if (eleccionJugador == uno ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (tres == cinco && cinco == siete && tres != "") {
        if (eleccionJugador == tres ){
            console.log('ganastes')
            victoria = true
        }else{
            console.log('perdiste')
        }
        termino = true
    }

    if (termino) {
        for (const iterator of sectores) {
            iterator.disabled = true
        }
        console.log(victoria
            )
        mensajeGanadorOPerdedor(victoria)
    }
}

function mensajeGanadorOPerdedor(isVictoria) {
    let mensajeGanador = $('.mensaje-final')
    mensajeGanador.classList.remove('invisible')
    if (isVictoria) {
        mensajeGanador.classList.add('ganador')
        mensajeGanador.childNodes[1].innerText = 'Has ganado ¡FELICITACIONES!'
    }else{
        mensajeGanador.classList.add('perdedor')
        mensajeGanador.childNodes[1].innerText = 'Has perdido ¡SIGUE INTENTANDO!'
    }
    mensajeGanador.childNodes[3].onclick = ()=>{
        location.reload()
    }
    
}