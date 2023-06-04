import React from "react";
import { render, screen } from "@testing-library/react";
import DataCell from "../../../src/components/molecules/dataCell";

describe('Pruebas en <DataCell />', () => {

  test('Debe mostrar el nombre y la descripcón ', () => {
    
    const nombre = "Skywalker"
    const desc = "Lorem de ipsum"
    render(<DataCell nombre={nombre} desc={desc}/>)
    
    expect(screen.getByText(nombre)).toBeTruthy()
    expect(screen.getByText(desc)).toBeTruthy()
  })

})