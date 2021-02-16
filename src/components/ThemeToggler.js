import React, { useContext } from 'react'
import ThemeContext from '../Context/themecontext'

const ThemeToggler =()=> {
    const [themeMode, setThemeMode] = useContext(ThemeContext)

    return (
        <div onClick={()=>{setThemeMode(themeMode==="light" ? "dark" : "light")}}>
            <button>{themeMode==="light" ? "TurnOff" : "LightsOn"}</button>
        </div>
    )
}

export default ThemeToggler;