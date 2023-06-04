export default {
  __typename: "Person",
  id: "1",
  name: "Luke Skywalker",
  species: [],
  homeworld: {
    __typename: "Planet",
    name: "Tatooine",
  },
  eye_color: "blue",
  hair_color: "blond",
  skin_color: "fair",
  birth_year: "19BBY",
  vehicles: [
    {
      __typename: "Vehicle",
      name: "Snowspeeder",
    },
    {
      __typename: "Vehicle",
      name: "Imperial Speeder Bike",
    },
  ],
};
