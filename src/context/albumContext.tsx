import React, { createContext, useState } from 'react';
import { albums } from '../data';
import type Album from '../types/album';

type AlbumContextType = {
  initialAlbums: Album[];
  filteredAlbums: Album[];
  setInitialAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  setFilteredAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  handleCreateAlbum: (album: Album) => void;
  handleFilterChange: (e: any) => void;
};

type AlbumProviderProps = {
  children: React.ReactNode;
};

export const AlbumContext = createContext<AlbumContextType>({
  initialAlbums: [],
  filteredAlbums: [],
  setInitialAlbums: () => {},
  setFilteredAlbums: () => {},
  handleCreateAlbum: () => {},
  handleFilterChange: () => {},
});

function AlbumProvider({ children }: AlbumProviderProps) {
  const [initialAlbums, setInitialAlbums] = useState<Album[]>(albums);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([]);

  const handleFilterChange = (e: any) => {
    const filtered = initialAlbums.filter((album) =>
      album.albumTitle.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredAlbums(filtered);
  };

  const handleCreateAlbum = (album: Album) => {
    setInitialAlbums([...initialAlbums, album]);
  };

  return (
    <AlbumContext.Provider
      value={{
        initialAlbums,
        setInitialAlbums,
        filteredAlbums,
        setFilteredAlbums,
        handleFilterChange,
        handleCreateAlbum,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

export default AlbumProvider;
