import { render, screen } from "@testing-library/react";
import Gig from "../src/components/Gig";

test("it renders the correct artist name", () => {
    render(<Gig name="Test Name"/>);
    expect(screen.getByRole("heading")).toHaveTextContent("Test Name");
})