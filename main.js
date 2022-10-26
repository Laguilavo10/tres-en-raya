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
    // let uwu = {}
    // console.log(uwu)
    for (const iterator of sectores) {

        iterator.onclick = ()=>{
            // console.log(iterator)
            if (iterator.dataset.ocupado == 'true') {
                console.log('kieto')
            }else{
                iterator.innerText = eleccion
                iterator.dataset.ocupado = 'true'

                let aprovado = false

                if (!terminoElJuego(sectores)) {
                    while (aprovado == false){
    
                        let random = Math.floor(Math.random() * 9)
                        console.log(sectores[random].dataset.ocupado, sectores[random])
    
                        if (sectores[random].dataset.ocupado == 'false') {
                            sectores[random].innerText = eleccionRival(eleccion)
                            sectores[random].dataset.ocupado = 'true'
                            return aprovado = true
                        }
                    }
                }else{
                    console.log('se acabo el juego')
                }
            }
        }
    }    // }
}


function eleccionRival(eleccionJugador) {
    if (eleccionJugador === '❌') {
        return '⭕'
    }else{
        return '❌'
    }
}
// let sectores = Array.from(document.querySelectorAll('.sectores'))

function terminoElJuego(sectores) {
    let isEnd = sectores.every((a)=>a.dataset.ocupado == "true")
    // console.log(isEnd)
    return isEnd
}

