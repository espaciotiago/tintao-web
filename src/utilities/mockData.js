export const productsList = [
  {
    id: 5,
    name: "Kamoras",
    summary: "500 g - Café de origen",
    color: "#F2C971",
    colorLight: "#f2c971",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/kamoras500.png?alt=media&token=d95e4b67-df3a-4e5f-b79e-5c186f5b98a8",
    price: 35000,
  },
  {
    id: 1,
    name: "Aba",
    summary: "500 g - Café de origen",
    color: "#178086",
    colorLight: "#149fa7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba500.png?alt=media&token=9b2eaf0e-19a5-4b50-a914-5a557ba833c1",
    price: 35000,
  },
  {
    id: 3,
    name: "Tona",
    summary: "500 g - Café de origen",
    color: "#D76560",
    colorLight: "#D76560",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/tona500.png?alt=media&token=3648ae14-5951-40bd-84ea-a4fe47ef81bb",
    price: 35000,
  },
  {
    id: 4,
    name: "Kamoras",
    summary: "250 g - Café de origen",
    color: "#F2C971",
    colorLight: "#f2c971",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/kamoras250.png?alt=media&token=fb15ce09-7e8a-4815-949f-0535bda52323",
    price: 35000,
  },
  {
    id: 0,
    name: "Aba",
    summary: "250 g - Café de origen",
    color: "#178086",
    colorLight: "#149fa7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
    price: 35000,
  },
  {
    id: 2,
    name: "Tona",
    summary: "250 g - Café de origen",
    color: "#D76560",
    colorLight: "#D76560",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/tona250.png?alt=media&token=d2458c99-5ad8-44ec-a7c4-1545fedaca38",
    price: 35000,
  },
];

export const getProductDetail = (id) => {
  return productsList.find((element) => element.id === id);
};
