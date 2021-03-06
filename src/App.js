import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router'
import styled from 'styled-components';
import logo3 from './jfaulstick1.jpg';
const ProfileImage = styled.img`
  width: 12em;
  height: 12em;
  border-radius: 60%;
`;

const ProfileTitle = styled.h1`
  color:;
`

const HeaderDiv = styled.div`
  padding-top: 5vh;
  text-align: center;
  font-family: 'Zilla Slab Highlight', sans-serif;
  color: black;
`;

const NavLink = styled(Link)`
  display: inline-flex;
  margin: 0 5px;
  color: black;
  font-size: 16px;
`
class Header extends Component {
  render() {
    return (
      <HeaderDiv className="App-header">
        <Link to="/">
          <ProfileImage src={logo3} alt='Joe Faulstick'/>
          <ProfileTitle className="App-title">KATONGOLE ISAAC</ProfileTitle>
        </Link>
        <div>
          <NavLink to='/'>ABOUT</NavLink>
          <NavLink to='/content'>PORTFOLIO</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
        </div>
        { this.props.children }
        <hr/>
      </HeaderDiv>
    );
  }
}

export default Header;

