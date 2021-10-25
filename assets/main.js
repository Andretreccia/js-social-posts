/* Creare una pagina che elenchi una lists di post socials a partire da un
 array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like. */

let myLike = []

const socialPost = [
    {
        id: 1,
        author: {
            nome: "Luke Skywalker",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 4,
        date: "25/10/2021"
    },
    {
        id: 2,
        author: {
            nome: "Leila Organa",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 45,
        date: "24/10/2021"
    },
    {
        id: 3,
        author: {
            nome: "Ian Solo",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 90,
        date: "18/10/2021"
    },
    {
        id: 4,
        author: {
            nome: "Lando Calrissian",
            avatarImg: "https://unsplash.it/100/100?image=",
        },
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim hic voluptatem maxime exercitationem dolorem quod tenetur optio molestiae fuga laudantium, dolores perspiciatis porro vitae inventore dicta totam, sed quia?",
        img: "https://unsplash.it/600/400?image=",
        like: 2345,
        date: "03/10/2021"
    }
]
console.log(socialPost)
for (let i = 0; i < socialPost.length; i++) {
    let post = `<div class="card">
                        <div class="card-body">
                                <div class="row">
                                    <div class="col-2">
                                        <img
                                           class="img-fluid" src="${socialPost[i].author.avatarImg}"alt="">
                                    </div>
                                    <div class="col">
                                        <h5 class="card-title">${socialPost[i].author.nome}</h5>
                                        <p class="card-text"><small
                                                class="text-muted">Last updated ${socialPost[i].date}</small>
                                        </p>
                                    </div>
                                </div>
                            <p class="card-text">${socialPost[i].content}</p>
                            <img src="${socialPost[i].img}"class="img-fluid"
                                alt="">
                                <div class="container">
                                    <div class="row">
                                        <div class="col">
                                            <input id="Like${[i]}" class="btn btn-primary" type="button" value="0">
                                        </div>
                                        <div class="col">
                                            <p>Piace a ${socialPost[i].like} persone</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>`
    //console.log(post)
    document.getElementById("postContainer").innerHTML += post

}

document.getElementById("Like2").addEventListener("click", function () {
    //console.log("like")
    let like = document.getElementById("Like")
    like.value = 1
})

