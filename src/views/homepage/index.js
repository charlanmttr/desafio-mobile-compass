import React, { useEffect, useState } from 'react';
import * as S from './styles';
import ExtractItem from '../../components/extractItem';

import api from '../../utils/api';

function Homepage() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);

  const getBalance = async () => api.get('/myBalance').then(({ data }) => data.amount);
  const getList = async () => api.get(`myStatement/10/${offset}`).then(({ data }) => data.items);

  useEffect(() => {
    const getData = async () => {
      Promise.all([
        getBalance(),
        getList(),
      ]).then(([amount, items]) => {
        setTotalAmount(amount);
        setList(items);
      })
        .catch((err) => console.log(err));
    };

    getData();
  }, []);

  return (
    <S.Container>
      <S.BalanceArea>
        <S.Title>Seu saldo</S.Title>
        <S.Title>
          R$
          {totalAmount}
        </S.Title>
      </S.BalanceArea>
      <S.ExtractArea>
        <S.Title>Suas movimentações</S.Title>
        <S.Flatlist
          data={list}
          renderItem={({ item }) => <ExtractItem data={item} />}
          keyExtractor={(item) => item.id}
        />
      </S.ExtractArea>
    </S.Container>
  );
}

export default Homepage;
