import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/TYBW-image.png";
import styled from "styled-components";

const StyleHeader = styled.div`
    .Navbar {
        margin-top: 3.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    & .link {
        display: flex;
        justify-content: space-between;
        width: 48.625rem;
        align-items: flex-start;
        list-style: none;
    }
    & a {
        color: #000;
        font-family: Segikan,serif;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }
    & .Logo {
        width: 13.5625rem;
        height: 4.625rem;
        object-fit: cover;
    }
`;

function Header() {
    return (
        <StyleHeader>
            <nav className="Navbar">
                <img src={logo} alt="logo Bleach" className="Logo" />
                <ul className="link">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/arcs/HuecoMundo">Arcs</Link>
                    </li>
                    <li>
                        <Link to="/LogIn">Log In</Link>
                    </li>
                </ul>
            </nav>
        </StyleHeader>
    );
}

export default Header;
