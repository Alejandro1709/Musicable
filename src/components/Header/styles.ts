import { NavLink as Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
  color: #fff;
  background-color: #333;
  user-select: none;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 50rem;
  padding: 0.5rem 0;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

export const LogoLink = styled(Link)`
  color: white;
  cursor: pointer;
  text-decoration: none;
`;

export const NavLink = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
