import { fireEvent, render, screen } from "@testing-library/react";
import { IconRandomizer } from "./IconRandomizer";
import React from 'react';
import '@testing-library/jest-dom/extend-expect';


test("renders random icon and button", async () => {
    render(<IconRandomizer />);
    const buttonElement = screen.getByText("Show random icon");
    const iconElement = screen.getByTestId("random-icon");

    expect(buttonElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
});

test("clicking button changes icon", async () => {
    render(<IconRandomizer />);
    const buttonElement = screen.getByText("Show random icon");
    const newIconElement = await screen.findByTestId("random-icon");

    fireEvent.click(buttonElement);
    expect(newIconElement).toBeInTheDocument();
});
