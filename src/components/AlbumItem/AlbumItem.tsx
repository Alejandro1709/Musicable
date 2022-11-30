import * as S from './styles';

function AlbumItem() {
  return (
    <S.Album>
      <S.AlbumImageCover>
        <S.AlbumImage
          src='https://via.placeholder.com/150'
          alt='Album cover'
          draggable='false'
        />
      </S.AlbumImageCover>
      <S.AlbumInfo>
        <S.AlbumTitle>Album Title</S.AlbumTitle>
        <S.AlbumArtist>Artist Name</S.AlbumArtist>
        <S.AlbumYear>2021</S.AlbumYear>
      </S.AlbumInfo>
    </S.Album>
  );
}

export default AlbumItem;
