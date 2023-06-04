import React from "react";
import { render, screen } from "@testing-library/react";
import LoaderIndicator from "../../../src/components/molecules/loaderIndicator";

describe('Pruebas en <LoaderIndicator />', () => {

  test('Debe mostrar el loading ', () => {
    
    render(<LoaderIndicator/>)
    expect(screen.getByAltText('...')).toBeTruthy()
    expect(screen.getByText('Loading')).toBeTruthy()
  })

})