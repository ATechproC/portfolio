"use client";

import { createContext, useContext, useState } from "react";

export type DarkThemeType = {
    isDarkTheme: boolean,
    setIsDarkTheme: React.Dispatch<React.SetStateAction<boolean>>,
}

const DarkThemeContext = createContext({} as DarkThemeType);

import React from 'react'

export const DarkThemeProvider = ({ children }: { children: React.ReactNode }) => {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    return <DarkThemeContext.Provider value={{isDarkTheme, setIsDarkTheme}} >
        {children}
    </DarkThemeContext.Provider>
}

export const useDarkTheme = () => {
    return useContext(DarkThemeContext)
}