import React from 'react';
import styled from 'styled-components';
import { calculateExperience } from '../Utils';
import MyPhotoUrl from '../Images/vishesh2.png';
import Infosys from '../Images/infosys.png';
import Futops from '../Images/futops.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const AboutSection = styled.section`
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProfileSection = styled.div`
  flex: 1;
`;

const ProfileText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #666;
  margin-bottom: 1rem;
`;

const ProfileDetail = styled.div`
  margin-bottom: 1rem;
`;

const DetailTitle = styled.span`
  font-weight: bold;
  color: #333;
`;

const DetailContent = styled.span`
  color: #555;
`;

const SkillsSection = styled.div`
  flex: 1;
`;

const Photo = styled.img`
  width: auto;
`;

const Logo = styled.img`
  width: 150px;
`;

const DownloadButton = styled.a`
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #3e64ff;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    color: black;
  }
`;

const LogoSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 0 50px;
  margin-top: 50px;
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <Wrapper>
        <ContentWrapper>
          <ProfileSection>
          <Photo src={MyPhotoUrl} alt="Your Photo" />
          </ProfileSection>
          <SkillsSection>
           <Heading>ABOUT ME</Heading>
            <ProfileText>
            A Senior software engineer with {calculateExperience('2021-02-08')} years of expertise in building scalable applications and leveraging supervised and unsupervised machine learning and deep learning techniques for model training and optimization. Demonstrated track record in developing real-time computer vision solutions using frameworks like OpenCV, Keras, and Pytorch.
            </ProfileText>
            <ProfileDetail>
              <DetailTitle>FULLNAME: </DetailTitle>
              <DetailContent>Vishesh Saxena</DetailContent>
            </ProfileDetail>
            <ProfileDetail>
              <DetailTitle>JOB: </DetailTitle>
              <DetailContent>Senior Software Engineer, ML Enthusiast</DetailContent>
            </ProfileDetail>
            <ProfileDetail>
              <DetailTitle>EMAIL: </DetailTitle>
              <DetailContent>visheshsaxena29@gmail.com</DetailContent>
            </ProfileDetail>
            <ProfileDetail>
              <DetailTitle>CONTACT: </DetailTitle>
              <DetailContent>+91-7007690568</DetailContent>
            </ProfileDetail>
            <DownloadButton href="./Vishesh_Saxena_CV.pdf" download>
              Download CV <FontAwesomeIcon icon={faDownload} />
            </DownloadButton>
          </SkillsSection>
          
        </ContentWrapper>
      </Wrapper>
      <LogoSection>
        <Logo src={Infosys} alt="infosys" />
        <Logo src={Futops} alt="futops" />
      </LogoSection>
    </AboutSection>
  );
};

export default About;
