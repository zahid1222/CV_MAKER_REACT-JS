import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from '../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3e3e3f;
  padding: 10px;
`;

const NavLogo = styled.img`
  width: 80px;
  margin-right: 10px;
`;

const NavTitle = styled.h1`
  font-size: 24px;
  margin-right: 300px;
  color:white;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color:white;
  font-size: 18px;
  &:hover {
    color: #04a49b;
  }
`;

const Navbar = () => {
  return (
    
    <NavContainer>
      <NavLogo src={logo} alt="Logo" />
      <NavTitle>Events Up</NavTitle>
      <NavList>
      <NavItem>
      <div style={{ display: 'block', margin:5
                 
                   }}>
          <NavLinkStyled to="/WorkExperience">About</NavLinkStyled>
          </div>
        </NavItem>
        <NavItem>
        <div style={{ display: 'block', 
                  width: 185, textAlign: 'left'
                   }}>
     
      <Dropdown>
        <Dropdown.Toggle variant="success">
           Services
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Home Page
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Settings
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
        </NavItem>
       
        <NavItem>
        <div style={{ display: 'block', 
                  width: 185, textAlign: 'left'
                   }}>
     
      <Dropdown>
        <Dropdown.Toggle variant="success">
          Venue Types
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
            Home Page
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Settings
          </Dropdown.Item>
          <Dropdown.Item href="#">
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
        </NavItem>
        <NavItem>
        <div style={{ display: 'block', margin:5
                 
                }}>
          <NavLinkStyled to="/WorkExperience">Sign Up</NavLinkStyled>
          </div>
        </NavItem>
        
        <NavItem>
        <div style={{ display: 'block', margin:5
                 
                }}>
          <NavLinkStyled to="/LeadershipActivities">Contant us</NavLinkStyled></div>
        </NavItem>
      </NavList>
    </NavContainer>
     
  );
};

export default Navbar;
