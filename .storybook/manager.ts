import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

import customLogo from "./assets/collectarlogo.png"; // Import your logo file (e.g., SVG, PNG, or JPG)

const customTheme = create({
  base: "light", // Or 'dark' if you prefer a dark theme
  brandTitle: "Your Project Name", // Add your project name here
  brandUrl: "https://yourprojectwebsite.com", // Add your project website here
  brandImage: customLogo, // Use the imported logo here
});

addons.setConfig({
  theme: customTheme,
});
