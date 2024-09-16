import React from 'react'
import PropTypes from 'prop-types';
//const newMessage = [0,1,2,3,4,5,6,7,8,9];
// const newMessage = {
//     message: 'Roberto',
//     title: 'Stick',
// }


// const getSaludo = (saludo) => {
//     return (saludo ? 'Hola Mundo' : 'Adios mundo');
// }



// si la variable no necesita ser renderizada, 
//entonces se puede poner fuera de la funcion para que react 
//no lo renderice todo el tiempo
// o mejor dicho si no hay dependencia en la pagina, que necesite estar cambiando, se los coloca fuera. 

//no nos dejara mostar el objeto cuando ponemos: <h1>{newMessage}</h1>
//para eso usamos el JSON.stringify

// las funciones no pueden ser Async porque es un objeto

// es mas facil destructurar el props
//const FirstApp = (props) => {

export const FirstApp = ({ title , subTitle, name }) => {
    

    return (
        <>
            {/* <h1>{getSaludo(true)}</h1>
            <h1>{getSaludo(false)}</h1> */}
            {/* <h1>{newMessage}</h1> */}
            {/* <h1>{JSON.stringify(newMessage)}</h1> */}

            <h1>{ title }</h1>
            {/* <div data-testid="test-title">{ title }</div> */}

            {/* <h2>FirstApp</h2> */}
            {/* <p>Soy tito</p> */}

            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    name : PropTypes.string,
}

FirstApp.defaultProps = {
    title : 'No hay titulo',
    subTitle : 'No hay subtitulo',
    name : 'No hay nombre',
}