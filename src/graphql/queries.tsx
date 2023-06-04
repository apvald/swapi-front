import gql  from "graphql-tag";

const PEOPLE_LIST = gql`
  query Query {
    listPeople {
      id
      name
      species {
        name
      }
      homeworld {
        name
      }
    }
  }
`;

const GET_PERSON = gql`
  query Person($id: ID!){
    person(id: $id) {
      id
      name
      species {
        name
      }
      homeworld {
        name
      }
      eye_color
      hair_color
      skin_color
      birth_year
      vehicles {
        name
      }
   }
  }
`;

export {
  PEOPLE_LIST,
  GET_PERSON
}