import React from "react";
import { render, screen } from "@testing-library/react";
import Subtitle from "../../../src/components/atoms/subtitle";

describe('Pruebas en <Subtitle />', () => {

  test('Debe mostrar titulo h2', () => {
    render(<Subtitle>Titulo</Subtitle>)
    expect(screen.getByRole('heading', {level: 2})).toBeTruthy()
    expect(screen.getByText('Titulo')).toBeTruthy()
  })

})