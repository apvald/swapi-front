import React from "react";
import { render, screen } from "@testing-library/react";
import Paragraph from "../../../src/components/atoms/paragraph";

describe('Pruebas en <Paragraph />', () => {

  test('Debe mostrar el párrafo ', () => {
    const text = "Lorem ipsum dolor sit amet."
    render(<Paragraph>{text}</Paragraph>)
    expect(screen.getByLabelText('p')).toBeTruthy()
    expect(screen.getByText(text)).toBeTruthy()
  })

})