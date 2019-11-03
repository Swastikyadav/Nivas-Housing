const HouseArray = [
  {
    imgUrl:
      "https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Fhomea.jpg?v=1557148009425",
    name: "San Juan Villa",
    description:
      "San Juan Villa is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address: `by Saya Homes Pvt Ltd At New Mumbai, Gore Gawn Status: Under Construction.`
  },
  {
    imgUrl:
      "https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Fhomeb.jpg?v=1557148014102",
    name: "Mannat",
    description:
      "Mannat is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Construction Finished."
  },
  {
    imgUrl:
      "https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Fhomec.jpg?v=1557148019237",
    name: "House 3",
    description:
      "House 3 is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Under Construction."
  },
  {
    imgUrl:
      "https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Fslider1.jpg?v=1557148350587",
    name: "House 4",
    description:
      "House 4 is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Under Construction."
  },
  {
    imgUrl:
      "https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Fslider.jpg?v=1557148351349",
    name: "House 5",
    description:
      "House5 is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Under Construction."
  },
  {
    imgUrl:
      "https://cdn.glitch.com/88b46ae4-2180-4211-aa93-f3a6899d3f4a%2Fslider2.jpg?v=1557148371573",
    name: "House 6",
    description:
      "House6 is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Under Construction."
  },
  {
    imgUrl:
      "data:image/jpeg;base64,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",
    name: "House 7",
    description:
      "House7 is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Under Construction."
  },
  {
    imgUrl:
      "data:image/jpeg;base64,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",
    name: "Home 8",
    description:
      "Home 8 is an amazing house. It is the house of dreams. Get It Now",
    price: "",
    address:
      "by Saya Homes Pvt Ltd At Indirapuram, Ghaziabad Status: Under Construction."
  }
];

export default HouseArray;
