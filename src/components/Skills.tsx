import React from 'react';
import 'react-vertical-timeline-component/style.min.css';
import { styled } from 'styled-components';

const SkillsSection = styled.section`
  margin-top: 70px;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const SkillWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Skill = styled.div`
  flex: 1 1 calc(50% - 20px);
  margin-bottom: 10px;
  margin-top: 10px;
  max-width: 50%;
`;

const SkillName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #333;
`;

const SkillBar = styled.div`
  background-color: #e0e0e0;
  overflow: hidden;
`;

const SkillLevel = styled.div<{ level: number }>`
  height: 10px;
  width: ${(props) => props.level}%;
  background-color: #3e64ff;
`;

const Skills: React.FC = () => {

  const skills = [
    { name: 'Python', level: 80 },
    { name: 'Machine Learning', level: 60 },
    { name: 'Computer Vision', level: 70 },
    { name: 'SQL', level: 80 },
    { name: 'Linux', level: 70 },
    { name: 'Docker', level: 70 },
    { name: 'Keras', level: 75 },
    { name: 'Pytorch', level: 40 },
    { name: 'OpenCV', level: 60 }

  ];

  return (
    <SkillsSection>
      <Heading>Skills</Heading>
      <SkillWrapper>
          {skills.map((skill, index) => (
            <Skill key={index}>
              <SkillName>{skill.name}</SkillName>
              <SkillBar>
                <SkillLevel level={skill.level} />
              </SkillBar>
            </Skill>
          ))}
        </SkillWrapper>
    </SkillsSection>
  );
}

export default Skills;