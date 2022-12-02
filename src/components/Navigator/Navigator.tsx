import * as S from './styles';

type NavigatorProps = {
  backUrl?: string;
  title: string;
  rightUrl?: string;
  rightTitle?: string;
};

function Navigator({
  backUrl = '/',
  title,
  rightTitle,
  rightUrl = '/',
}: NavigatorProps) {
  return (
    <S.Navigator>
      <S.Link to={backUrl}>Back</S.Link>
      <h1>{title}</h1>
      {rightTitle ? (
        <S.Link to={rightUrl}>{rightTitle}</S.Link>
      ) : (
        <S.UnLink to={rightUrl}>{rightTitle}</S.UnLink>
      )}
    </S.Navigator>
  );
}

export default Navigator;
