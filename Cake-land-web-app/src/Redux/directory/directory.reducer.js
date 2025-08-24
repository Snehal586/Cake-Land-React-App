const INITIAL_STATE = {
    sections : [
        {
            title : "Cakes",
            imageUrl : "https://www.itl.cat/pngfile/big/42-421036_cake-wallpaper-download-download-birthday-cake-images-hd.jpg",
            id:1,
            linkUrl:'shop/cakes'
        },
        {
            title : "Donuts",
            imageUrl : "https://images.unsplash.com/photo-1585653621032-a5fec164ee92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80",
            id:2,
            linkUrl:'shop/donuts'
        },
        {
            title : "Pastries",
            imageUrl : "https://c4.wallpaperflare.com/wallpaper/953/1020/893/food-dessert-pastry-hd-wallpaper-preview.jpg",
            id:3,
            linkUrl:'shop/pastries'
        },
        {
            title : "Dessert",
            imageUrl : "https://img5.goodfon.com/wallpaper/nbig/2/70/colorful-macarons-pechene-1.jpg",
            id:4,
            size:'large',
            linkUrl:'shop/desserts'
        },
        {
            title : "CupCakes",
            imageUrl : "https://cdn.wallpapersafari.com/98/68/k29Gha.jpg",
            id:5,
            size:'large',
            linkUrl:'shop/cupcakes'
        },
        {
            title:'Muffins',
            imageUrl:'https://www.biggerbolderbaking.com/wp-content/uploads/2020/05/Bakery-Style-Lemon-Blueberry-Muffins-WS-Thumbnail.jpg',
            id:6,
            size:'large',
            linkUrl:'shop/muffins'
        },
        {
            title:'Swiss Roll',
            imageUrl:'https://upload.wikimedia.org/wikipedia/commons/d/da/Sri_Lankan_Swiss_roll.jpg',
            id:7,
            size:'large',
            linkUrl:'shop/swiss_roll'
        }






    ]
}


const directoryReducer = ( state = INITIAL_STATE,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;