import { ReactNode } from 'react';
import styled from '@emotion/styled';

const StyledContainer = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

type AppContainerProps = {
  children: ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default AppContainer;
