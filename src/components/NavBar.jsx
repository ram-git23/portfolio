import React, { useState } from 'react';

import {AlignRight, Sun, Moon} from "lucide-react";

export const NavBar = ({ darkMode, setDarkMode }) => {
    const [dropdownOpen, setDropdownOpen] = useState(true);
    return (
        <nav className="fixed top-0 md:w-max w-full dark:bg-darkbg bg-lightbg z-50 max-md:border-b md:bg-transparent backdrop-blur-sm md:top-2 md:border-2 md:left-[50%] md:-translate-x-[50%] dark:border-white/10 border-lightbg md:rounded-4xl md: font-lato">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex md:justify-center max-md:justify-end items-center">
                    <div onClick={setDarkMode}>
                        {darkMode ? <Sun color="white" className="mr-4" cursor="pointer"/> : <Moon color="#0D1821" fill="#0D1821" className="mr-4" cursor="pointer"/>}
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="dark:text-white text-darkbg hover:text-lightbg font-bold">HOME</a>
                        <a href="#about" className="dark:text-white text-darkbg hover:text-lightbg font-bold">ABOUT</a>
                        <a href="#skills" className="dark:text-white text-darkbg hover:text-lightbg font-bold">SKILLS</a>
                        <a href="#projects" className="dark:text-white text-darkbg hover:text-lightbg font-bold">PROJECTS</a>
                        <a href="#contact" className="dark:text-white text-darkbg hover:text-lightbg font-bold">CONTACT</a>
                    </div>
                    <AlignRight color={darkMode ? 'white' : '#0D1821'} cursor="pointer" className="max-md:flex hidden" onClick={() => setDropdownOpen(!dropdownOpen)} />
                </div>
                    <Dropdown open={dropdownOpen}/>
            </div>
        </nav>
    )
}

const Dropdown = ({ open }) => {
    return (
        <div className={`topper fixed top-14 right-0 h-max w-32 z-49 space-y-2 text-center p-3 ${open ? '' :  'hidden'} md:hidden flex flex-col border-1 rounded-sm dark:border-white/20 border-lightbg bg-gray-300 dark:bg-darkbg backdrop-blur-3xl text-2xl`}>
            <a href="#home" className="dark:text-white text-darkbg  hover:text-lightbg dark:hover:text-cyan-800">Home</a>
            <div className="border-b border-1 dark:border-white border-lightbg"></div>
            <a href="#about" className="dark:text-white text-darkbg hover:text-lightbg dark:hover:text-cyan-800">About</a>
            <div className="border-b border-1 dark:border-white border-lightbg"></div>
            <a href="#skills" className="dark:text-white text-darkbg hover:text-lightbg dark:hover:text-cyan-800">Skills</a>
            <div className="border-b border-1 dark:border-white border-lightbg"></div>
            <a href="#projects" className="dark:text-white text-darkbg hover:text-lightbg dark:hover:text-cyan-800">Projects</a>
            <div className="border-b border-1 dark:border-white border-lightbg"></div>
            <a href="#contact" className="dark:text-white text-darkbg hover:text-lightbg dark:hover:text-cyan-800">Contact</a>
        </div>
    )
}