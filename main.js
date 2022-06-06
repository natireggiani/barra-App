const tragos = [

    {
        nombre :'Old Fashioned',
        imagen:'https://i0.wp.com/blog.scoolinary.com/wp-content/uploads/2021/06/old_fashioned.jpg?w=1000&ssl=1',
        receta:`Refrescar en un mixin glass con abundante hielo 60 ml de Bourbon, 7 ml de almibar simple y 2 dash de Bitter Angostura.
        Servir y perfumar con los aceites de la piel de naranja.`,
        ingredientes:['bourbon', 'almibar', 'bitter angostura', 'naranja']
    },

    {
        nombre:'Moscow Mule',
        imagen:'https://www.petramora.com/blog/wp-content/uploads/2018/07/IMG_9398.jpg',
        receta:`Volcar 50 ml de vodka, 25 ml de jugo de lima, 20ml de almibar simple y hielo en un vaso mule, integrar con una cuchara coctelera.
        Completar con ginger beer y decorar con una cuña de lima y jengibre caramelizado.`,
        ingredientes:['vodka', 'jugo de limon', 'almibar', 'ginger beer']
    },

    {
        nombre:'Dry Martini',
        imagen:'https://cdn.colombia.com/gastronomia/2011/08/19/dry-martini-2999-1.webp',
        receta:`Incorporar 90ml de Gin, 15ml de Martini seco, 2 dash de Bitter Angostura y hielo en un mixin glass para refrescar.
        Colar sobre una copa cocktail previamente refrescada.
        Perfumar con la piel de limón y servir con 2 aceitunas verdes.`,
        ingredientes:[ 'gin', 'martini seco', 'bitter angostura', 'aceitunas verdes']
    },

    {
        nombre:'Cosmopolitan',
        imagen:'https://cocteles.club/wp-content/uploads/C%C3%B3ctel-cosmopolitan.jpg',
        receta:`Colocar 60ml de Vodka, 30ml de Cointreau y 30ml de jugo de arándano en una coctelera
        y batir enérgicamente con abundante hielo.
        Colar sobre una copa cocktail. Perfumar con piel de naranja.`,
        ingredientes:[ 'vodka', 'cointreau', 'jugo de arandano']
    },

    {
        nombre:'Negroni',
        imagen:'https://okdiario.com/img/recetas/2017/08/18/coctel-negroni.jpg',
        receta:`Colocar 30ml de Gin, 30 ml de Martini Rosso y 30 ml de Campari en un mixin glass y
        refrescar con abundante hielo. Colar y servir sobre vaso Old fashioned con un cubo
        grande de hielo. Perfumar con aceites cítricos de naranja.`,
        ingredientes:[ 'gin', 'martini rosso', 'campari']
    },

    {
        nombre:'Manhattan', 
        imagen:'https://imag.bonviveur.com/foto-de-portada-del-manhattan.webp',
        receta:`Colocar 50ml de Bourbon, 25 ml de Martini Rosso y 2 dash de Bitter Angostura en un
        mixin glass y refrescar por aproximadamente 30 segundos. Colar sobre una copa de 
        cocktail previamente refrescada. Perfumar y decorar con piel de naranja.`,
        ingredientes:['bourbon', 'martini rosso', 'bitter angostura']
    },

    {
        nombre:'Tom Collins',
        imagen:'https://www.comedera.com/wp-content/uploads/2022/05/Tom-Collins-shutterstock_431092006.jpg',
        receta:`Verter 60 ml de Gin, 30 ml de almíbar simple y 30 ml de jugo de limón en una coctelera y batir con
        abundante hielo. Colar sobre vaso de trago largo con hielo y completar con soda.
        Decorar con rodaja de limón y cereza al marrasquino.`,
        ingredientes:['gin', 'almibar', 'jugo de limon', 'soda']
    },

    {
        nombre:'Gibson',
        imagen:'https://i0.wp.com/saucydressings.com/wp-content/uploads/2020/06/gibson-cocktail.jpg?w=800&ssl=1',
        receta:`Verter 90 ml de Gin y 20 ml de Martini seco en un mixin glass y refrescar 
        con abundante hielo. Colar y servir en una copa cocktail previamente refrescada
        y decorar con cebollines.`,
        ingredientes:['gin', 'martini seco']
    },

    {
        nombre:'Hanky Panky', 
        imagen:'https://www.cocinayvino.com/wp-content/uploads/2017/10/coctel-hanky-panky.jpg',
        receta:`Refrescar en un mixin glass 45 ml de Gin, 45 ml de Martini Rosso y 1cda de Fernet.
        Servir y perfumar con los aceites de naranja.`,
        ingredientes:['gin', 'martini rosso', 'fernet']
    },

    {
        nombre:'Caiporoska', 
        imagen:'https://coctelia.com/wp-content/uploads/2020/05/caipiroska.jpg',
        receta:`Machacar en un vaso corto 1/2 lima en trozos junto con 25 gr de azúcar.
        Incorporar abundante hielo picado y 50 ml de vodka.
        Con una cuchara en espiral subimos las limas del fondo del vaso para integrar.`,
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
        
        




    
