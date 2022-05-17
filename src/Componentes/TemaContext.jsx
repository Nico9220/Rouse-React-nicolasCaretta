import React, { createContext, useState, useEffect } from 'react'

export const TemaContext = createContext();

function TemaContextProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false && (JSON.parse(localStorage.getItem("RouseDarkTheme")) != null ? JSON.parse(localStorage.getItem("RouseDarkTheme")) : false));

    const toggleDarkTheme = () => {
        setDarkTheme(theme => !theme);
    }
    useEffect(() => {
        const checkStorage = (e) => {
            const { key, newValue } = e;

            if (key === "RouseDarkTheme") {
                setDarkTheme(JSON.parse(newValue))
            }
        }

        window.addEventListener("storage", checkStorage)
        return (() => window.removeEventListener("storage", checkStorage))
    })

    useEffect(() => {
        localStorage.setItem("RouseDarkTheme", JSON.stringify(darkTheme));

        if (darkTheme === false) {
            document.body.classList.add("lightRouseTheme")
            document.body.classList.remove("darkRouseTheme")
        } else {
            document.body.classList.add("darkRouseTheme")
            document.body.classList.remove("lightRouseTheme")

        }
    }, [darkTheme])

    return (
        <>
            <TemaContext.Provider value={{ darkTheme, toggleDarkTheme }}>
                {children}
            </TemaContext.Provider>
        </>
    )
}
export default TemaContextProvider;