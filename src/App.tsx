import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AppContainer from './components/AppContainer';
import AlbumsPage from './pages/AlbumsPage';
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
          </Routes>
        </StyledSection>
      </AppContainer>
    </>
  );
}

export default App;
