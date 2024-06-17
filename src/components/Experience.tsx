import React, { useState } from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const ExperienceSection = styled.section``;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Title = styled.div`
  margin: 0 0 20px 0;
  font-family: "Space Mono", Arial, serif;
  font-weight: 600;
  font-size: 20px;
`;

const Subtitle = styled.div`
  margin-bottom: 20px;
  font-size: 16px;
  color: #bfbfbf;
`;

const List = styled.ul`
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
  list-style-position: outside;
  font-size: 16px;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  padding: 0;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

const workIcon = {
  icon: <FontAwesomeIcon icon={faBriefcase} />,
  iconStyle: { background: '#3e64ff', color: '#fff' },
};

const Experience: React.FC = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (index: number) => {
    setExpanded(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };
  
    const timeline = [
    {
      icon: workIcon,
      date: 'June 2024 - Present',
      title: 'Senior Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc:  ['Mentored and led a team of 1-2 junior developers, providing guidance on best practices for code integration and performance optimization.',
      'Developed a Smart Traffic System with YOLOv8 in PyTorch to enhance accuracy and reduce losses in real-time anomaly detection.',
      'Conduct regular code reviews to maintain high code quality and adherence to best practices.',
      'Engage with clients to understand their requirements and provide technical guidance and solutions to meet their needs'
      ],
    },
    {
      icon: workIcon,
      date: 'Nov 2021 - May 2024',
      title: 'Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc: ['Developed  Smart Traffic System with YOLOv7 in PyTorch, achieving 69% accuracy in real-time traffic anomaly detection.',
      'Implemented multi-person pose estimation via OpenCV DNN and MySQL for real-time human movement tracking.',
      'Developed HTTP live streaming using Nginx for smooth media delivery, achieving 10-12 seconds latency.',
      'Developed automated server monitoring with OpenCV for object detection and pattern recognition, achieving 80% accuracy in LED status detection.',
      'Continuously improve the codebase by adopting best practices for code efficiency and performance.'
      ],
    },
    {
      icon: workIcon,
      date: 'Feb 2021 - Nov 2021',
      title: 'System Engineer',
      subtitle: 'Infosys Limied, Bengaluru',
      desc: ['Designed an Interactive Voice Response (IVR) system using NLP for dynamic call handling and client-specific modifications.',
        'Assist in the maintenance and support of existing applications by fixing bugs and implementing minor feature enhancements.',
        'Work collaboratively with senior developers and cross-functional teams to ensure smooth integration of front-end components.',
        'Participate in team meetings, providing updates on task progress and discussing potential solutions to technical challenges.'
        ],
    }
  ];

  return (
    <ExperienceSection id='experience'>
      <Heading>EXPERIENCE</Heading>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const arrowStyle = { borderRight: '7px solid #3e64ff' }
          const isExpanded = expanded[i] || false;

          return (
            <VerticalTimelineElement
              key={i}
              className="timeline__experience__vertical-timeline-element"
              contentArrowStyle={arrowStyle}
              {...t.icon}
              date={t.date}
            >
              {t.title && (
                <>
                  <Title>{t.title}</Title>
                  {t.subtitle && (
                    <Subtitle>{t.subtitle}</Subtitle>
                  )}
                  <List>
                    {t.desc.slice(0, isExpanded ? t.desc.length : 2).map((item, idx) => (
                      <ListItem key={idx}>{item}</ListItem>
                    ))}
                  </List>
                  {t.desc.length > 2 && (
                    <ReadMoreButton onClick={() => toggleReadMore(i)}>
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </ReadMoreButton>
                  )}
                </>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </ExperienceSection>
  );
}

export default Experience;