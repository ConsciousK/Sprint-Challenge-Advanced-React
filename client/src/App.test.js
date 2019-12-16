import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import Navbar from "./components/Navbar";

test("App renders without crashing", () => {
  const component = render(<App />);
  console.log(component);
});

test("Navbar renders without crashing", () => {
  const component = render(<Navbar />);
});

test("Is there a playersCont", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/playersCont/i);
});

test("Is there a toggle", () => {
  const { findAllByDisplayValue } = render(<App />);

  findAllByDisplayValue(/toggle/i);
});

test("Is there text on screen", () => {
  const { getByText } = render(<App />);
  expect(getByText(/world cup players/i));
});