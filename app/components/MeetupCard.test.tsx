import { render, screen } from "@testing-library/react";
import MeetupCard from "./MeetupCard";

test("renders clickable card", () => {
  render(<MeetupCard />);
  expect(
    screen.getByRole("link", { name: "Poly Zagreb Meetup" })
  ).toBeVisible();
});
