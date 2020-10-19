import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/colors';

interface Props {
  color?: string;
  height?: number;
}

const Container = styled.View<Props>`
  border-bottom-color: ${props => props.color};
  border-bottom-width: ${props => props.height}px;
`;

const Divider: FC<Props> = ({ color, height }) => {
  return <Container color={color} height={height} />;
};

Divider.defaultProps = {
  color: Colors.DIVIDER,
  height: 1,
};

export default memo(Divider);
