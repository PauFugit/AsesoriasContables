import {
    RxCrop,
    RxDesktop,
    RxPencil2,
    RxReader,
    RxRocket,
    RxAccessibility,
  } from "react-icons/rx";
  
  import SpaceCity1 from "../../public/assets/clienteuno.png";
  import SpaceCity5 from "../../public/assets/clienteuno.png";
  import SpaceCity6 from "../../public/assets/clienteuno.png";
  import SpaceCity7 from "../../public/assets/clienteuno.png";
  import SpaceCity8 from "../../public/assets/clienteuno.png";
  import SpaceCity9 from "../../public/assets/clienteuno.png";
  import CardServicioUno from "../../public/assets/cardserviciouno.jpg";
  import CardServicioDos from "../../public/assets/cardserviciodos.jpg";
  import CardServicioTres from "../../public/assets/cardserviciotres.jpg";
  import CardServicioCuatro from "../../public/assets/cardserviciocuatro.jpg";
  


  export const ClienteData = [
    {
      icon: RxCrop,
      title: "Development",
      content: "Lorem ipsum dolor sit /amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity9,
    },
    {
      icon: RxPencil2,
      title: "Branding",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity1,
    },
    {
      icon: RxDesktop,
      title: "Design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity6,
    },
    {
      icon: RxReader,
      title: "Seo",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity7,
    },
    {
      icon: RxAccessibility,
      title: "Management",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity5,
    },
    {
      icon: RxRocket,
      title: "Production",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      backgroundImage: SpaceCity8,
    },
  ];

export const ServiceData = [
    {
        icon: RxCrop,
        title: "Servicio Uno",
        content: "Descripción servicio uno",
        image: CardServicioUno,
        
    },
    {
        icon: RxCrop,
        title: "Servicio Dos",
        content: "Descripción servicio dos",
        image: CardServicioDos,
    },
    {
        icon: RxCrop,
        title: "Servicio Tres",
        content: "Descripción servicio tres",
        image: CardServicioTres,
        
    },
    {
        icon: RxCrop,
        title: "Servicio Cuatro",
        content: "Descripción servicio cuatro",
        image: CardServicioCuatro,
    },
];