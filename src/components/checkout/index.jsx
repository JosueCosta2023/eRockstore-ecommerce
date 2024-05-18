import React from "react";

export const CheckOut = ({id}) => {

   

    return(
        <p>
           <h1>Hora de pagar</h1> 
            <p>Este é seu prodfuto: { id === undefined ? "Produto com erro" : id}</p>
        </p>
    )
}