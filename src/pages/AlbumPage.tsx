import { useContext } from 'react';
import { AlbumContext } from '../context/albumContext';
import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';

function AlbumPage() {
  const { albumSlug } = useParams();

  const { initialAlbums } = useContext(AlbumContext);

  const album = initialAlbums.find((album) => album.albumSlug === albumSlug);

  return (
    <>
      <Navigator
        backUrl='/'
        title={album?.albumTitle || 'Album'}
        rightTitle='Edit Album'
        rightUrl={`/albums/${albumSlug}/edit`}
      />
      <h1>Hello There!</h1>
    </>
  );
}

export default AlbumPage;
