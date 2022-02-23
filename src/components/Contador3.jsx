import React, { useState } from 'react'

function Contador3(props) {

    const [numero, setNumero] = useState(props.numero)

    const incremento = () => {
        if (numero >= props.limiteMaximo) {
            alert("Não é possível acrescer o valor para maior que 10");
            return 
        }

        setNumero(numero + 1)
        
    }
    const decremento = () => {

        if (numero == props.limiteMinimo) {
            alert("Não é possível diminuir o valor menor que zero");
            return 
        }

        setNumero(numero - 1)
        
    }

    return (
        <>
            <h2>{props.chuchu}</h2>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>

        </>
    )
}

export default Contador3;