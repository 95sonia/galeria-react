import React from 'react'

export const Formulario = () => {
   // const [valor, setValor] = useState("")
    const handleRecogerCategoria = (ev) => {
        ev.preventDefault()
        // para capturar la categoria hay que poner el name del input.value
        let categoria = ev.target.categoria.value;
        console.log(categoria)
        return categoria
        
    }
    return (
        <>
            <p> Buscador de imágenes</p>
            <form action="POST" id="formularioBuscador" onSubmit={handleRecogerCategoria}>
                <input type="text" id="categoria" name="categoria" required placeholder="Escribe una categoría" />
                <button type="submit" id="botonBuscar">Buscar </button>
            </form>
        </>

    )
}
