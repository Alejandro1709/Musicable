import * as S from './styles';

function AddAlbumCard() {
  return (
    <S.AlbumLink to='/albums/new'>
      <S.AddAlbumCard>
        <S.AddIcon />
      </S.AddAlbumCard>
    </S.AlbumLink>
  );
}

export default AddAlbumCard;
