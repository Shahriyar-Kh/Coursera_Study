import "./Styles.css";
import { useTheme } from "../ThemeContext";

const Switch = () => {
  // Destructure both `theme` and `toggleTheme` from the context
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="switch">
      <input
        type="checkbox"
        // Set the checkbox checked if theme is light
        checked={theme === "light"}
        // Add onChange to toggle the theme
        onChange={toggleTheme} // No need to use event parameter
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
