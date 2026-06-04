import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteButton from "../src/components/FavouriteButton";
import Gig from "../src/components/Gig";

test("renders initial button to have empty heart (not favourited)", async () => {
    render(<Gig 
        name="Test Name"
        image="https://t3.ftcdn.net/jpg/05/99/83/02/360_F_599830201_hqWRq7fWPcyuHsiEZb4h1uGOsAS7wSDf.jpg"
        description="Test Genre"
        timeAndDate={new Date("January 1, 2028 12:00:00")}
        location="Springfield, USA"
    />);
    expect(screen.getByRole("button")).toHaveTextContent("♡");
});

test("renders clicked button to have red heart (favourited)", async () => {
    render(<Gig 
        name="Test Name"
        image="https://t3.ftcdn.net/jpg/05/99/83/02/360_F_599830201_hqWRq7fWPcyuHsiEZb4h1uGOsAS7wSDf.jpg"
        description="Test Genre"
        timeAndDate={new Date("January 1, 2028 12:00:00")}
        location="Springfield, USA"
    />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("🩷");
});

test("renders unfavourited button again if favourited button is clicked", async () => {
    render(<Gig 
        name="Test Name"
        image="https://t3.ftcdn.net/jpg/05/99/83/02/360_F_599830201_hqWRq7fWPcyuHsiEZb4h1uGOsAS7wSDf.jpg"
        description="Test Genre"
        timeAndDate={new Date("January 1, 2028 12:00:00")}
        location="Springfield, USA"
    />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("♡");
})