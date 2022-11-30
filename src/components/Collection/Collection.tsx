import AlbumItem from '../AlbumItem';
import * as S from './styles';

function Collection() {
  return (
    <S.AlbumsGrid>
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
      <AlbumItem />
    </S.AlbumsGrid>
  );
}

export default Collection;
