import React, { useState } from 'react'

function Contador2(props) {

    const [numero, setNumero] = useState(props.inicial)

    const incremento = () => {
        setNumero(numero + props.passo)
        
    }
    const decremento = () => {

        if (numero == 0) {
            console.log("Não é possível diminuir o valor menor que zero");
            return 
        }

        setNumero(numero - props.passo)
        
    }

    return (
        <>
            <h2>Contador: 10 em 10</h2>
            <h2>{numero}</h2>
            <button onClick={incremento}>+</button>
            <button onClick={decremento}>-</button>

        </>
    )
}

export default Contador2;