import React from "react";
import { render, screen } from "@testing-library/react";
import NoticeCell from "../../../src/components/molecules/noticeCell";

describe('Pruebas en <NoticeCell />', () => {

  test('Debe mostrar el mensaje de fallo ', () => {
    
    render(<NoticeCell/>)
    
    expect(screen.getByText('Failed to Load Data')).toBeTruthy()
  })

})