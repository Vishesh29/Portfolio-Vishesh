import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { ProjectCardProps } from './Projects';

const CardContainer = styled.div`
  background: #fff;
  width: 24em;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 
              0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 
              0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  transition: all ease 200ms;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 
                0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 
                0 -6px 32px -6px hsla(0, 0%, 0%, 0.02);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 384px;
  height: 288px;

  &:hover div {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  h2 {
    color: #fff;
    margin: 0.5em 0;
    font-size: 1.5em;
    text-align: center;
  }
`;

const Link = styled.a`
  display: inline-flex;
  align-items: center;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #cce7ff;
  }

  svg {
    margin-right: 0.5em;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, imgUrl }) => {

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imgUrl} alt={title} />
        <Overlay>
          <h2>{title}</h2>
          <Link href={link} target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faCode} />
            View Code
          </Link>
        </Overlay>
      </ImageContainer>
    </CardContainer>
  );
};

export default ProjectCard;
