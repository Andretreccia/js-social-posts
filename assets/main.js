/* Creare una pagina che elenchi una lists di post socials a partire da un
 array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like. */


const socialPost = [
    {
        id: 1,
        author: {
            nome: "Andrea",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 0,
        date: "25/10/2021",
    },
    {
        id: 2,
        author: {
            nome: "Luca",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 0,
        date: "24/10/2021",
    },
    {
        id: 3,
        author: {
            nome: "Paolo",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 0,
        date: "18/10/2021",
    }
]

