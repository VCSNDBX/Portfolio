import React from 'react'
import styled from 'styled-components'
import { skill } from '../constants'

const Skills = () => {
  return (
    <Section>
      <Container>
      {
        skill.map((skill, index) => {
            return (
                <SkillCard key={index} >
                    <SkillImg src={skill.imgUrl} />
                    <SkillTitle>{skill.title}</SkillTitle>
                </SkillCard>
            )
        })
      }
      </Container>
    </Section>
  )
}

const Section = styled.section`
  padding: 0 3rem;
  padding-top: 1rem;
  position: relative;
  background-color: #fff;
  padding-bottom: 4rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-top: -9rem;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 5px 5px 0 rgb(233 240 243 / 50%), 0 0 0 1px #ced4da;
  padding: 2rem 2rem;
`;

const SkillCard = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25%;
  padding: 1rem 0;
`;

const SkillImg = styled.img`
  height: 5em;
  width: 5em;
  padding-bottom: 1rem;
`;

const SkillTitle = styled.h4`
  color: #141c3a;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.8px;
  line-height: 1.1em;
`;




export default Skills