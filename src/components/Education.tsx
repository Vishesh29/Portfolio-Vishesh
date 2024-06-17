import React, { useState } from 'react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGraduationCap, faSchool} from '@fortawesome/free-solid-svg-icons';
import { styled } from 'styled-components';

const EducationSection = styled.section`
  margin-top: 70px;
`;

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
  font-weight: normal;
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

const school = {
  icon: <FontAwesomeIcon icon={faSchool} />,
  iconStyle: { background: '#3e64ff', color: '#fff' },
};

const college = {
  icon: <FontAwesomeIcon icon={faGraduationCap} />,
  iconStyle: { background: '#3e64ff', color: '#fff' },
};

const Education: React.FC = () => {  
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleReadMore = (index: number) => {
    setExpanded(prevState => ({ ...prevState, [index]: !prevState[index] }));
  };

    const timeline = [
    {
      icon: college,
      date: 'Aug 2016 - Sep 2020',
      title: 'B.Tech in Electronics and Communication Engineering',
      subtitle: 'JSS Academy of Technical Education, Noida',
      desc: ['Semi-Finalist in E-Yantra Robotics Competition (2018) conducted jointly by IIT Bombay and MHRD.',
      'Developed Dancing Music Lights, Keyboard-controlled robot, Light detection robot, Line follower Robot, and Seven segment display using Arduino/Raspberry-Pi.',
      'Implemented 3-D animations, basic GUI setups, object detection with image processing, and disco lights using MATLAB.',
      'Developed logic gates, Wind-Electricity transducer, automatic doorbell using IR sensors, and light detector using LDR in Basic Electronics.',
      'Implemented machine learning projects for daily demand forecasting, stock market prediction, sentiment analysis, and breast cancer classification.'
      ],
    },
    {
      icon: school,
      date: 'Apr 2014 - May 2015',
      title: 'Senior Secondary Certificate in Mathematics and Computer Science',
      subtitle: 'Kendriya Vidyalaya Lucknow',
      desc: ['Developed a Library Management System using C++.'
        ],
    }
  ];

  return (
    <EducationSection id='education'>
        <Heading>EDUCATION</Heading>
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
              {t.title ? (
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
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </EducationSection>
  );
}

export default Education;