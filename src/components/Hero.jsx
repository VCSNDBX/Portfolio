import React,{ useState, useEffect } from 'react';
import { saveAs } from "file-saver";
import styled from 'styled-components'
import 'animate.css';
import { AiOutlineCloudDownload } from "react-icons/ai";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "ee", "ector", "iktor" , "ictor" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const saveFile = () => {
    saveAs(
      "/assets/Catapat_Victor_CV.pdf",
      "Catapat, Victor B - CV.pdf"
    );
  }

  return (
    <Section>
      <Container>
        <VicText>
          {`Hi, I'm V`}
          <span data-rotate='[ "ee", "ector", "iktor" , "ictor" ]'>
          <span className="wrap">{text}</span>
          </span>
        </VicText>
        <Button onClick={saveFile}>Download CV<AiOutlineCloudDownload size={25} /></Button>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  margin-top: 0;
  width: 100%;
  padding: 10rem 0 10rem 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const VicText = styled.h1`
  font-size: 65px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1;
  margin-bottom: 1rem;
  display: block;

  span > .wrap {
    border-right: 0.08em solid #666;
  }
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.8px;
  display: inline-flex;
  align-items: center;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  svg {
    font-size: 25px;
    margin-left: 10px;
    transition: 0.3s ease-in-out;
    line-height: 1;
  }

  &:hover svg {
    margin-left: 20px;
  }
`
export default Hero