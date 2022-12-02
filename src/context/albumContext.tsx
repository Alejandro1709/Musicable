import React, { createContext, useState } from 'react';
import { albums } from '../data';
import type Album from '../types/album';

type AlbumContextType = {
  initialAlbums: Album[];
  filteredAlbums: Album[];
  setInitialAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
  setFilteredAlbums: React.Dispatch<React.SetStateAction<Album[]>>;
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
  handleFilterChange: () => {},
});

function AlbumProvider({ children }: AlbumProviderProps) {
  const [initialAlbums, setInitialAlbums] = useState<Album[]>(albums);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([]);

  const handleFilterChange = (e: any) => {
    const filtered = albums.filter((album) =>
      album.albumTitle.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredAlbums(filtered);
  };

  return (
    <AlbumContext.Provider
      value={{
        initialAlbums,
        setInitialAlbums,
        filteredAlbums,
        setFilteredAlbums,
        handleFilterChange,
      }}
    >
      {children}
    </AlbumContext.Provider>
  );
}

export default AlbumProvider;
