import Navigator from '../components/Navigator';
import EditAlbumForm from '../components/EditAlbumForm';

function EditAlbumPage() {
  return (
    <>
      <Navigator title='Edit Album' backUrl='/albums/trench' />
      <EditAlbumForm />
    </>
  );
}

export default EditAlbumPage;
