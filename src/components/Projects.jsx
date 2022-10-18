import React from 'react';
import styled from 'styled-components';
import { project } from '../constants';

const Projects = () => {
  return (
    <Section>
      <Title>PROJECTS</Title>
        <Content>
        {project.map((item, index) => {
            return (
                <ProjectCard key={index}>
                  <ProjectImg src={item.img} />
                  <ImgOverlay>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                    <Button href={item.github} target="_blank">VIEW CODE</Button>
                  </ImgOverlay>
                </ProjectCard>
            )
          })}
          </Content>
    </Section>
  )
}

const Section = styled.section`
  position: relative;
  width: calc(100vw);
  background-color: #fff;
  padding-bottom: 7rem;
`;

const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  text-align: center;
  color: #141c3a;
  padding-bottom: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ProjectCard = styled.div`
  overflow: hidden;
  position: relative;
  margin: 1rem;
  border-radius: 12px;
  width: 300px;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #ced4da;
`;

const ProjectImg = styled.img`  
  overflow: hidden;
  display: block;
  height: 12rem;
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
`;

const ImgOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #141c3a;
  opacity: 0;
  transition: 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

const CardTitle = styled.h2`
    font-weight: 500;
`;

const CardDescription = styled.p`
    font-weight: 400;
`;

const Button = styled.a`
  margin-top: 1rem;
  justify-content: center;
  align-items: center;
  padding: .5rem;
  font-size: 18px;
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 9999px;
  border-color: #fff;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
  background-color: #fff;
  color: #141c3a;
  }
`;


export default Projects