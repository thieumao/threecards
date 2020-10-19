import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Fonts from '../../../theme/fonts';
import Colors from '../../../theme/colors';

interface Props {
  item: any;
}

interface StyledProps {
  width?: number;
  height?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  paddingRight?: number;
  isCorrect?: boolean;
  isSelected?: boolean;
  isShown?: boolean;
}

const Text = styled(Fonts.Bold)`
  font-size: 18px;
  padding: 8px;
`;

const ItemContainer = styled.View<StyledProps>`
  width: 100%;
  background-color: ${Colors.SECOND_COLOR};
`;


const HistoryItem: FC<Props> = ({ item }) => {
  return (
    <ItemContainer>
      <Text>{item[0]}</Text>
    </ItemContainer>
  );
};

export default memo(HistoryItem);
