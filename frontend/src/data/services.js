import {
  Building2,
  DoorOpen,
  ShieldCheck,
  Bath,
  SquareStack,
  PanelsTopLeft,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Toughened Glass",
    description:
      "Premium safety glass for homes and commercial buildings.",
      img: "/images/services/toughened-glass.png",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Glass Door",
    description:
      "Modern frameless glass doors with premium fittings.",
        img: "/images/services/glass-door.png",
    icon: DoorOpen,
  },
  {
    id: 3,
    title: "Office Partition",
    description:
      "Elegant office partitions with acoustic glass solutions.",
        img: "/images/services/office-partition.png",
    icon: Building2,
  },
  {
    id: 4,
    title: "Shower Cubicle",
    description:
      "Luxury shower enclosures with tempered safety glass.",
        img: "/images/services/shower-cubicle.png",

    icon: Bath,
  },
  {
    id: 5,
    title: "Glass Railing",
    description:
      "Stylish balcony and staircase railing systems.",
        img: "/images/services/glass-railing.png",
    icon: SquareStack,
  },
  {
    id: 6,
    title: "Spider Glazing",
    description:
      "Premium structural glazing for commercial buildings.",
        img: "/images/services/spider-glazing.png",
    icon: PanelsTopLeft,
  },
];

export default services;