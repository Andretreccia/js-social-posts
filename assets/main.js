/* Creare una pagina che elenchi una lists di post socials a partire da un
 array di oggetti.
Gli attributi minimi del modello di un post: id, contenuto, immagine,
autore (nome, avatar), numero di likes, data creazione.
Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like. */


//array con i post a cui ho messo like
let myLike = []
//arrau contenente id, contenuto, immagine,autore(nome, avatar), numero di likes, data creazione.
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
//console.log(socialPost)
//ciclo per stampare le card nella DOM
for (let i = 0; i < socialPost.length; i++) {
    //variabile con valore l'elemento da creare
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
                                            <button class="btn mt-2 like_button not_like" data-idCurrent="${socialPost[i].id}"><i class="fas fa-thumbs-up fa-lg"></i> Mi Piace</button>
                                        </div>
                                        <div class="col mt-3">
                                            <p>Piace a <span class="like_counter-${socialPost[i].id}">${socialPost[i].like}</span> persone</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>`
    //console.log(post)
    //seleziona il contenitore e inserisci i post tramite .innerHTML
    document.getElementById("postContainer").innerHTML += post

}


//funzione per ottenre l id nel post il cui bottone è collocato
//crea una costante con valore i bottoni nella DOM
const likeButtons = document.getElementsByClassName("like_button")
//ciclo con lunghezza il numero dei bottoni
for (let i = 0; i < likeButtons.length; i++) {
    //ottieni una costante singolo bottone
    const likeButton = likeButtons[i];
    //al click del bottone
    likeButton.addEventListener("click", function () {
        //console.log(socialPost[i].id)
        if (likeButton.classList.contains("not_like")) {
            likeButton.classList.remove("not_like")
            myLike.push(socialPost[i].id)
            console.log(myLike)
            let idBtnPost = this.getAttribute("data-idCurrent")
            let likeCounter = document.querySelector(".like_counter-" + idBtnPost)
            likeCounter.innerHTML = parseInt(likeCounter.innerHTML) + 1;
        }

    })
}
