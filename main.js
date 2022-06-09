
let uno = document.querySelector('#uno')
let consulta = document.querySelector('.consulta')
let borrar = document.getElementById('clean')
let boton = document.getElementById('button')
let select = document.querySelector('#opciones')
console.log(cocktails)


function handleClick(e){
    e.preventDefault();
    document.body.style.backgroundColor = 'white';
    consulta.style.display = 'none';
    borrar.classList.remove('borrar')
    // let input = uno.value
    let input = select.value
    console.log(select.value)
    let barra = []
    
    cocktails.forEach(e =>{
        e.ingredientes.forEach(ing =>{
            if(ing === input){
                barra.push(e)
            }}) });    
    console.log(barra)
    let titulo = document.createElement('div')
    titulo.innerHTML = `<div class = 'resultado'>
    <h2>Tragos con ${input}</h2>
    </div>`
    document.getElementById('titulo').appendChild(titulo)
    
    barra.map(el=>{
        let resultado = document.createElement('div')
        resultado.innerHTML = `<div class="card resultado">
                                    <h3 class="card-title">${el.nombre}</h3>
                                    <img src="${el.imagen}" class="card-img-top imagen" alt="foto de ${el.nombre}">
                                    <div class="card-body">
                                        <h4 class="card-subtitle mb-2 text-muted">Receta:</h4>
                                        <p class="card-text">${el.receta}</p>
                                    </div>
                                </div>`
        document.getElementById('res').appendChild(resultado)
    })
}

const clean = () => { window.location.reload() }

boton.addEventListener('click', handleClick)
borrar.addEventListener('click', clean)
        
        




    
