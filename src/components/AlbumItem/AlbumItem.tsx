import type Album from '../../types/album';
import * as S from './styles';

type AlbumItemProps = {
  album: Album;
};

function AlbumItem({ album }: AlbumItemProps) {
  return (
    <S.AlbumLink to={`/albums/${album.albumSlug}`}>
      <S.Album>
        <S.AlbumImageCover>
          <S.AlbumImage
            src={album.albumCover || 'https://via.placeholder.com/150'}
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
    </S.AlbumLink>
  );
}

export default AlbumItem;
