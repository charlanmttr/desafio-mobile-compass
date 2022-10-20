import React from 'react';
import * as S from './styles';

function ExtractItem({ data }) {
  const { description, amount, from, createdAt, id, to, tType } = data;

  return (
    <S.Container>
      <S.DescriptionLabel>{description}</S.DescriptionLabel>
      <S.NameArea>
        {
          (from)
            ? <S.NameLabel>{from}</S.NameLabel>
            : <S.NameLabel>{to}</S.NameLabel>
        }
        <S.DateLabel>{createdAt}</S.DateLabel>
      </S.NameArea>
      <S.ValueLabel>
        R$
        {amount}
      </S.ValueLabel>

      {/* <S.Title>{id}</S.Title> */}
      {/* <S.Title>{tType}</S.Title> */}
    </S.Container>
  );
}

export default ExtractItem;
