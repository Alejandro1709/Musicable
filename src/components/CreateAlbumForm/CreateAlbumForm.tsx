import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlbumContext } from '../../context/albumContext';
import useAlbums from '../../hooks/useAlbums';
import type Album from '../../types/album';
import Input from '../Input';
import * as S from './styles';

function CreateAlbumForm() {
  const [formData, setFormData] = useState({
    albumTitle: '',
    albumAuthor: '',
    albumReleaseDate: '',
    albumCover: '',
  });

  const { handleCreateAlbum } = useAlbums();

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAlbum: Album = {
      id: Math.floor(Math.random() * 1000),
      albumTitle: formData.albumTitle,
      albumAuthor: formData.albumAuthor,
      albumSlug: formData.albumTitle.toLowerCase().replace(/ /g, '-'),
      albumReleaseDate: formData.albumReleaseDate,
      albumCover: formData.albumCover,
      albumSongs: [],
    };

    handleCreateAlbum(newAlbum);

    navigate('/');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Group>
        <label htmlFor='albumTitle'>Album Title</label>
        <Input
          id='albumTitle'
          name='albumTitle'
          placeholder='Supernova'
          value={formData.albumTitle}
          onChange={handleChange}
        />
      </S.Group>
      <S.Group>
        <label htmlFor='albumAuthor'>Album Author</label>
        <Input
          id='albumAuthor'
          name='albumAuthor'
          placeholder='John Doe'
          value={formData.albumAuthor}
          onChange={handleChange}
        />
      </S.Group>
      <S.Group>
        <label htmlFor='albumReleaseDate'>Album Release Date</label>
        <Input
          type='date'
          id='albumReleaseDate'
          name='albumReleaseDate'
          value={formData.albumReleaseDate}
          onChange={handleChange}
        />
      </S.Group>
      <S.Group>
        <label htmlFor='albumCover'>Album Cover</label>
        <Input
          id='albumCover'
          name='albumCover'
          placeholder='https://...'
          value={formData.albumCover}
          onChange={handleChange}
        />
      </S.Group>
      <S.SubmitButton type='submit'>Add Album</S.SubmitButton>
    </S.Form>
  );
}

export default CreateAlbumForm;
