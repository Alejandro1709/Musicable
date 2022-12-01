import React from 'react';
import Collection from '../components/Collection';
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
  return (
    <>
      <StyledTopHeading>
        <StyledHeading>Your Musical Collection</StyledHeading>
        <input type='text' placeholder='Search an album...' />
      </StyledTopHeading>
      <Collection />
    </>
  );
}

export default AlbumsPage;
