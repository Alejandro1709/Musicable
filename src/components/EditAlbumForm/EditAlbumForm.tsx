import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import * as S from './styles';

function EditAlbumForm() {
  const [formData, setFormData] = useState({
    albumTitle: '',
    albumAuthor: '',
    albumReleaseDate: '',
    albumCover: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      <S.SubmitButton type='submit'>Update Album</S.SubmitButton>
    </S.Form>
  );
}

export default EditAlbumForm;
