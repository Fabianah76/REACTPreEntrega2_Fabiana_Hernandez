const products= [
    
    {   id: 1, 
        name: "Blusa floral", 
        description: "Blusa de manga corta con estampado floral", 
        price: 29.99, 
        image: "https://as1.ftcdn.net/v2/jpg/10/17/81/20/1000_F_1017812026_7IHmSXFxSxzJdNZ8a2o9GCpnpTvQOksz.jpg",
        category: "Tops",

    },
    
    {   id: 2, 
        name: "Top sin mangas", 
        description: "Top sin mangas para el verano", 
        price: 12.99, 
        image: "https://t4.ftcdn.net/jpg/05/37/93/33/240_F_537933315_UHfVsCF3kRJqkF0DpcLJ24UfX2exwoBO.jpg",
        category: "Tops",
    },
    
    {   id: 3, 
        name: "Blusa de seda", 
        description: "Blusa elegante de seda", 
        price: 49.99, 
        image: "https://t4.ftcdn.net/jpg/07/43/62/61/240_F_743626147_Vwquz2ta67yMxjlPhEBCRbl2trdKw2Js.jpg",
        category: "Tops",
    },
   
    
    {   id: 4, 
        name: "Jeans ajustados", 
        description: "Jeans ajustados", 
        price: 49.99, 
        image: "https://as1.ftcdn.net/v2/jpg/00/99/18/42/1000_F_99184241_REn0FGJqzGtoOOaEDohrjWAaNK7exzuF.jpg",
        category: "Bottoms",
    },
    
    {   id: 5, 
        name: "Falda plisada", 
        description: "Falda plisada", 
        price: 39.99, 
        image: "https://as2.ftcdn.net/v2/jpg/03/97/99/51/1000_F_397995104_Ge61YUCDd77eOKMHCGZTGN1IYxgm15w8.jpg",
        category: "Bottoms",
    },
    
    {   id: 6, 
        name: "Jeans acampanados",
        description: "Jeans de estilo retro", 
        price: 44.99, 
        image: "url_a_imagen_20", 
        category: "Bottoms",
    },


    {   
        id: 7, 
        name: "Sandalias de verano", 
        description: "Sandalias cómodas para el verano",
        price: 19.99, 
        image: "url_a_imagen_25", 
        category: "Calzado",
    },
        
    {   id: 8, 
        name: "Botines de cuero", 
        description: "Botines de cuero elegantes", 
        price: 69.99, 
        image: "url_a_imagen_26", 
        category: "Calzado",
    },

    {   
        id: 9, 
        name: "Zapatillas deportivas", 
        description: "Zapatillas para correr", 
        price: 59.99, 
        image: "url_a_imagen_27",
        category: "Calzado",
    },
   

    {   
        id: 10, 
        name: "Bolso de mano", 
        description: "Bolso de mano de cuero sintético", 
        price: 59.99, 
        image: "url_a_imagen_37",
        category: "Accesorios",
    },

    {   
        id: 11, 
        name: "Collar de perlas", 
        description: "Collar elegante de perlas", 
        price: 24.99, 
        image: "url_a_imagen_38",
        category: "Accesorios",
     },

    {   id: 12,
        name: "Pulsera de cuero", 
        description: "Pulsera ajustable de cuero", 
        price: 12.99, 
        image: "url_a_imagen_41", 
        category: "Accesorios",
    },
]

const getProducts = new Promise((resolve, reject) => {
    //simulamos un retraso de red con setTimeout
    setTimeout(() => {
      resolve(products);
    }, 3000);
  });
  
export default getProducts
