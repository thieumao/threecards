import React, { FC, memo } from "react";
import styled from "styled-components/native";
import Fonts from "theme/fonts";
import Colors from "theme/colors";
import { hidenCard, cards, StyledProps } from "constants/AppConstants";
import { IoIosCheckmarkCircle } from 'react-icons/io';

interface Props {
  item: any;
  isWin: boolean;
}

const Text = styled(Fonts.Bold)`
  font-size: 18px;
  padding: 8px;
`;

const ItemContainer = styled.View`
  width: 100%;
  margin-vertical: 4px;
`;

const Image = styled.Image<StyledProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  resize-mode: contain;
  align-self: center;
  margin-horizontal: 2px;
`;

const View = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const EmptyView = styled.View`
  width: 28px;
`;

const NoneView = styled.View`
  width: 28px;
  height: 2px;
`;

const HistoryItem: FC<Props> = ({ item, isWin }) => {
  return (
    <ItemContainer>
      <View>
        {isWin && (<IoIosCheckmarkCircle color={Colors.MAIN_COLOR} size={28} />)}
        {!isWin && <NoneView />}
        <Image source={cards[item[0]]} width={60} height={90} />
        <Image source={cards[item[1]]} width={60} height={90} />
        <Image source={cards[item[2]]} width={60} height={90} />
        <EmptyView />
        <Image source={cards[item[3]]} width={60} height={90} />
        <Image source={cards[item[4]]} width={60} height={90} />
        <Image source={cards[item[5]]} width={60} height={90} />
        {!isWin && (<IoIosCheckmarkCircle color={Colors.MAIN_COLOR} size={28} />)}
        {isWin && <NoneView />}
      </View>
    </ItemContainer>
  );
};

export default memo(HistoryItem);
