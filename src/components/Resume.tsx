import React, { useEffect, useState } from 'react';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

const ResumeSection = styled.section`
  padding: 3rem;
  background-color: #ebebeb;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* Align content vertically */
  gap: 5rem;
  width: 100%; /* Adjusted width to cover the full container */
  max-width: 1200px; /* Added max-width to limit content width */
  margin: 0 auto; /* Center content horizontally */
`;

const RightContent = styled.div`
  flex: 1;
  padding: 20px;
  scroll-behavior: smooth;
`;

const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  color: white;
  padding: 20px;
  @media (max-width: 1024px) {
    display: none;
  }
  position: sticky;
  top: 250px;
  align-self: flex-start;
  color: black;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 10px 0;
  }

  li a {
    font-size: 17px;
    font-weight: bold;
    color: inherit;
    text-decoration: none;
    padding: 10px;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: #3e64ff;
      position: relative;
    }

    &.active {
      color: #3e64ff;
      &::before {
        content: '-';
        position: absolute;
        left: -5px;
        background-color: #3e64ff;
      }
    }
  }
`;

const Resume: React.FC = () => {
  const [activeSection, setActiveSection] = useState('experience');

  const handleScroll = () => {
    const sections = document.querySelectorAll('.section');
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = (section as HTMLElement).offsetTop - 50; // adjust offset as needed
      const sectionHeight = (section as HTMLElement).clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY <= sectionTop + sectionHeight) {
        currentSection = section.getAttribute('class')?.split(' ')[1] || '';
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
    <ResumeSection id='resume'>
      <Container>
        <NavbarContainer scrolled={true}>
          <Nav id="sidemenu">
            <ul className="menu-inner">
              <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
              <li><a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
              <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            </ul>
          </Nav>
        </NavbarContainer>
        <RightContent>
          <div className="section experience" id="experience"><Experience /></div>
          <div className="section education" id="education"><Education /></div>
          <div className="section skills" id="skills"><Skills /></div>
        </RightContent>
      </Container>
    </ResumeSection>
  );
}

export default Resume;
