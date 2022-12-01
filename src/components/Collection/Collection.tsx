import AlbumItem from '../AlbumItem';
import { albums } from '../../data/index';
import * as S from './styles';

function Collection() {
  return (
    <S.AlbumsGrid>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </S.AlbumsGrid>
  );
}

export default Collection;
