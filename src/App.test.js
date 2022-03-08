import { render, screen } from "@testing-library/react";
import App from "./App";

test("checking if the navbar is visible", () => {
  render(<App />);
  const navbar = screen.getByTestId("navbar");
  expect(navbar).toBeVisible();
});
