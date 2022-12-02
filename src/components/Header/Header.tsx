import { NavLink } from 'react-router-dom';
import * as S from './styles';

function Header() {
  return (
    <S.Header>
      <S.Nav role='navigation'>
        <S.LogoLink to='/'>
          <h2>Musicable</h2>
        </S.LogoLink>
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
