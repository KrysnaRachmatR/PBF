import { useContext } from "react";
import Link from "next/link";
import { ThemeContext } from "@/utilities/context/mycontext";
import { themes } from "@/utilities/themes/mythemes";

export default function Navbar(){
    const {toggleTheme, theme} = useContext(ThemeContext);
    const newThemeName = theme === themes.dark ? 'light' : 'dark';
    return(
        <div
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent:'space-between',
            marginBottom: 25,
        }}>
            <div>MyWebsite</div>
            <div>
                <link href="/">Home</link>
                <link href="/about">about</link>
                <link href="/contacts">contacts</link>
                <link href="/profile">profile</link>
                <button onClick={toggleTheme}>Set {newThemeName}Theme</button>
            </div>
        </div>
    );
}