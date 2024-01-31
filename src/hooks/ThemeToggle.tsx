import { useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>();

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark")
    console.log(theme)
  }
  return { theme, handleChange}
}