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

const WorkExperience = () => {
    return (
          <StyledForm>
          <StyledTitle>Work Experience</StyledTitle>
          <StyledInput type="text" placeholder="Job Title" />
          <StyledInput type="text" placeholder="Company" />
          <StyledInput type="date" placeholder="Start Date" />
          <StyledInput type="date" placeholder="End Date" />
          <StyledInput type="text" placeholder="Job Description" />
          <CreateNextButton to='/LeadershipActivities'>Next</CreateNextButton>
          {/* Other form fields */}
        </StyledForm>
     );
 };

export default WorkExperience
