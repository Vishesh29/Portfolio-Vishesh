import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import BreastCancer from '../Images/BreastCancer.jpeg';
import Sentiment from '../Images/Sentiment.jpeg';
import FaceRecognise from '../Images/FaceRecognise.jpg';
import Brain from '../Images/Brain.jpeg';
import ObjectDetection from '../Images/object_detection.png';
import Chunk from '../Images/churn_crop.png';

export interface ProjectCardProps {
  title: string;
  link: string;
  imgUrl: string;
}

const projects: ProjectCardProps[] = [
  {
    title: 'Breast Cancer Classification',
    link: 'https://github.com/Vishesh29/Breast-cancer-classification',
    imgUrl: BreastCancer,
  },
  {
    title: 'Sentiment Analysis of movie review',
    link: 'https://github.com/Vishesh29/Sentiment_analysis',
    imgUrl: Sentiment
  },
  {
    title: 'Face Recognition Model',
    link: 'https://github.com/Vishesh29/Face-Recognition',
    imgUrl: FaceRecognise
  },
  {
    title: 'Brain Tumor Detection',
    link: 'https://github.com/Vishesh29/Brain-tumor-detection',
    imgUrl: Brain
  },
  {
    title: 'Object Detection',
    link: 'https://github.com/Vishesh29/Object-detection',
    imgUrl: ObjectDetection
  },
  {
    title: 'Churn Prediction of Telecom Customers',
    link: 'https://github.com/Vishesh29/Churn-prediction',
    imgUrl: Chunk
  }
];

const ProjectsSection = styled.section`
  padding: 2rem;
  background-color: #ECE4DE;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.5;
`;

const Projects: React.FC = () => {
  return (
    <ProjectsSection id="projects">
      <Heading>PROJECTS</Heading>
      <ProjectList>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
