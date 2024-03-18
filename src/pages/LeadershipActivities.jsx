import React from 'react'
import styled from 'styled-components';
import { StyledForm,StyledInput,StyledTitle } from './style';
import { Link } from 'react-router-dom';

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

const LeadershipActivities = () => {
    return (
    <StyledForm>
    <StyledTitle>Leadership Activities</StyledTitle>
    <StyledInput type="text" placeholder="Activity 1" />
    <StyledInput type="text" placeholder="Activity 2" />
    <StyledInput type="text" placeholder="Activity 3" />
    <StyledInput type="text" placeholder="Activity 4" />
    <CreateNextButton to='/Thanks'>Submit</CreateNextButton>
    {/* Other form fields */}
  </StyledForm>
    );
    };

export default LeadershipActivities
