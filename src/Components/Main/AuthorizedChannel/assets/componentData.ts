import img1 from "../assets/componentImg.webp";
import img2 from "../assets/componentImg2.webp";
import img3 from "../assets/componentImg3.webp";
import img4 from "../assets/componentImg4.webp";

export interface DataType {
  id: number;
  img: string;
  title: string;
  text: string;
}

const data: DataType[] = [
  {
    id: 1,
    img: img1,
    title: "About Us",
    text: "Brand Management Consultancy (BMC), is an Authorized Channel Partner for Du Telecom in the United Arab Emirates (UAE). With a reputable presence for a decade, BMC operates in the UAE. The company specializes in providing telecommunication consultancy services that assist local and international businesses in finding the best telecommunication solutions offered by Du Telecom. ",
  },
  {
    id: 2,
    img: img2,
    title: "Our Vision",
    text: "BMC's role as an authorized channel partner of Du strengthens its position in the B2B telecommunication markets in the UAE, allowing it to provide a wide range of services from the support and resources offered by Du. This partnership can lead to mutually beneficial outcomes for both BMC and Du. ",
  },
  {
    id: 3,
    img: img3,
    title: "Our Mission",
    text: "At Brandz Management Consultancy, our mission is to empower businesses with reliable and innovative telecommunications solutions. We strive to be the leading provider of telecommunication services for businesses of all sizes, delivering on our promise of superior customer service and support.",
  },
  {
    id: 4,
    img: img4,
    title: "Our Services",
    text: "BMC is dedicated to offering premium services to its clients and has recently undergone a revamping phase led by experienced visionaries. Their team comprises top-tier consultants who advise businesses to meet their specific telecommunication needs across the UAE. BMC helps in supporting Du Telecommunications products and services in the region.  ",
  },
];

export default data;
