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
      date: 'Apr 2025 - Present',
      title: 'Artificial Intelligence / Machine Learning Engineer',
      subtitle: 'FIS Global',
      desc:  ['Built GenAI automation framework to streamline SDLC and PDLC workflows using LLMs.',
              'Developed context-aware LLM pipelines using LangChain, OpenAI APIs, and RAG architecture.',
              'Applied prompt engineering for test generation, code review, and defect analysis.',
              'Integrated vector databases and embedding models for accurate retrieval-augmented generation.',
              'Reduced development time by 70% and improved QA efficiency by 80%+ through automation.'
      ],
    },
    {
      icon: workIcon,
      date: 'Nov 2024 - Apr 2025',
      title: 'Senior Data Engineer',
      subtitle: 'LTIMindtree',
      desc:  ['Developed agentic AI frameworks using LangChain for intelligent and context-aware applications.',
              'Improved AI-driven response generation efficiency by 25% using agentic architectures.',
              'Built agentic workflows using LLaMA and Mistral models for Natural Language-to-SQL generation.',
              'Translated natural language prompts into executable SQL queries and logical workflows.',
              'Achieved 60% accuracy in automated SQL query generation for data interaction systems.'
      ],
    },
    {
      icon: workIcon,
      date: 'Nov 2021 - Nov 2024',
      title: 'Senior Software Engineer',
      subtitle: 'Futops Technologies India Private Limited, Pune',
      desc:  ['Developed a Smart Traffic System with Yolov(4-10) in PyTorch to enhance accuracy and reduce losses in real-time anomaly detection.',
      'Implemented multi-person pose estimation via OpenCV DNN and MySQL for real-time human movement tracking.',
      'Developed HTTP live streaming using Nginx for smooth media delivery, achieving 10-12 seconds latency.',
      'Developed Automated server monitoring with OpenCV for object detection and pattern recognition, achieving 80% accuracy in LED status detection.',
      'Engage with clients to understand their requirements and provide technical guidance and solutions to meet their needs.'
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