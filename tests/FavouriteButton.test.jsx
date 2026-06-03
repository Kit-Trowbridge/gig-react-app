import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteButton from "../src/components/FavouriteButton";

test("renders initial button to have empty heart", async () => {
    render(<FavouriteButton />);
    expect(screen.getByRole("button")).toHaveTextContent("♡");
});

test("renders clicked button to have red heart", async () => {
    render(<FavouriteButton />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("❤️");
});