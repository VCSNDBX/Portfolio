import React from 'react'
import styled from 'styled-components'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <Nav>
      <Logo href=''>ViC</Logo>
      <MenuBar>
        {navLinks.map((item, index) => {
          return (
            <MenuLink className={item.id} href={item.url} target="_">
              <img src={item.img} />
            </MenuLink>
          )
        })}
      </MenuBar>
    </Nav>
  )
}

const Nav = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  top: 0;
  z-index: 9999;
  width: 100%;
  transition:  0.32s ease-in-out;

  scrolled {
    background-color: #131b2e;
  }
`;

const Logo = styled.a`
  padding-left: 2rem;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MenuBar = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: right;
  align-items: center;
  position: relative;
`;

const MenuLink = styled.a`
  width: 42px;
  height: 42px;
  background: rgba(217, 217, 217, 0.1);
  display: inline-flex;
  border-radius: 50%;
  margin-right: 6px;
  align-items: center;
  justify-content: center;
  line-height: 1;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease-in-out;

  &::before {
    content: "";
    width: 41px;
    height: 41px;
    position: absolute;
    background-color: #fff;
    border-radius: 50%;
    transform: scale(0);
	  transition: 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scale(1);
  }

  img {
    width: 44px;
    height: 44px;
    z-index: 1;
    transition: 0.3s ease-in-out;

    &:hover {
      filter: brightness(0) saturate(100%) invert(21%) sepia(92%) saturate(3134%) hue-rotate(229deg) brightness(79%) contrast(97%);
    }
  }
`;

export default NavBar