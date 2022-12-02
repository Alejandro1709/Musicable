import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppContainer from './components/AppContainer';
import AlbumsPage from './pages/AlbumsPage';
import AlbumPage from './pages/AlbumPage';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  padding-top: 1rem;
`;

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <StyledSection>
          <Routes>
            <Route path='/' element={<AlbumsPage />} />
            <Route path='/albums/:albumSlug' element={<AlbumPage />} />
            <Route path='*' element={<h1>404 Page Not Found</h1>} />
          </Routes>
        </StyledSection>
      </AppContainer>
    </>
  );
}

export default App;
