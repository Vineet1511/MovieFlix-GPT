import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it("should render Header component with login button", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole('button');

    expect(loginButton).toBeInTheDocument()
});


it("should change login button to logout on click", () =>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name : "login User :"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name : "logout"})

    expect(logoutButton).toBeInTheDocument()
})