import { useContext } from 'react';
import { AlbumContext } from '../context/albumContext';
import Collection from '../components/Collection';
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
  const { initialAlbums, filteredAlbums, handleFilterChange } =
    useContext(AlbumContext);

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
