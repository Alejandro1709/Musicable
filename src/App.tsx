import Header from './components/Header';
import AppContainer from './components/AppContainer';
import styled from '@emotion/styled';

const StyledSection = styled.section`
  padding-top: 1rem;
`;

const StyledHeading = styled.h1`
  font-size: 2rem;
`;

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <StyledSection>
          <StyledHeading>Your Musical Collection</StyledHeading>
        </StyledSection>
      </AppContainer>
    </>
  );
}

export default App;
