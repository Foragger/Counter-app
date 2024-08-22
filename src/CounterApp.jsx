//1. Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp 
//2. El CounterApp debe de ser un Functional Component
//3. El contenido del CounterApp debe de ser: 

// <h1>CounterApp</h1>
// <h2>{value}</h2>

//4. Donde "value" es una propiedad enviada desde el padre hacia el componente
//   CounterApp(Debe ser numerica validada con PropTypes)
//5. Reemplazar en el index.js o main.jsx  el componente de <FirstApp /> por el componente <CounterApp/>
//   (No se olviden del value que debe de ser un numero)
//6. Asegurense de no tener errores ni warnings(Cualquier warning no usado, comentar en el codigo).


import React, { useState } from 'react';
import PropTypes from 'prop-types';



export const CounterApp = ({ value  }) => {

    //la cte counter recibe el valor inicial que le mandamos al useState, que es 10
    
    //la segunda cte es una funcion que hace funcionar al useState y se tiene que llamar a esa para cambiar al counter.
    
    const [counter, setCounter] = useState( value );
    
    //y cuando lo llamamos el setCounter cambio y en consecuencia se tiene que volver a renderizar
    
    const handleAdd = ( ) => {

        // En la version 18 solo se actualiza cuando termina de ejecutarse toda la funcion. En versiones anteriores no. 
        //counter = counter + 1; este no funciona porque counter es una Constante y no se puede cambiar.

        //entonces llamamos a setCounter que es una funcion que esta dentro de useState
        //y no se usa counter ++ porque daria error. porque de nuevo se estaria modificando el counter de manera directa.
        
        //setCounter( counter + 1);
       
        //Tambien no hace falta usar el valor de counter
        //setCounter( 1000 ) ;

        //a su vez tambien no hace falta usar el name implicito de la cte counter
        //tambien usar adentro como si fuese una funcion. 
        setCounter( (c) => c + 1 ) 
    }

    const handleReset = () =>
    {
        setCounter( 0 );
    }

    const handleMinus = () =>
    {
        setCounter( counter - 1 );
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2> {counter} </h2>
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleMinus }>
                -1
            </button>
            <button onClick={ handleReset }>
                Reset
            </button>
        </>
    )
}

CounterApp.propTypes = {
    value : PropTypes.number.isRequired,
}

