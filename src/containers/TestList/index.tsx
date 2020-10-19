import Screen from '../Screen';
import React, { FC, useState } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import Fonts from '../../theme/fonts';
import Colors from '../../theme/colors';
import { useHistory } from 'react-router-dom';

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

const TestList: FC = () => {
  const history = useHistory();

  const [testList] = useState<string[]>(['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8', 'Test 9', 'Test 10']);

  const openPartListScreen = (index: number) => {
    const testNumber = index + 1;
    history.push(`/ets2020/test${testNumber}`);
  };

  const renderItem = ({ index }: { item: string; index: number }) => {
    return (
      <ButtonText onPress={() => openPartListScreen(index)}>{`${testList[index]}`}</ButtonText>
    );
  };

  return (
    <Screen title={'ETS 2020'}>
      <TestFlatList
        data={testList}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${index}_${item}`}
      />
    </Screen>
  );
};

export default TestList;
