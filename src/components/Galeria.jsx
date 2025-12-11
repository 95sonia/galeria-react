import React, { useState } from 'react'
import { Formulario } from './Formulario'
import { GridGalery } from './GridGalery'
import { handleRecogerCategoria } from './Formulario'

export const Galeria = () => {

    const[categoria, setCategoria] = useState([])

    return (
    <>
        <Formulario categoria = {handleRecogerCategoria}/>
        <GridGalery/>
    </>
    )
}
