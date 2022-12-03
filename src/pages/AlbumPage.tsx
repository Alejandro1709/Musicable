import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AlbumContext } from '../context/albumContext';
import Navigator from '../components/Navigator';
import styled from '@emotion/styled';
import useAlbums from '../hooks/useAlbums';

const AlbumPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`;

const AlbumImage = styled.img`
  width: 100%;
  max-height: 260px;
  max-width: 260px;
  border-radius: 0.5rem;
`;

const AlbumTrackList = styled.div`
  width: 60%;
`;

const AlbumList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 190px;
  padding: 0;
  margin: 0;
  list-style: none;
  overflow: scroll;
`;

const AlbumListItem = styled.li`
  padding: 0.5rem;
  background-color: #ddd;
  border-radius: 0.3rem;

  &:nth-of-type(odd) {
    background-color: #e6e4e4;
  }
`;

function AlbumPage() {
  const { albumSlug } = useParams();

  const { initialAlbums } = useAlbums();

  const album = initialAlbums.find((album) => album.albumSlug === albumSlug);

  return (
    <>
      <Navigator
        backUrl='/'
        title={album?.albumTitle || 'Album'}
        rightTitle='Edit Album'
        rightUrl={`/albums/${albumSlug}/edit`}
      />
      <AlbumPageContainer>
        <AlbumImage
          src={album?.albumCover}
          alt={album?.albumTitle}
          draggable={false}
        />
        <AlbumTrackList>
          <AlbumList>
            {album &&
              album.albumSongs.map((song) => (
                <AlbumListItem key={song.id}>{song.songTitle}</AlbumListItem>
              ))}
          </AlbumList>
        </AlbumTrackList>
      </AlbumPageContainer>
    </>
  );
}

export default AlbumPage;
