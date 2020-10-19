import Screen from '../Screen';
import React, { FC, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Fonts from '../../theme/fonts';
import Colors from '../../theme/colors';
import { useParams, useHistory } from 'react-router-dom';

const TestFlatList = styled(FlatList as new () => FlatList<string>)`
  width: 100%;
  height: 100%;
`;

const ButtonText = styled(Fonts.Bold)`
  font-size: 18px;
  background-color: ${Colors.BACKGROUND_COLOR};
  margin: 10px;
  padding: 10px;
`;

const PartList: FC = () => {
  const { testNumber } = useParams();
  const history = useHistory();

  const [testList] = useState<string[]>(['Part 1', 'Part 2', 'Part 3', 'Part 4', 'Part 5', 'Part 6', 'Part 7']);

  const openPartScreen = (index: number) => {
    const partNumber = index + 1;
    history.push(`/ets2020/test${testNumber}/part${partNumber}`);
  };

  const renderItem = ({ index }: { item: string; index: number }) => {
    return (
      <ButtonText onPress={() => openPartScreen(index)}>{`${testList[index]}`}</ButtonText>
    );
  };

  return (
    <Screen canBack title={`Test ${testNumber}`}>
      <TestFlatList
        data={testList}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_${item}`}
      />
    </Screen>
  );
};

export default PartList;
