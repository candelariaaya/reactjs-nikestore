import React from 'react';

function ProductoDetalle (props){
    const {datos} = props;
    console.log(props.datos);
    
    return(
        <>
            <h3>{datos.title}</h3>
            <h3>$ {datos.price}</h3>
            <h3>{datos.description}</h3>
        </>
    );    
}

export default ProductoDetalle;