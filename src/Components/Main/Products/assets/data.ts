import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";
import img4 from "./img4.webp";
import img5 from "./img5.webp";
import img6 from "./img6.webp";

interface DataType {
  id: number;
  img: string;
  title: string;
  text: string;
}

export const data1: DataType[] = [
  {
    id: 1,
    img: img1,
    title: "Basic Plan",
    text: "Business mobile plans simplify your life with one of the many benefits of choosing local and international post paid plans",
  },
  {
    id: 2,
    img: img2,
    title: "Executive Plan",
    text: "Business Executive plan with higher benefits includes zero activation fee, special numbers, unlimited minutes",
  },
  {
    id: 3,
    img: img3,
    title: "Devices",
    text: "Latest smarphone devices, smart watches, tablets at zero upfront with our best suitable business plan",
  },
];

export const data2: DataType[] = [
  {
    id: 4,
    img: img4,
    title: "Broadband Internet",
    text: "Connect with high-speed internet and reliable secure service with Business Essential and Managed Broadband Premium",
  },
  {
    id: 5,
    img: img5,
    title: "Business Voice",
    text: "Get cost-effective, uninterrupted communication with our advanced Voice services for your business",
  },
  {
    id: 6,
    img: img6,
    title: "Business Wifi",
    text: " Improve connectivity, efficiency and productivity with our reliable Business WiFi solutions",
  },
];
