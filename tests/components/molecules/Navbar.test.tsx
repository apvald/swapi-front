import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "../../../src/components/molecules/navbar";

describe('Pruebas en <Navbar />', () => {
  
  const onBackMock = jest.fn();

  test('Debe mostrar los components del navbar', () => {
    const person = {
      id: 0
    }
    
    render(<Navbar isPersonSelected={false} person={person} onBack={onBackMock}/>)
    
    expect(screen.getByText('Ravn Start Wars Registry')).toBeTruthy()
    expect(screen.getByText('People of Star Wars')).toBeTruthy()
  })

  test('Debe mostrar el nombre del personaje', () => {
    const person = {
      id: 0,
      name: 'Skywalker'
    }
    
    render(<Navbar isPersonSelected={false} person={person} onBack={onBackMock}/>)
    expect(screen.getByText(person.name)).toBeTruthy()
  })

  test('Debe llamar al método onBack al dar click', () => {
    const person = {
      id: 0,
      name: 'Skywalker'
    }
    
    render(<Navbar isPersonSelected={false} person={person} onBack={onBackMock}/>)
    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(onBackMock).toBeCalled()
  })

})