import * as S from './styles';

function Navigator() {
  return (
    <S.Navigator>
      <S.Link to='/'>Back</S.Link>
      <h1>Add a new Album</h1>
      <S.Link to='/album/edit'>Rand</S.Link>
    </S.Navigator>
  );
}

export default Navigator;
