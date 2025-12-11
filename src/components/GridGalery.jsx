import { Card } from './Card'
import { Paginacion } from './Paginacion'

export const GridGalery = () => {
  // Simulación datos
  const fotos = [
    { id: 1, categoria: "playa", url: "#", img: "playa.jpg", descripcion: "Foto de la playa" },
    {id: 5, categoria: "playa", url: "#", img: "playa.jpg", descripcion: "Foto de la playa" },
    { id: 2, categoria: "montaña", url: "#", img: "montaña.jpg", descripcion: "Foto de la montaña" },
    { id: 3, categoria: "ciudad", url: "#", img: "ciudad.jpg", descripcion: "Foto de la ciudad" },
    { id: 4, categoria: "playa", url: "#", img: "playa2.jpg", descripcion: "Otra playa" },
  ];

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("playa");

  return (
    <>
      <Card

        //{fotos.map((foto) => (
          //<Card
            //img={img}
            //descripcion={descripcion}
            //url={url}
          ///>
        //))}
      />



      <Paginacion />
    </>
  )
}
