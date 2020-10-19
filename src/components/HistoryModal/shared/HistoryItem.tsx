import React, { FC, memo } from "react";
import styled from "styled-components/native";
import Fonts from "theme/fonts";
import Colors from "theme/colors";

const hidenCard = require("images/blue_back.png");
const cards = [
  require("images/1H.png"),
  require("images/2H.png"),
  require("images/3H.png"),
  require("images/4H.png"),
  require("images/5H.png"),
  require("images/6H.png"),
  require("images/7H.png"),
  require("images/8H.png"),
  require("images/9H.png"),
  require("images/1D.png"),
  require("images/2D.png"),
  require("images/3D.png"),
  require("images/4D.png"),
  require("images/5D.png"),
  require("images/6D.png"),
  require("images/7D.png"),
  require("images/8D.png"),
  require("images/9D.png"),
  require("images/1C.png"),
  require("images/2C.png"),
  require("images/3C.png"),
  require("images/4C.png"),
  require("images/5C.png"),
  require("images/6C.png"),
  require("images/7C.png"),
  require("images/8C.png"),
  require("images/9C.png"),
  require("images/1S.png"),
  require("images/2S.png"),
  require("images/3S.png"),
  require("images/4S.png"),
  require("images/5S.png"),
  require("images/6S.png"),
  require("images/7S.png"),
  require("images/8S.png"),
  require("images/9S.png"),
];

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

const HistoryItem: FC<Props> = ({ item }) => {
  return (
    <ItemContainer>
      <View>
        <Image source={cards[item[0]]} width={60} height={90} />
        <Image source={cards[item[1]]} width={60} height={90} />
        <Image source={cards[item[2]]} width={60} height={90} />
        <EmptyView />
        <Image source={cards[item[3]]} width={60} height={90} />
        <Image source={cards[item[4]]} width={60} height={90} />
        <Image source={cards[item[5]]} width={60} height={90} />
      </View>
    </ItemContainer>
  );
};

export default memo(HistoryItem);
