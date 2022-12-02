import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import Input from '../components/Input';

const StyledNavigator = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #f1f1f1;
  color: #000;

  &:hover {
    background-color: #e1e1e1;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const StyledGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledSubmitButton = styled.button`
  color: white;
  border: none;
  background-color: #333;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin-top: 0.5rem;

  &:hover {
    background-color: #555;
  }
`;

function NewAlbumPage() {
  return (
    <>
      <StyledNavigator>
        <StyledLink to='/'>Back</StyledLink>
        <h1>Add a new Album</h1>
        <StyledLink to='/album/edit'>Rand</StyledLink>
      </StyledNavigator>
      <StyledForm>
        <StyledGroup>
          <label htmlFor='albumTitle'>Album Title</label>
          <Input id='albumTitle' name='albumTitle' placeholder='Supernova' />
        </StyledGroup>
        <StyledGroup>
          <label htmlFor='albumAuthor'>Album Author</label>
          <Input id='albumAuthor' name='albumAuthor' placeholder='John Doe' />
        </StyledGroup>
        <StyledGroup>
          <label htmlFor='albumReleaseDate'>Album Release Date</label>
          <Input type='date' id='albumReleaseDate' name='albumReleaseDate' />
        </StyledGroup>
        <StyledGroup>
          <label htmlFor='albumCover'>Album Cover</label>
          <Input type='file' id='albumCover' name='albumCover' />
        </StyledGroup>
        <StyledSubmitButton type='submit'>Add Album</StyledSubmitButton>
      </StyledForm>
    </>
  );
}

export default NewAlbumPage;