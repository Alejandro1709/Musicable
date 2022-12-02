import AlbumItem from '../AlbumItem';
import { albums } from '../../data/index';
import type Album from '../../types/album';
import * as S from './styles';

type CollectionTypes = {
  albums: Album[];
};

function Collection({ albums }: CollectionTypes) {
  return (
    <S.AlbumsGrid>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </S.AlbumsGrid>
  );
}

export default Collection;
