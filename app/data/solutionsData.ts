import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGlobe,
  faLayerGroup,
  faCrown,
  faLaptopCode,
  faDatabase,
  faShieldHalved,
  faNetworkWired,
  faBuilding,
  faMobile,
  faPrint,
  faLaptop
} from "@fortawesome/free-solid-svg-icons";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: IconDefinition;
}

export interface SolutionCategory {
  id: string;
  title: string;
  description: string;
  products: Product[];
}

export const solutionsData: SolutionCategory[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Modern, responsive and scalable websites",
    products: [
      {
        id: "web-basic",
        name: "Basic",
        description: "Landing page or simple business website",
        price: 300,
        icon: faGlobe,
      },
      {
        id: "web-standard",
        name: "Standard",
        description: "Multi-page website with CMS",
        price: 700,
        icon: faLayerGroup,
      },
      {
        id: "web-premium",
        name: "Premium",
        description: "Custom web app with integrations",
        price: 1500,
        icon: faCrown,
      },
    ],
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Custom software tailored to your business",
    products: [
      {
        id: "soft-basic",
        name: "Basic",
        description: "Small internal tools",
        price: 500,
        icon: faLaptopCode,
      },
      {
        id: "soft-standard",
        name: "Standard",
        description: "Business management systems",
        price: 1200,
        icon: faDatabase,
      },
      {
        id: "soft-mobile",
        name: "Mobile app development",
        description: "Mobile applications, both iOS and android, tailored to your business needs",
        price: 1200,
        icon: faMobile,
      },
    ],
  },
  {
    id: "networking",
    title: "Networking & Cybersecurity",
    description: "Secure networks and systems",
    products: [
      {
        id: "net-basic",
        name: "Basic",
        description: "Network setup & firewall",
        price: 600,
        icon: faNetworkWired,
      },
      {
        id: "net-premium",
        name: "Premium",
        description: "Advanced security & monitoring",
        price: 2000,
        icon: faShieldHalved,
      },
    ],
  },
  {
    id: "office-dev",
    title: "IT Essentials",
    description: "Digital office productivity systems",
    products: [
      {
        id: "office-essential",
        name: "Office Development Solutions",
        description: "Office automation & collaboration",
        price: 800,
        icon: faBuilding,
      },
      {
        id: "office-standard",
        name: "IT Services",
        description: "Office automation & collaboration",
        price: 800,
        icon: faLaptop,
      },
    ],
  },
];
