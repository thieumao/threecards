import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from  '../../../theme/colors';
import Fonts from '../../../theme/fonts';

interface Props {
    title: string;
    onPress: () => void;
}

const Button = styled.TouchableOpacity`
  width: 40%;
  padding-vertical: 5px;
  border-width: 1px;
  border-color: ${Colors.MAIN_COLOR};
`;

const ButtonText = styled(Fonts.Bold)`
  color: ${Colors.MAIN_COLOR};
  text-align: center;
  font-size: 16px;
  width: 100%;
`;

const SecondaryButton: FC<Props> = ({ title, onPress }) => {
  return (
    <Button onPress={onPress}>
        <ButtonText>{title}</ButtonText>
    </Button>
  );
};

export default memo(SecondaryButton);
