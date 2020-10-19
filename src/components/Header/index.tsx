import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';
interface Props {
  title?: string;
  onBack?: () => void;
  onPress?: () => void;
  doneTitle?: string;
  canBack?: boolean;
  showIcon?: boolean;
  iconName?: string;
}

const Container = styled.View`
  background-color: ${Colors.MAIN_COLOR};
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const EmptyView = styled.View``;

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

const Title = styled(Fonts.Title1)`
  font-weight: bold;
  color: ${Colors.WHITE};
`;

const Header: FC<Props> = ({
  title,
  onBack,
  onPress,
  canBack = false,
  showIcon = false,
  iconName = ''
}) => {
  return (<EmptyView />);
  // return (
  //   <Container>
  //     {canBack ? (
  //       <Button onPress={onBack}>
  //         <Icon type="ionicon" name="chevron-back" color={Colors.WHITE} size={28} />
  //       </Button>
  //     ) : (
  //       <EmptyView />
  //     )
  //     }
  //     <Title>{title}</Title>
  //     {showIcon ? (
  //       <Button onPress={onPress}>
  //         <Icon type="ionicon" name={iconName} color={Colors.WHITE} size={28} />
  //       </Button>
  //     ) : (
  //       <EmptyView />
  //     )
  //     }
  //   </Container>
  // );
};

export default memo(Header);
