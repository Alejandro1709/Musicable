import { GrAdd } from 'react-icons/gr';
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

export const AddAlbumCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 3px #ccc;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AddIcon = styled(GrAdd)`
  fill: #ccc;
  font-size: 2rem;
`;
