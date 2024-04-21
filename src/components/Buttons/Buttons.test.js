import { render, screen } from "@testing-library/react";
import { Buttons } from "./Buttons";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';


test("renders button with correct text", () => {
    const buttonText = "Click me";
    render(<Buttons name={buttonText} />);
    const buttonElement = screen.getByText(buttonText);
    expect(buttonElement).toBeInTheDocument()
});
