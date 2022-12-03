import { useContext } from 'react';
import { AlbumContext } from '../context/albumContext';

export default function useAlbums() {
  return useContext(AlbumContext);
}
