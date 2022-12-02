import { useParams } from 'react-router-dom';
import Navigator from '../components/Navigator';

function AlbumPage() {
  const { albumSlug } = useParams();

  return (
    <>
      <Navigator
        backUrl='/'
        title='Title'
        rightTitle='Edit Album'
        rightUrl={`/albums/${albumSlug}/edit`}
      />
      <h1>{albumSlug} Page</h1>
    </>
  );
}

export default AlbumPage;
