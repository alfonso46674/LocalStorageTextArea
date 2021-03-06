//variables

const Listatweets = document.querySelector('#lista-tweets')


//******* */
// event listeners
//****** */

eventListeners();

function eventListeners(){
    //al enviar el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweets
    Listatweets.addEventListener('click',borrarTweet);

    //contenido cargado; Evento para cuando la pagina sea cargada al 100%
    document.addEventListener('DOMContentLoaded', localStorageListo);

}

//******* */
//funciones
//******* */

//Añadir el tweet del formulario
function agregarTweet(event){
    event.preventDefault();

    //leer el text area
    let tweet = document.getElementById('tweet').value;

    //boton de eliminar
    let botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-tweet';
    botonBorrar.innerText = 'Borrar'

    //crear elemento y añadir el contenido a la lista
    let li = document.createElement('li');
    li.innerText = tweet;
    //añade el boton de borrar
    li.appendChild(botonBorrar);
    //añade el tweet a la lista
    Listatweets.appendChild(li)

    //Añadir a local storage
    agregarTweetLocalStorage(tweet);


}

//borrar el tweet seleccionado
function borrarTweet(event){
event.preventDefault()

if(event.target.className === 'borrar-tweet'){
    event.target.parentElement.remove();
    borrarTweetLocalStorage(event.target.parentElement.innerText);
}

}


//Mostar tweets de local storage en pantalla
function localStorageListo(){
    let tweets = obtenerTweetsLocalStorage();
    tweets.forEach((tweet)=>{
            //boton de eliminar
        let botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet';
        botonBorrar.innerText = 'Borrar'

        //crear elemento y añadir el contenido a la lista
        let li = document.createElement('li');
        li.innerText = tweet;
        //añade el boton de borrar
        li.appendChild(botonBorrar);
        //añade el tweet a la lista
        Listatweets.appendChild(li)
    })
}

//Agregar tweet al local storage
function agregarTweetLocalStorage(tweet){
    //obtiene los tweets guardados en local storage
    let tweets = obtenerTweetsLocalStorage();

    //añadir el nuevo tweet a tweets
    tweets.push(tweet);

    //de arreglo a string con stringify; Se guardan los tweets en local storage
    localStorage.setItem('tweets', JSON.stringify(tweets));

}

//obtener tweets de local storage como un arreglo
function obtenerTweetsLocalStorage(){
    let tweets;

    //revisar valores del local storage
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

//Eliminar tweet de local storage
function borrarTweetLocalStorage(tweet){

    let tweets = obtenerTweetsLocalStorage();
    
    //Elimina la palabra buscar del tweet
    let tweetBorrar = tweet.substring(0, tweet.length - 6); 

    tweets.forEach((tweet,index)=>{
        if(tweetBorrar == tweet){
            tweets.splice(index, 1);
        }
    });

    localStorage.setItem('tweets', JSON.stringify(tweets));
}