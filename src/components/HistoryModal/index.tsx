import React, { FC, memo, useEffect, useState } from "react";
import styled from "styled-components/native";
import Colors from "../../theme/colors";
import Fonts from "../../theme/fonts";
import { FlatList } from "react-native";
import Modal from "modal-react-native-web";
import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";
import HistoryItem from "./shared/HistoryItem";
import { isWin } from "containers/Game/GameLogic";

interface Props {
  modalVisible: boolean;
  setModalVisible: () => void;
  onReset: () => void;
  scores: any[];
}

interface StyledProps {
  height?: number;
  width?: number;
  marginHorizontal?: number;
  paddidngHorizontal?: number;
  isCorrect?: boolean;
  isSelected?: boolean;
  isShown?: boolean;
  color?: string;
}

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

const Space = styled.View<StyledProps>`
  margin-top: 1px;
  background-color: ${Colors.MAIN_COLOR};
  width: 100%;
  height: 1px;
`;

const CloseButton = styled.TouchableOpacity`
  background-color: ${Colors.MAIN_COLOR};
  padding: 4px;
  elevation: 2;
  margin-vertical: 12px;
`;

const ButtonText = styled(Fonts.Bold)`
  padding: 4px;
  color: white;
  text-align: left;
`;

const Text = styled(Fonts.Normal)`
  padding: 8px;
  text-align: center;
`;

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const ModalView = styled.View`
  background-color: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px;
  shadow-color: #000;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
  width: 80%;
  height: 80%;
`;

const HistoryFlatList = styled(FlatList as new () => FlatList<string>)`
  width: 100%;
  height: 100%;
`;

const ItemContainer = styled.TouchableOpacity`
  margin-horizontal: 2px;
  padding-vertical: 4px;
`;

const QuestionItem = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 2px;
`;

const ItemText = styled(Fonts.Normal)<StyledProps>`
  font-size: 14px;
  background-color: ${Colors.BACKGROUND_COLOR};
  color: ${(props) => props.color};
  flex: 1;
`;

const TitleText = styled(Fonts.Bold)`
  font-size: 16px;
  background-color: ${Colors.BACKGROUND_COLOR};
  padding: 12px;
`;

const FooterView = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 12px;
`;

const EmptyView = styled.View`
  width: 28px;
`;

const HistoryModal: FC<Props> = ({
  modalVisible,
  setModalVisible,
  onReset,
  scores,
}) => {
  const renderItem = ({ index }: { item; index }) => {
    const item = scores[index];
    return <HistoryItem item={item} isWin={isWin(item) || false} />;
  };

  let score1 = 0;
  let score2 = 0;
  for (let score of scores) {
    if (isWin(score)) {
      score1 += 1;
    } else {
      score2 += 1;
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onBackdropPress={() => setModalVisible()}
    >
      <CenteredView>
        <ModalView>
          <TitleText>{`Result: ${score1} - ${score2}`}</TitleText>
          <HistoryFlatList
            data={scores}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}_${item}`}
          />
          <FooterView>
            <PrimaryButton title="Close" onPress={() => setModalVisible()} />
            <EmptyView />
            <SecondaryButton title="Reset" onPress={() => onReset()} />
          </FooterView>
          <TitleText>{score1} - {score2}</TitleText>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default HistoryModal;
