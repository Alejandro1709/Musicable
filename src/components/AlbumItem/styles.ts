import styled from '@emotion/styled';

export const Album = styled.article`
  user-select: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const AlbumImageCover = styled.div`
  background-color: #eee;
`;

export const AlbumImage = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const AlbumInfo = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AlbumTitle = styled.h2``;

export const AlbumArtist = styled.h3``;

export const AlbumYear = styled.p``;
