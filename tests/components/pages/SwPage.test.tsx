import React from "react";
import { render, screen } from "@testing-library/react";
import SwPage from "../../../src/components/pages/swPage";
import person from '../../helpers/GET_PERSON';
import getPerson from "../../../src/graphql/queries/getPerson";
import listPeople from '../../helpers/PEOPLE_LIST';
import peopleList from "../../../src/graphql/queries/peopleList";

jest.mock("../../../src/graphql/queries/peopleList")
jest.mock("../../../src/graphql/queries/getPerson")

describe('Pruebas en <SwPage />', () => {
  peopleList.mockReturnValue({
    data: {listPeople},
  })
  getPerson.mockReturnValue({
    data: {person},
  })

  test('Debe mostrar el componente correctamente ', () => {
    
    render(<SwPage/>)
    
    expect(screen.getByText('Ravn Start Wars Registry')).toBeTruthy()
    expect(screen.getByText('Luke Skywalker')).toBeTruthy()
    expect(screen.getByText('General Information')).toBeTruthy()
  })

})