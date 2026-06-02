import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig";

test("it renders the correct gig details", () => {
    render(<Gig 
        name="Test Name"
        image="https://t3.ftcdn.net/jpg/05/99/83/02/360_F_599830201_hqWRq7fWPcyuHsiEZb4h1uGOsAS7wSDf.jpg"
        description="Test Genre"
        timeAndDate={new Date("January 1, 2028 12:00:00")}
        location="Springfield, USA"
    />);
    expect(screen.getByRole("heading")).toHaveTextContent("Test Name");
    expect(screen.getByRole("img")).toHaveAttribute("src", "https://t3.ftcdn.net/jpg/05/99/83/02/360_F_599830201_hqWRq7fWPcyuHsiEZb4h1uGOsAS7wSDf.jpg");
    expect(screen.getByTestId("description")).toHaveTextContent("Test Genre");
    expect(screen.getByTestId("timeAndDate")).toHaveTextContent("01/01/2028") // full text content is Saturday, 01/01/2028, 12:00;
    expect(screen.getByTestId("location")).toHaveTextContent("Springfield, USA");
})