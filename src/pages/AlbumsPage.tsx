import { useState } from 'react';
import { albums } from '../data/index';
import Collection from '../components/Collection';
import type Album from '../types/album';
import Input from '../components/Input';
import styled from '@emotion/styled';

const StyledHeading = styled.h1`
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const StyledTopHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function AlbumsPage() {
  const [initialAlbums, setInitialAlbums] = useState<Album[]>(albums);
  const [filteredAlbums, setFilteredAlbums] = useState<Album[]>([]);

  const handleFilterChange = (e: any) => {
    const filtered = albums.filter((album) =>
      album.albumTitle.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredAlbums(filtered);
  };

  return (
    <>
      <StyledTopHeading>
        <StyledHeading>Your Musical Collection</StyledHeading>
        <Input
          id='filterInput'
          name='filterInput'
          placeholder='Search for an album...'
          onChange={handleFilterChange}
        />
      </StyledTopHeading>
      <Collection
        albums={filteredAlbums.length > 0 ? filteredAlbums : initialAlbums}
      />
    </>
  );
}

export default AlbumsPage;
