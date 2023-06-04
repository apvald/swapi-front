import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../../../src/components/organisms/sidebar";
import listPeople from '../../helpers/PEOPLE_LIST';
import peopleList from "../../../src/graphql/queries/peopleList";

jest.mock("../../../src/graphql/queries/peopleList")

describe('Pruebas en <Sidebar />', () => {

  const setPersonMock = jest.fn();
  
  test('Debe mostrar componente ok', () => {
    peopleList.mockReturnValue({
      data: {listPeople},
    })
    render(<Sidebar setPerson={setPersonMock} isPersonSelected={false} />)
    expect(screen.getByText('Luke Skywalker')).toBeTruthy();
  })
  test('Debe mostrar componente en loading', () => {
    peopleList.mockReturnValue({
      loading: true
    })
    render(<Sidebar setPerson={setPersonMock} isPersonSelected={false} />)
    expect(screen.getByText('Loading')).toBeTruthy();
  })
  test('Debe mostrar componente error al no cargar la data', () => {
    peopleList.mockReturnValue({
      data: {listPeople: null},
      error: "error"
    })
    render(<Sidebar setPerson={setPersonMock} isPersonSelected={false} />)
    expect(screen.getByText('Failed to Load Data')).toBeTruthy();
  })

})