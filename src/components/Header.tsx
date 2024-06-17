import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
//import logo from '../Images/logo1.png'; // Adjust the path to your logo file


const shadowAnimation = keyframes`
  0% {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 0.75rem 0;
  border: none;
  outline: none;
  color: black;
  background: ${(props) => (props.scrolled ? 'white' : 'transparent')};
  box-shadow: ${(props) => (props.scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none')};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  transition: background 0.3s ease, color 0.3s ease;

  animation: ${(props) => (props.scrolled ? shadowAnimation : 'none')} 0.3s ease;

  .container {
    display: flex;
    justify-content: center;
  }

   .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 60px; 
      margin-right: 100px; // Adjust margin as needed
    }
  }

  .burger {
    position: relative;
    display: none;
    cursor: pointer;
    width: 1.65rem;
    height: 1rem;
    border: none;
    outline: none;
    opacity: 0;
    visibility: hidden;
    background: none;
    transform: rotate(0deg);
    transition: 0.35s ease-in-out;

    &-line {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      border: none;
      outline: none;
      opacity: 1;
      border-radius: 1rem;
      background: ${(props) => (props.scrolled ? 'var(--color-black)' : 'var(--color-white)')};
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 0.5rem;
      }

      &:nth-child(4) {
        top: 1rem;
      }
    }

    &.is-active {
      .burger-line {
        &:nth-child(1),
        &:nth-child(4) {
          top: 1.25rem;
          width: 0%;
          left: 50%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  .menu {
    &-inner {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }

    &-link {
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      line-height: inherit;
      border: none;
      color: white;
      text-transform: uppercase;
      text-rendering: optimizeLegibility;
      transition: all 0.35s ease-in-out;

      &:hover {
        text-decoration: underline;
      }

      &.active {
        color: #3e64ff;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .burger {
      display: block;
      opacity: 1;
      visibility: visible;
    }

    .menu {
      width: 100%;
      max-height: 0rem;
      padding: 0;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      transition: all 0.35s ease;

      &.is-active {
        opacity: 1;
        visibility: visible;
        max-height: 20rem;
      }

      &-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        padding: 3rem 0;
      }
    }
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 0 50px;
  }

  li a {
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: #3e64ff;
      position: relative;
    }

    &.active {
      color: #3e64ff;
    }
  }
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleScroll = () => {
    const heroHeight = (document.querySelector('#hero') as HTMLElement)?.clientHeight || 0;
    if (window.scrollY > heroHeight) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Check which section is currently in view
    const sections = document.querySelectorAll('section[id]');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 50; // adjust offset as needed
      const sectionHeight = (section as HTMLElement).clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id') || '';
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer scrolled={scrolled}>
      <div className="container">
        {/* <div className="logo">
          <img src={logo} alt="Logo" />
        </div> */}
        <section className="wrapper">
          <button
            type="button"
            className={`burger ${menuActive ? 'is-active' : ''}`}
            id="burger"
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
          <Nav className={`menu ${menuActive ? 'is-active' : ''}`} id="menu">
            <ul className="menu-inner">
              <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''}>Home</a></li>
              <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
              <li><a href="#resume" className={activeSection === 'resume' ? 'active' : ''}>Resume</a></li>
              <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            </ul>
          </Nav>
        </section>
      </div>
    </NavbarContainer>
  );
};

export default Header;
