import React, { useState } from 'react'

function Contador(props) {

    const [numero, setNumero] = useState(0)

    const incremento = () => {
        setNumero(numero + 1)
        
    }
    const decremento = () => {

        if (numero == 0) {
            console.log("Não é possível diminuir o valor menor que zero");
            return 
        }

        setNumero(numero - 1)
        
    }

    return (
        <>
            <h2>{props.abobrinha}</h2>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>

        </>
    )
}

export default Contador