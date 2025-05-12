import { createContext, useState } from "react";

const themes = {
    light: {
        background: "bg-white",
        color: "text-black",
    },
    dark: {
        background: "bg-[#424769]",
        color: "text-white",
    },
};
const ThemeContext = createContext(null);

const ThemeContextWrapper = ({ children }) => {
    const [theme, setTheme] = useState("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme, themes }} >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextWrapper;
export { ThemeContext };