import { useParams } from 'react-router-dom';

function AlbumPage() {
  const { albumSlug } = useParams();

  return (
    <>
      <h1>{albumSlug} Page</h1>
    </>
  );
}

export default AlbumPage;
