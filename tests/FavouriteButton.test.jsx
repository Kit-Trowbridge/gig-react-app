import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavouriteButton from "../src/components/FavouriteButton";

test("renders initial button to have empty heart (not favourited)", async () => {
    render(<FavouriteButton />);
    expect(screen.getByRole("button")).toHaveTextContent("♡");
});

test("renders clicked button to have red heart (favourited)", async () => {
    render(<FavouriteButton />);
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("❤️");
});

test("renders unfavourited button again if favourited button is clicked", async () => {
    render(<FavouriteButton />);
    await userEvent.click(screen.getByRole("button"));
    await userEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveTextContent("♡");
})