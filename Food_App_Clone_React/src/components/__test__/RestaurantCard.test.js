import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mock_data/restaurantMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"

it("should render Restaurant Card component with props", () =>{
    render(
        <RestaurantCard resData={MOCK_DATA} />
    );

    const name = screen.getAllByText("The Belgian Waffle Co.");

    expect(name).toBeInTheDocument();
})