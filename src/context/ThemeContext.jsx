import { createContext, useEffect, useState } from "react";
// Create Theme Context
export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
     // Get theme from localStorage or default to "light"
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

    useEffect(() => {
      if(theme === "dark") {
        document.documentElement.classList.add("dark")
      }
      else{
        document.documentElement.classList.remove("dark")
      }
    
    localStorage.setItem("theme", theme) // Save theme in localStorage
    }, [theme])


    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    

}

