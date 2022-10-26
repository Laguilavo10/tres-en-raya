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
    console.log(eleccion)

    let sectores = Array.from(document.querySelectorAll('.sectores'))

    // let uwu = {...sectores, ocupado:false}

    // console.log(uwu)

    for (const iterator of sectores) {

        if (iterator.innerText == '❌' ||  iterator.innerText == '⭕') {
           iterator.onclick = ''
        }else{
            iterator.onclick = ()=>{
                iterator.innerText = eleccion
                funcionMain('❌')

        }

        }
    }
}
