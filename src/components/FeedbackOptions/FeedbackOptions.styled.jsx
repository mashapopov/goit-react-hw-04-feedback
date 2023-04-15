import styled from 'styled-components';

export const FeedbackList = styled.ul`
  display: flex;
  padding-bottom: 20px;
  gap: 20px;
`;

export const Button = styled.button`
  font-size: 30px;
  background-color: #add8e6;
  border: 1px solid #add8e6;
  border-radius: 12px;
  text-transform: capitalize;
  transition: 200ms;
  :active {
    background-color: blue;
    color: white;
  }
  :hover {
    background-color: blue;
    color: white;
  }
`;
