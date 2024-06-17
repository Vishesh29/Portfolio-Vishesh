import React from 'react';
import styled from 'styled-components';
import TextRotate from './TextRotate';

const HeroSection = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: #ffffff;
  overflow: hidden;
`;

const OverlaySection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #dee2e6;
`;

const WhiteSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #ffffff;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 80%;
  text-align: center;
  color: black;
`;

const FirstTitle = styled.div`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  color: #3e64ff;
  letter-spacing: 4px;
  margin-bottom: 20px;
`;

const Name = styled.div`
  font-size: 80px;
  font-weight: bold;
  line-height: 0.7;
  margin-bottom: 20px;
`;

const RoleDetail = styled.div`
  font-weight: 500;
  font-size: 30px;
  font-weight: bold;
`;

const Hero = () => {
  const professions = ["Machine Learning Enthusiast"];

  return (
    <HeroSection id="hero">
      <OverlaySection />
      <WhiteSection />
      <HeroContent>
        <FirstTitle>HEY! I AM</FirstTitle>
        <Name>VISHESH SAXENA</Name>
        <RoleDetail>
          <span className="txt-rotate" data-period="2000" data-rotate={JSON.stringify(professions)}>
           I'm a <TextRotate dataPeriod={2000} dataRotate={professions} />
          </span>
        </RoleDetail>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
