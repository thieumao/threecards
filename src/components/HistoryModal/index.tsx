import React, { FC, memo, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';
import { FlatList } from 'react-native';
import Modal from 'modal-react-native-web';

interface Props {
  modalVisible: boolean;
  setModalVisible: () => void;
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

const HistoryModal = styled(FlatList as new () => FlatList<string>)`
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
  color: ${props => props.color};
  flex: 1;
`;

const TitleText = styled(Fonts.Bold)`
  font-size: 16px;
  background-color: ${Colors.BACKGROUND_COLOR};
  padding: 12px;
`;

const QuestionListModal: FC<Props> = ({ modalVisible, setModalVisible }) => {

  return (
    <Modal animationType="slide" transparent visible={modalVisible} onBackdropPress={() => setModalVisible()}>
      <CenteredView>
        <ModalView>
          <TitleText>Select Question</TitleText>
          <CloseButton onPress={() => setModalVisible()}>
            <ButtonText>Close</ButtonText>
          </CloseButton>
        </ModalView>
      </CenteredView>
    </Modal>
  );
};

export default memo(HistoryModal);
