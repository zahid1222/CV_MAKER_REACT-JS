import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledForm,StyledInput,StyledTitle } from './style';

const CreateNextButton = styled(Link)`
margin-top:30px;
  text-decoration:none;
  background-color: #3e3e3f;
  color: #fff;
  padding: 12px 20px;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    background-color: #04a49b;
  }
`;

const Personalinformation = () => {
    return (
        <StyledForm>
        <StyledTitle>Personal Information</StyledTitle>
        <StyledInput type="text" placeholder="Full Name" />
        <StyledInput type="text" placeholder="Email" />
        <StyledInput type="text" placeholder="Phone Number" />
        <StyledInput type="text" placeholder="Address" />
        <StyledInput type="text" placeholder="LinkedIn" />
        <CreateNextButton to='/Education'>Next</CreateNextButton>
        {/* Other form fields */}
      </StyledForm>
    );
  };

export default Personalinformation
