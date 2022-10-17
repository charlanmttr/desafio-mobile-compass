import React from 'react';
import * as S from './styles';
import ExtractItem from './extractItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Homepage() {
  return (
    <S.Container>
      <S.BalanceArea>
        <S.Title>Seu saldo</S.Title>
        <S.Title>R$1000,00</S.Title>
      </S.BalanceArea>
      <S.ExtractArea>
        <S.Title>Suas movimentações</S.Title>
        <S.Flatlist
          data={DATA}
          renderItem={(item) => <ExtractItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      </S.ExtractArea>
    </S.Container>
  );
}

export default Homepage;
