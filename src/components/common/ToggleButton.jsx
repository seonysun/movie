import { useState, useEffect } from "react";
import useTheme from "../../hooks/useTheme";

function ToggleButton() {
  const { theme, toggleTheme } = useTheme();

  const [isOn, setIsOn] = useState(theme === "dark" ? true : false);

  useEffect(() => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
  }, [theme]);

  return (
    <button
      type="button"
      aria-label="Toggle Switch"
      onClick={() => {
        setIsOn(!isOn);
        toggleTheme();
      }}
      className={`relative flex h-4 w-8 items-center rounded-full ${
        isOn ? "bg-purple" : "bg-gray-400"
      } transition-all duration-300`}
    >
      <div
        className={`absolute size-3 rounded-full bg-white shadow-md transition-all duration-300 ${
          isOn ? "translate-x-4" : "translate-x-0.5"
        }`}
      />
    </button>
  );
}

export default ToggleButton;
