import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    padding: 15px;
`;

const NameArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DescriptionLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

const NameLabel = styled.Text`
    font-size: 14px;
`;

const ValueLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

const DateLabel = styled.Text`
  font-size: 14px;
`;

export {
  Container, DescriptionLabel, NameArea, NameLabel, DateLabel, ValueLabel,
};
