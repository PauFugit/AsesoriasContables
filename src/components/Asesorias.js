import CardAsesorias from '../components/CardAsesorias'

export default function Asesorias() {
  return (
    <div className="container mx-auto p-6">
      <CardAsesorias
        title="ASESORÍAS EN PASOS DE BAILE TRADICIONALES"
        description="CUERPO DE TEXTO LOREM IPSUM. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="/path-to-your-image1.png"
      />
      <CardAsesorias
        title="ASESORÍAS EN BAILES DE PAREJA"
        description="CUERPO DE TEXTO LOREM IPSUM. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="/path-to-your-image2.png"
        reverse
      />
      <CardAsesorias
        title="ASESORÍAS EN PASOS DE BAILES PROHIBIDOS"
        description="CUERPO DE TEXTO LOREM IPSUM. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        imageSrc="/path-to-your-image3.png"
      />
    </div>
  )
}
