const tragos = [

    {
        nombre :'Old Fashioned',
        imagen:'https://i0.wp.com/blog.scoolinary.com/wp-content/uploads/2021/06/old_fashioned.jpg?w=1000&ssl=1',
        receta:`En un vaso de whisky u Old Fashioned, coloque un terrón de azúcar previamente embebido en bitter angostura.
        Si no cuenta con terrones de azúcar puede sustituirlos por una cucharada de azúcar granulada y sería suficiente con sólo agregar 3 golpes de angostura.
        Logrará la consistencia de una melaza en el fondo del vaso para luego repartirla con movimientos suaves por las paredes del vaso.
        Agregue 50ml de bourbon o de whisky.
        Y con la parte trasera de una cuchara, disuelva el azúcar.
        Agregue 2 ó 3 rocas de hielo cristalinas y de buen tamaño.
        Revuelva y para terminar, decore el trago con una piel de naranja.`,
        ingredientes:['bourbon', 'almibar', 'bitter angostura', 'naranja']
    },

    {
        nombre:'Moscow Mule',
        imagen:'https://www.petramora.com/blog/wp-content/uploads/2018/07/IMG_9398.jpg',
        ingredientes:['vodka', 'jugo de limon', 'almibar', 'ginger beer']
    },

    {
        nombre:'Dry Martini',
        imagen:'https://cdn.colombia.com/gastronomia/2011/08/19/dry-martini-2999-1.webp',
        ingredientes:[ 'gin', 'martini seco', 'bitter angostura', 'aceitunas verdes']
    },

    {
        nombre:'Cosmopolitan',
        imagen:'https://cocteles.club/wp-content/uploads/C%C3%B3ctel-cosmopolitan.jpg',
        ingredientes:[ 'vodka', 'cointreau', 'jugo de arandano']
    },

    {
        nombre:'Negroni',
        imagen:'https://okdiario.com/img/recetas/2017/08/18/coctel-negroni.jpg',
        ingredientes:[ 'gin', 'martini rosso', 'campari']
    },

    {
        nombre:'Manhattan', 
        imagen:'https://imag.bonviveur.com/foto-de-portada-del-manhattan.webp',
        ingredientes:['bourbon', 'martini rosso', 'bitter angostura']
    },

    {
        nombre:'Tom Collins',
        imagen:'https://www.comedera.com/wp-content/uploads/2022/05/Tom-Collins-shutterstock_431092006.jpg',
        ingredientes:['gin', 'almibar', 'jugo de limon', 'soda']
    },

    {
        nombre:'Gibson',
        imagen:'https://i0.wp.com/saucydressings.com/wp-content/uploads/2020/06/gibson-cocktail.jpg?w=800&ssl=1',
        ingredientes:['gin', 'martini seco']
    },

    {
        nombre:'Hanky Panky', 
        imagen:'https://www.cocinayvino.com/wp-content/uploads/2017/10/coctel-hanky-panky.jpg',
        ingredientes:['gin', 'martini rosso', 'fernet']
    },

    {
        nombre:'Caiporoska', 
        imagen:'https://coctelia.com/wp-content/uploads/2020/05/caipiroska.jpg',
        ingredientes:['vodka', 'lima']
    }
]

let uno = document.querySelector('#uno')
let consulta = document.querySelector('.consulta')
let borrar = document.getElementById('clean')
let boton = document.getElementById('button')
let select = document.querySelector('#opciones')

boton.addEventListener('click', function(e){
    e.preventDefault();
    document.body.style.backgroundColor = 'white';
    consulta.style.display = 'none';
    borrar.classList.remove('borrar')
    // let input = uno.value
    let input = select.value
    console.log(select.value)
    let barra = []
    
    tragos.forEach(e =>{
        e.ingredientes.forEach(ing =>{
            if(ing === input){
                barra.push(e)
            }}) });    

    let titulo = document.createElement('div')
    titulo.innerHTML = `<div class = 'resultado'>
    <h2>Tragos con ${input}</h2>
    </div>`
    document.getElementById('titulo').appendChild(titulo)
    
    barra.map(el=>{
        let resultado = document.createElement('div')
        resultado.innerHTML = `<div class='resultado'>
        <div class="card resultado" >
        <h3 class="card-title">${el.nombre}</h3>
        <img src="${el.imagen}" class="card-img-top imagen" alt="foto de ${el.nombre}">
        <div class="card-body">
            <h4 class="card-subtitle mb-2 text-muted">Receta:</h4>
            <p class="card-text">${el.receta}</p>
        </div>
        </div>
        </div>
        `
        document.getElementById('res').appendChild(resultado)
    })
})

borrar.addEventListener('click', function(){
    window.location.reload()
})
        
        




    
