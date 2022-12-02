import AlbumItem from '../AlbumItem';
import AddAlbumCard from '../AddAlbumCard';
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
      <AddAlbumCard />
    </S.AlbumsGrid>
  );
}

export default Collection;
