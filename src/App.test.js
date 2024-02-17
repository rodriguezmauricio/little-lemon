import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import fakeAPI from "./data/api";

jest.mock("./data/api");

describe("App", () => {
  beforeEach(() => {
    fakeAPI.fetchAPI.mockResolvedValue(["10:00 AM", "11:00 AM", "12:00 PM"]); // Mocking the API response
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders App component", async () => {
    render(<App />);

    // Ensure header and footer are rendered
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();

    // Wait for available times to be loaded
    await waitFor(() => expect(fakeAPI.fetchAPI).toHaveBeenCalledTimes(1));

    // Ensure main content is rendered
    expect(screen.getByTestId("main")).toBeInTheDocument();
  });

  test('navigates to booking page when "Book a Table" link is clicked', async () => {
    render(<App />);

    // Wait for available times to be loaded
    await waitFor(() => expect(fakeAPI.fetchAPI).toHaveBeenCalledTimes(1));

    // Click on the "Book a Table" link
    userEvent.click(screen.getByText("Book a Table"));

    // Ensure booking page is rendered
    expect(screen.getByTestId("booking-page")).toBeInTheDocument();
  });

  // Add more tests as needed for other functionalities/routes
});
