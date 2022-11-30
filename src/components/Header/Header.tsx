import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Nav role='navigation'>
        <h2>Musicable</h2>
        <S.NavLinks>
          <S.NavLink>Songs</S.NavLink>
          <S.NavLink>Artists</S.NavLink>
          <S.NavLink>Albums</S.NavLink>
        </S.NavLinks>
      </S.Nav>
    </S.Header>
  );
}

export default Header;
