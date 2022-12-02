import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Navigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #f1f1f1;
  color: #000;

  &:hover {
    background-color: #e1e1e1;
  }
`;
