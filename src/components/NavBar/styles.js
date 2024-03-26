import styled from "styled-components";

export const NavBarContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
`

export const NavBarContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    background: rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 2;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        background: transparent;
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border: 2px solid orange;
        width: 100%;
        padding: 10px;
        border-radius: 6px;
        background: transparent;
        color: #fff;
    }

    li {
        list-style: none;
        background: transparent;
    }

    ul li a {
        text-decoration: none;
        
    }
`