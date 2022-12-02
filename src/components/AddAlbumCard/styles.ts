import { GrAdd } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AddAlbumCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  border: dashed 3px #ccc;
  border-radius: 5px;
  height: calc(100% - 30%);
  cursor: pointer;
  user-select: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: calc(100%);
  }
`;

export const AddIcon = styled(GrAdd)`
  fill: #ccc;
  font-size: 2rem;
`;

export const AlbumLink = styled(NavLink)`
  color: black;
  text-decoration: none;
`;
