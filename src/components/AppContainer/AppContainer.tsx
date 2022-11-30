import { ReactNode } from 'react';
import * as S from './styles';

type AppContainerProps = {
  children: ReactNode;
};

function AppContainer({ children }: AppContainerProps) {
  return <S.Container>{children}</S.Container>;
}

export default AppContainer;
