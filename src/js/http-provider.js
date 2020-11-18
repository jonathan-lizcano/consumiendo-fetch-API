
const Api = 'https://rickandmortyapi.com/api/character/';


const traerPersonaje = async() => {

    const espePersonaje = await fetch(Api);
    const {results} = await espePersonaje.json();

    return  results;
}



export {

    traerPersonaje
}