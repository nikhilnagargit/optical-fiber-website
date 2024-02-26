import {
  RiInstallLine,
  RiCompass3Line,
  RiWaterFlashLine,
  RiCalendarCheckLine,
  RiExchangeDollarLine,
} from "react-icons/ri";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";

const headerSpanish = {
  punchline: "Lambdas de puerto a puerto con",
  attributes: ["alta confiabilidad", "nx10G y nx100G", "pérdidas mínimas"],
  buttoncontact: "Contacta",
  buttonexplore: "Explora Más",
};
const headerEnglish = {
  punchline: "Port to port lambdas with",
  attributes: ["Performance", "99.9% QOS", "Bandwidth"],
  buttoncontact: "Contact Us",
  buttonexplore: "Explore More",
};

const customersSpanish = {
  header: "Clientes",
  subheader: "25 años",
  subheader_1:
    "trabajando para los  líderes de la industria con servicios de construccion y mantenimiento.",
};

const customersEnglish = {
  header: "Customers",
  subheader: "25 years",
  subheader_1: "working for industry leaders in the region.",
};

const partnersSpanish = {
  header: "Aliados Comerciales",
  subheader: "Red OPGW unificando",
  subheader_1: "a todos los transportistas de electricidad en Guatemala",
};

const partnersEnglish = {
  header: "Aliados comerciales",
  subheader: " Expertos en la industria",
  subheader_1: "de transmision de energia nos respaldan",
};

const finalFormEnglish = {
  header: "Limitless reliabilitym at your fingertips",
  subheader:
    "The perfect transport network connecting both ports in Guatemala exists -- get in touch today.",
  name: "Name",
  email: "Email",
  comment: "Comment",
  formheader: "Get in Touch",
  submit: "Submit",
};

const finalFormSpanish = {
  header: "Confiabilidad sin límites, a tu alcance",
  subheader:
    "La red perfecta para transporte de capacidad existe – inicia hoy.",
  formheader: "Ponerse en contacto",
  name: "Nombre",
  email: "Correo electrónico",
  comment: "Comentario",
  submit: "Entregar",
};

const dwdmEnglish = {
  header: "Custom IPoDWDM",
  subheader: `Whole country covered, Optical highway over high voltage. 
    We simplify everything so you can use the same Lambda with multiple OPGW providers.`,
  subheader_1: `Nuestro servicio WAVELENGTH le facilita a nuestros clientes mover cargas pesadas de trafico con alto rendimiento (throughput), 
    a traves de entornos metro, metro DCI (Data Center Interconnection), Regional. Larga o Ultra Larga Distancia (Long Haul y ULH) y en enlaces submarinos. mediante el use de tecnologia DWDM, usando multiples ondas de Luz coloreadas (colored waves) sobre la misma fibra optica usan doel medio de transmision eficientemente.`,
};
const dwdmSpanish = {
  header: "IPoDWDM a la Medida",
  subheader:
    "Todo el país cubierto, autopista óptica sobre alto voltaje. Simplificamos todo para que pueda usar la misma Lambda con múltiples proveedores OPGW.",
  subheader_1: `Autopista óptica  de puerto a puerto, con la flexibilidad de adquirir capacidad por lambdas de nx10G y nx100G.
    Nuestro servicio de transporte por Lambdas esta pensado en los segmentos mas críticos en tu red -- desde enlaces submarinos a entornos metropolitanos y Data Center Interconnection.`,
};

const subHeaderSpanish = `Transporte de datos para ultra-larga distancia sobre alto voltaje. Confiabilidad incomparable, a la medida de tu presupuesto óptico y financiero.`;
const subHeaderEnglish = `Transport capacity while taking care of your optical and financial
  budget with our unified OPGW network. Network with best connecitvity.`;
const dataSpanish = [
  {
    text: "Instalado a 50 metros sobre el suelo",
    color: "green",
    icon: RiInstallLine,
    image: icon1,
  },

  {
    text: "17 db/km perdida promedio",
    color: "red",
    icon: RiWaterFlashLine,
    image: icon2,
  },
  {
    text: "400 km de cobertura con 99.99% QoS",
    color: "blue",
    icon: RiCompass3Line,
    image: icon3,
  },
  {
    text: "Gestion PLEX and PLIN centralizada",
    color: "purple",
    icon: RiCalendarCheckLine,
    image: icon4,
  },
  {
    text: "Ahorros en mantenimiento",
    color: "yellow",
    icon: RiExchangeDollarLine,
    image: icon5,
  },
];

const dataEnglish = [
  {
    id: 1,
    text: "Installed 50 meters above the ground",
    color: "green",
    icon: RiInstallLine,
    image: icon1,
  },

  {
    id: 2,
    text: "17 db/km average loss",
    color: "red",
    icon: RiWaterFlashLine,
    image: icon2,
  },
  {
    id: 3,
    text: "400 km coverage with 99.99% QoS",
    color: "blue",
    icon: RiCompass3Line,
    image: icon3,
  },
  {
    id: 4,
    text: "Centralized PLEX and PLIN management",
    color: "purple",
    icon: RiCalendarCheckLine,
    image: icon4,
  },
  {
    id: 5,
    text: "Savings in Maintenance and OpEx",
    color: "yellow",
    icon: RiExchangeDollarLine,
    image: icon5,
  },
];

const navbarSpanish = [
  { title: "Sobre Nosotras", link: "#aboutus" },
  { title: "Servicios", link: "#services" },
  { title: "Clientes", link: "customers" },
];
const navbarEnglish = [
  { title: "About", link: "#aboutus" },
  { title: "Services", link: "#services" },
  { title: "Customers", link: "customers" },
];

export default function languageSelect(spanish) {
  const addedValue = spanish ? dataSpanish : dataEnglish;
  const header = spanish ? headerSpanish : headerEnglish;
  const subHeader = spanish ? subHeaderSpanish : subHeaderEnglish;
  const customers = spanish ? customersSpanish : customersEnglish;
  const partners = spanish ? partnersSpanish : partnersEnglish;
  const services = spanish ? dwdmSpanish : dwdmEnglish;
  const final = spanish ? finalFormSpanish : finalFormEnglish;
  const navitems = spanish ? navbarSpanish : navbarEnglish;

  return {
    header,
    addedValue,
    subHeader,
    customers,
    partners,
    services,
    final,
    navitems,
  };
}
