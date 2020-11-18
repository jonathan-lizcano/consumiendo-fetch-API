import { traerPersonaje } from "./http-provider";
import { componentes } from "../css/componentes.css";
import { styles } from "../styles.css";

const body = document.body;
let contadorId = 0;
let tbody;

// let contador = 0;

const crearHtml = () =>{

    const html = `
    <header>
        <div class="cabezera">
            
            <img class="imagen1" src="../assets/imagen rick and morty.png">
            
        </div>
    </header>
    <hr>

    <button class="btn btn-primary">Traer Personaje</button>
    <br>
    <br>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Especie</th>
                <th scope="col">Género</th>
                <th scope="col">Origen</th>
                <th scope="col">Avatar</th>
            </tr>
        </thead>
        <tbody>
        
           
        </tbody>
    </table>
    `;

    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    tbody = document.querySelector('tbody');
}

const eventos = () => {

   const boton = document.querySelector('button');

    boton.addEventListener( 'click', async() => {

        boton.disabled = true;

        const personaje = await traerPersonaje();
        crearFilaPersonaje( personaje[contadorId++] );

        boton.disabled = false;
    });
}



const crearFilaPersonaje = (personaje) => {
    
    
    
    const html = `
    <td scope="col"> ${personaje.id} </td>
    <td scope="col"> ${personaje.name} </td>
    <td scope="col"> ${personaje.species}</td>
    <td scope="col"> ${personaje.gender}</td>
    <td scope="col"> ${personaje.origin.name}</td>
    <td scope="col">
    <img class="img-thumbnail" src="${personaje.image}">
    </td>
    `;
    
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tbody.appendChild(tr);
}




export const init = () => {

    crearHtml();
    eventos();
    
    // result.forEach( crearFilaPersonaje );
}