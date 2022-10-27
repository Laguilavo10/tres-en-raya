const $ = (etiqueta) => document.querySelector(etiqueta)

let btnCirculo = $('#circulo')
let btnEquis = $('#equis')


btnCirculo.addEventListener('click', ()=>{
    funcionMain(btnCirculo.innerText)
    btnEquis.disabled = true
})

btnEquis.addEventListener('click', ()=>{
    funcionMain(btnEquis.innerText)
    btnCirculo.disabled = true
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

                let aprovado = false

                if (!terminoElJuego(sectores)) {
                    while (aprovado == false){

                        let random = Math.floor(Math.random() * 9)
                        // console.log(sectores[random].dataset.ocupado, sectores[random])
    
                        if (sectores[random].dataset.ocupado == 'false') {
                            sectores[random].innerText = eleccionRival(eleccion)
                            sectores[random].dataset.ocupado = 'true'
                            aprovado = true
                        }
                    }
                validarSiGano(sectores, eleccion)
                }else{
                    console.log('se acabo el juego')
                }
                
            }
        }
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

    let uno = sectores[0].innerHTML
    let dos = sectores[1].innerHTML
    let tres = sectores[2].innerHTML
    let cuatro = sectores[3].innerHTML
    let cinco = sectores[4].innerHTML
    let seis = sectores[5].innerHTML
    let siete = sectores[6].innerHTML
    let ocho = sectores[7].innerHTML
    let nueve = sectores[8].innerHTML


    if (uno == dos && dos == tres && uno != "") {
        if (eleccionJugador == uno ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }
    if (cuatro == cinco && cinco == seis && cuatro != "") {
        if (eleccionJugador == cuatro ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }
    if (siete == ocho && ocho == nueve && siete != "") {
        if (eleccionJugador == siete ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }

    if (uno == cuatro && cuatro == siete && uno != "") {
        if (eleccionJugador == uno ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }
    if (dos == cuatro && cuatro == ocho && dos != "") {
        if (eleccionJugador == dos ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }
    if (tres == seis && seis == nueve && tres != "") {
        if (eleccionJugador == tres ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }


    if (uno == cinco && cinco == nueve && uno != "") {
        if (eleccionJugador == uno ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }
    if (tres == cinco && cinco == siete && tres != "") {
        if (eleccionJugador == tres ){
            console.log('ganastes')
        }else{
            console.log('perdiste')
        }
    }

}
