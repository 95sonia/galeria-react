import logoPexels from '../assets/pexels-logo.svg'

export const Header = () => {
    return (
        <>
            <header>
                <img src={logoPexels} alt="Logotipo de pexels" width="100"></img>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Buscador imágenes</li>
                            <li>Contacto</li>
                        </ul>
                    </nav>
            </header>
        </>
    )
}
