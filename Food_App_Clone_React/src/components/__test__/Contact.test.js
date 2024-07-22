import Contact from "../Contact";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
 
test("Should load Contact Us Component : ", () =>{
    render(<Contact />);

    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
});

test("Should load input name inside Contact Us Component : ", () =>{
    render(<Contact />);
    
    const inputName = screen.getByPlaceholderText('name@meragmail.com');

    expect(inputName).toBeInTheDocument();
});

test("Should load two input-boxes inside Contact Us Component : ", () =>{
    render(<Contact />);
    
    const inputBoxes = screen.getAllByRole('textbox')
    expect(inputBoxes.length).toBe(3);
});