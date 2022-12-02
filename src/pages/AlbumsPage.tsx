import { useState } from 'react';
import { albums } from '../data/index';
import Collection from '../components/Collection';
import type Album from '../types/album';
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
      album.albumTitle.toLowerCase().includes(e.target.value)
    );
    setFilteredAlbums(filtered);
    console.log(filtered);
  };

  return (
    <>
      <StyledTopHeading>
        <StyledHeading>Your Musical Collection</StyledHeading>
        <input
          type='text'
          placeholder='Search an album...'
          onChange={handleFilterChange}
        />
      </StyledTopHeading>
      <Collection albums={filteredAlbums} />
    </>
  );
}

export default AlbumsPage;
