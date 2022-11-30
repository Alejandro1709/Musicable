import Header from './components/Header';
import AppContainer from './components/AppContainer';
import Collection from './components/Collection';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  padding-top: 1rem;
`;

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

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <StyledSection>
          <StyledTopHeading>
            <StyledHeading>Your Musical Collection</StyledHeading>
            <input type='text' placeholder='Search an album...' />
          </StyledTopHeading>
          <Collection />
        </StyledSection>
      </AppContainer>
    </>
  );
}

export default App;
