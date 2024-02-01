import * as icons from "./icons";
import fs from "fs/promises";
import { render, screen } from "@testing-library/react";

let sprite: string;

beforeAll(async () => {
  sprite = await fs.readFile(`${__dirname}/../public/sprite.svg`, "utf-8");
});

test.each(Object.entries(icons))(
  "icon %s exists in the spritesheet",
  (name, Icon) => {
    render(<Icon role="img" />);
    const iconHref = screen
      .getByRole("img")
      // eslint-disable-next-line testing-library/no-node-access
      .querySelector("use")
      ?.getAttribute("href");
    const [, symbolId] = iconHref?.split("#") ?? [];
    expect(sprite).toContain(JSON.stringify(symbolId));
  }
);
