export interface DataType {
  id?: number;
  rating: string;
  title: string;
  text: string;
  dropdown: string;
}

const data: DataType[] = [
  {
    id: 1,
    rating: "full",
    title: "MS. Dimple",
    text: "Using their services they have great plans to entertain every sort of customer with",
    dropdown:
      "Using their services they have great plans to entertain every sort of customer with great CSR",
  },
  {
    id: 2,
    rating: "minus1",
    title: "Ms. Saloni Bal",
    text: "Using the DU services withBrandz as our channel partner quick turnaround ti...",
    dropdown:
      "Using the DU services with Brandz as our channel partner quick turnaround time and efficient staff",
  },
  {
    id: 3,
    rating: "minu2",
    title: "Mr. Anugrah ",
    text: "Got the internet connection for my company within the time span of few business d...",
    dropdown:
      "Got the internet connection for my company within the time span of few business days.",
  },
];

export default data;
