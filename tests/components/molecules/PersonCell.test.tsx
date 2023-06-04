import React from "react";
import { render, screen } from "@testing-library/react";
import PersonCell from "../../../src/components/molecules/personCell";

describe('Pruebas en <PersonCell />', () => {

  test('Debe mostrar la celda de personaje y sus componentes', () => {
    
    const name="Skywalker";
    const descripcion="Human form Tatooine";

    render(<PersonCell name={name} descripcion={descripcion} />)
    
    expect(screen.getByText(name)).toBeTruthy()
    expect(screen.getByText(descripcion)).toBeTruthy()

    expect(screen.getByAltText('chevron-righ-icon')).toBeTruthy()
  })

})