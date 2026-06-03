import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteButton from "../src/components/FavouriteButton";

test("renders initial button to have text: ♡ false ", async () => {
    render(<FavouriteButton />);
    expect(screen.getAllByRole("button")).toHaveTextContent("false");
});

test("renders clicked button to have text: ♡ true ", async () => {
    render(<FavouriteButton />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getAllByRole("button")).toHaveTextContent("true");
});