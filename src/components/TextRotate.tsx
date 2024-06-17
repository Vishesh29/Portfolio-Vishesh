import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

const TextWrapper = styled.span`
  border-right: 0.08em solid #666;
  white-space: nowrap;
  overflow: hidden;
  color: #3e64ff;
`;

interface TextRotateProps {
  dataPeriod: number;
  dataRotate: string[];
}

const TextRotate: React.FC<TextRotateProps> = ({ dataPeriod, dataRotate }) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 50);

  const tick = useCallback(() => {
    const i = loopNum % dataRotate.length;
    const fullText = dataRotate[i];
    const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(dataPeriod);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [dataPeriod, dataRotate, isDeleting, loopNum, text.length]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [delta, tick]);

  return <TextWrapper className="wrap">{text}</TextWrapper>;
};

export default TextRotate;
