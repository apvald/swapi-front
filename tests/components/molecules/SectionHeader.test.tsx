import React from "react";
import { render, screen } from "@testing-library/react";
import SectionHeader from "../../../src/components/molecules/sectionHeader";

describe('Pruebas en <SectionHeader />', () => {

  test('Debe mostrar el texto en el section header', () => {
    
    render(<SectionHeader>Information</SectionHeader>)
    
    expect(screen.getByText('Information')).toBeTruthy()
  })

})