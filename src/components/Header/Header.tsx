import styled from '@emotion/styled';

const StyledHeader = styled.header`
  color: #fff;
  background-color: #333;
  user-select: none;
`;

const StyledNav = styled.nav`
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

const StyledNavLinks = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

const StyledNavLink = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <StyledNav role='navigation'>
        <h2>Musicable</h2>
        <StyledNavLinks>
          <StyledNavLink>Songs</StyledNavLink>
          <StyledNavLink>Artists</StyledNavLink>
          <StyledNavLink>Albums</StyledNavLink>
        </StyledNavLinks>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
