import React from "react";
import { render, screen } from "@testing-library/react";
import Information from "../../../src/components/organisms/information";
import person from '../../helpers/GET_PERSON';
import getPerson from "../../../src/graphql/queries/getPerson";

jest.mock("../../../src/graphql/queries/getPerson")

describe('Pruebas en <Sidebar />', () => {

  const setInfoMock = jest.fn();
  
  test('Debe mostrar componente al cargar ok', () => {
    getPerson.mockReturnValue({
      data: {person},
    })
    render(<Information id={0} setInfo={setInfoMock} />)
    expect(screen.getByText('General Information')).toBeTruthy();
    expect(screen.getByText('Hair Color')).toBeTruthy();
  })
  test('Debe mostrar componente en loading', () => {
    getPerson.mockReturnValue({
      loading: true
    })
    render(<Information id={1} setInfo={setInfoMock} />)
    expect(screen.getByText('Loading')).toBeTruthy();
  })
  test('Debe mostrar componente al cargar ok', () => {
    getPerson.mockReturnValue({
      data: {person: null},
      error: "error"
    })
    render(<Information id={1} setInfo={setInfoMock} />)
    expect(screen.getByText('Failed to Load Data')).toBeTruthy();
  })

})