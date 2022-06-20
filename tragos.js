const cocktails =[

    {
        nombre :'Old Fashioned',
        imagen:'https://www.clarin.com/img/2020/09/08/I_AzjvVPc_340x340__1.jpg',
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
        cocktail previamente refrescada. Perfumar y decorar con piel de naranja y una cereza.`,
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
        nombre:'Caipiroska', 
        imagen:'https://coctelia.com/wp-content/uploads/2020/05/caipiroska.jpg',
        receta:`Machacar en un vaso corto 1/2 lima en trozos junto con 25 gr de azúcar.
        Incorporar abundante hielo picado y 50 ml de vodka.
        Con una cuchara en espiral subir las limas del fondo del vaso para integrar.`,
        ingredientes:['vodka', 'lima']
    },

    {
        nombre:'Mint Julep', 
        imagen:'https://coctelia.com/wp-content/uploads/2018/06/mint-julep.jpg',
        receta:`Agregar 50ml de Bourbon, 7ml de almíbar simple y 3 hojas de menta en un vaso con
        una parte de hielo. Revolver con una varilla de coctelería. Añadir más hielo picado y 
        decorar con penachos de menta fresca.`,
        ingredientes:['bourbon', 'almibar', 'menta']
    },

    {
        nombre:'Margarita', 
        imagen:'https://bakeitwithlove.com/wp-content/uploads/2021/09/Vodka-Margarita-sq.jpg',
        receta:`Colocar 50ml de Tequila, 25ml de Cointreau y 25 ml de jugo de limón
        en una coctelera y batir enérgicamente con abundante hielo. Colar y servir
        en copa cocktail labiada con sal.`,
        ingredientes:['tequila', 'cointreau', 'jugo de limon']
    },

    {
        nombre:'Side Car', 
        imagen:'https://recetasfacilesok.com/wp-content/uploads/2021/06/Como-hacer-sidecar.jpg',
        receta:`Colocar 50ml de Cognac, 25ml de Cointreau y 25ml de jugo de limón en una coctelera
        con abundante hielo y batir enérgicamente. Colar y servir perfumando con limón deshidratado.`,
        ingredientes:['cognac', 'cointreau', 'jugo de limon']
    },

    {
        nombre:'White Russian', 
        imagen:'https://www.eatclub.tv/wp-content/uploads/sites/4/2021/12/whiterussianec-1200x675.jpg',
        receta:`Colocar 30ml de Vodka, 30ml de Licor de Café y 30ml de Crema de leche en una coctelera 
        y batir enérgicamente con abundante hielo. Colar sobre vaso de trago corto
        y agregar un cubo grande de hielo.`,
        ingredientes:['vodka', 'licor de cafe', 'crema']
    },
    
    {
        nombre:'Mojito', 
        imagen:'https://staticfanpage.akamaized.net/wp-content/uploads/sites/22/2021/07/mojito-1200x675.jpg',
        receta:`Agregar 3 penachos de menta, 30ml de almíbar y 30 ml de jugo de lima y pisar 
        suavemente en el vaso. Agregar 60ml de Ron, completar con hielo picado y revolver. Completar 
        con soda. Decorar con menta y una rodaja de lima.`,
        ingredientes:['ron', 'almibar', 'jugo de lima', 'soda', 'menta']
    },

    {
        nombre:'Daiquiri', 
        imagen:'https://www.tucocteleria.com/wp-content/uploads/2018/04/Daiquiri.jpg',
        receta:`Colocar 60ml de Ron, 30ml de jugo de lima y 2ctas de azúcar en una ccotelera 
        con abundante hielo. Batir enérgicamente, colar y servir en copa cocktail.`,
        ingredientes:['ron', 'jugo de lima', 'azucar']
    },

    {
        nombre:'Whisky Sour', 
        imagen:'https://cocinaalchile.com/wp-content/uploads/2020/03/whisky.jpg',
        receta:`Colocar 45ml de Bourbon, 30ml de jugo de limón y 2ctas de azúcar en una coctelera con hielo
        y agitar durante 10 segundos. Colar y servir en vaso corto con hielo. Decorar con cáscara 
        de naranja.`,
        ingredientes:['bourbon', 'jugo de limon', 'azucar']
    },

    {
        nombre:'Black Russian', 
        imagen:'https://okdiario.com/img/recetas/2017/08/14/coctel-black-russian.jpg',
        receta:`Colocar en vaso corto 3 cubos de hielo, 4ml de Licor de café y 8ml de Vodka. 
        Mezclar.`,
        ingredientes:['vodka', 'licor de cafe']
    },

    

]
