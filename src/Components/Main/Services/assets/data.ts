import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import img3 from "../assets/img3.webp";
import img4 from "../assets/img4.webp";

export interface DataType {
  id?: number;
  img: string;
  title: string;
  text: string;
}

const data: DataType[] = [
  {
    id: 1,
    img: img1,
    title: "Mobile Plans",
    text: "Grow your business with our new business mobile plans now available for postpaid & prepaid.",
  },
  {
    id: 2,
    img: img2,
    title: "Broadband & Landline",
    text: "Connect with high speed internet and reliable secure service with business essential plans.",
  },
  {
    id: 3,
    img: img3,
    title: "Handsets",
    text: "The latest smartphones, smart watches, accessories and other devices are available with our exclusive plan.  ",
  },
  {
    id: 4,
    img: img4,
    title: "Special Offers",
    text: "Stay connected to your business with our data bundle and roaming packs when you are abroad.",
  },
];

export default data;
