//variables

const Listatweets = document.querySelector('#lista-tweets')

// event listeners
eventListeners();

function eventListeners(){
    //al enviar el formulario
    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    //borrar tweets
    Listatweets.addEventListener('click',borrarTweet);

}


//funciones

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


}

//borrar el tweet seleccionado
function borrarTweet(event){
event.preventDefault()

if(event.target.className === 'borrar-tweet'){
    event.target.parentElement.remove();
    alert('Tweet eliminado');
}

}