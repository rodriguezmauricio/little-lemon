import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("Render the app component", () => {
  render(<App />);
});

test("fetches available times and renders BookingPage", async () => {
  render(<App />);
  await waitFor(() => {
    expect(screen.getByText("Reserve a table")).toBeInTheDocument();
    // expect(screen.getAllByText(mockAvailableTimes.join("")).length).toBe(3);
  });
});
