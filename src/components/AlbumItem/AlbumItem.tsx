import * as S from './styles';
import type Album from '../../types/album';

type AlbumItemProps = {
  album: Album;
};

function AlbumItem({ album }: AlbumItemProps) {
  return (
    <S.Album>
      <S.AlbumImageCover>
        <S.AlbumImage
          src='https://via.placeholder.com/150'
          alt={`The album cover for ${album.albumTitle}`}
          draggable='false'
        />
      </S.AlbumImageCover>
      <S.AlbumInfo>
        <S.AlbumTitle>{album.albumTitle}</S.AlbumTitle>
        <S.AlbumArtist>{album.albumAuthor}</S.AlbumArtist>
        <S.AlbumYear>{album.albumReleaseDate}</S.AlbumYear>
      </S.AlbumInfo>
    </S.Album>
  );
}

export default AlbumItem;
