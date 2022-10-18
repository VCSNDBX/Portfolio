import React from 'react'
import styled from 'styled-components'
import { navLinks } from '../constants'
import { swish } from '../assets/images'

const Footers = () => {
  return (
    <Footer>
    <FooterSwish></FooterSwish>
      {navLinks.map((item, index) => {
          return (
            <FooterLink className={item.id} href={item.url} target="_">
              <FooterImg src={item.img} />
            </FooterLink>
          )
        })}      
        <FooterText>Handcrafted by me © 2022</FooterText>
    </Footer>
  )
}

const Footer = styled.footer`
  padding: 20px 0 10px 0;
  position: relative;
  background-color: #131b2e;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const FooterSwish = styled.div`
  width: 100%;
  background-image: url(${swish});
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 180px;
  height: 180px;
  margin-top: -180px;


  @media screen and (max-width: 1400px) {
    background-size: 1500px 170px;
  }

  @media screen and (max-width: 1200px) {
      background-size: 1240px 130px;
      height: 150px;
      margin-top: -150px;
  }

  @media screen and (max-width: 1000px) {
      background-size: 1054px 110px;
      height: 130px;
      margin-top: -130px;
  }

  @media screen and (max-width: 850px) {
      background-size: 895px 90px;
      height: 110px;
      margin-top: -110px;
  }
  @media screen and (max-width: 700px) {
      background-size: 715px 70px;
      height: 90px;
      margin-top: -90px;
  }

  @media screen and (max-width: 550px) {
      background-size: 560px 55px;
      height: 70px;
      margin-top: -70px;
  }
`;

const FooterLink = styled.a`
  width: 42px;
  height: 42px;
  display: inline-flex;
  margin-right: 12px;
`;

const FooterImg = styled.img`
  width: 44px;
  height: 44px;
`;

const FooterText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #B8B8B8;
  letter-spacing: 0.5px;
  margin-top: 15px;
`;

export default Footers