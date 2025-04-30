import { useContext } from "react"

import { ThemeContext } from "../context/ThemeContext"
import { CiLight } from "react-icons/ci";
const ThemeToogle = () => {
    const {theme, setTheme} = useContext(ThemeContext) 

  return (
   <div>
    <button onClick={()=> { setTheme(theme === "light" ? "dark" : "light")}} className="text-2xl   ">< CiLight /></button>
   </div>
  )
}

export default ThemeToogle