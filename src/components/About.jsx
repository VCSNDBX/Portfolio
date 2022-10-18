import React from 'react'
import styled from 'styled-components'
import { AboutMe } from '../constants'

const About = () => {
  return (
    <Section>
      <Container>
        <Me>
          <img src={AboutMe.img} />
        </Me>
        <Details>
          <h4>{AboutMe.title}</h4>
          <span>{AboutMe.description}</span>
        </Details>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 0 2rem 10rem 2rem;
  position: relative;
  background-color: #1E3163;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Me = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const Details = styled.div`
  position: relative;
  text-align: center;
  padding-top: 25px;

  h4 {
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 1.1em;
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.8px;
  }
`;

export default About