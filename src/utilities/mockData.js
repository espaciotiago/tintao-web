export const productsList = [
  {
    id: 0,
    name: "Aba",
    summary: "250 g - Café de origen",
    color: "#178086",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
  },
  {
    id: 4,
    name: "Kamoras",
    summary: "250 g - Café de origen",
    color: "#F2C971",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
  },
  {
    id: 2,
    name: "Tona",
    summary: "250 g - Café de origen",
    color: "#D76560",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
  },
  {
    id: 1,
    name: "Aba",
    summary: "500 g - Café de origen",
    color: "#178086",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
  },
  {
    id: 3,
    name: "Tona",
    summary: "500 g - Café de origen",
    color: "#D76560",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
  },
  {
    id: 5,
    name: "Kamoras",
    summary: "500 g - Café de origen",
    color: "#F2C971",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit per, nullam semper nisl aliquet quisque curae vestibulum.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/tintao-cafe.appspot.com/o/aba250.png?alt=media&token=c83e0859-c7de-4f96-8567-9801a8b7bb4e",
  },
];

export const getProductDetail = (id) => {
  return productsList.find((element) => element.id === id);
};
