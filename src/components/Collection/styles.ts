import styled from '@emotion/styled';

export const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;
