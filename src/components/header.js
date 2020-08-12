import React from "react";
import { Menu, Button } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
export default function Header() {
    return (
        <Menu stackable>
            <Menu.Item header>Portfolio</Menu.Item>
            <Menu.Item >
            <a href="/home">Home</a>
            </Menu.Item>
            <Menu.Item >
            <a href="https://github.com/senad83">Github</a>
            </Menu.Item>
            <Menu.Item >
            <a href="https://www.linkedin.com/in/senad-a-53a4b11a1/">LinkedIn</a>
            </Menu.Item>
            <Menu.Item >
            <a href="/portfolio">Portfolio</a>
            </Menu.Item>
            <Menu.Item >
            <a href="/resume">Resume</a>
            </Menu.Item>
            <Menu.Item >
            <a href="/contact">Contact</a>
            </Menu.Item>
            
        </Menu>
    );
}
