import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';
import { IoMdArrowBack, IoIosList } from 'react-icons/io';

interface Props {
  title?: string;
  onBack?: () => void;
  onShowMenu?: () => void;
  doneTitle?: string;
  canBack?: boolean;
  showMenu?: boolean;
}

const Container = styled.View`
  background-color: ${Colors.MAIN_COLOR};
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EmptyView = styled.View`
  width: 28px;
  height: 28px;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

const Title = styled(Fonts.Title1)`
  font-weight: bold;
  color: ${Colors.WHITE};
`;

const HeaderWithTitle: FC<Props> = ({
  title,
  onBack,
  onShowMenu,
  canBack = false,
  showMenu = false,
}) => {
  return (
    <Container>
      {canBack ? (
        <Button onPress={onBack}>
          <IoMdArrowBack color={Colors.WHITE} size={28} />
        </Button>
      ) : (
        <EmptyView />
      )
      }
      <Title>{title}</Title>
      {showMenu ? (
        <Button onPress={onShowMenu}>
          <IoIosList color={Colors.WHITE} size={28} />
        </Button>
      ) : (
        <EmptyView />
      )
      }
    </Container>
  );
};

export default memo(HeaderWithTitle);
