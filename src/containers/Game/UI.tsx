import styled from "styled-components/native";
import { StyledProps } from "constants/AppConstants";
import Colors from "theme/colors";

export const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

export const Image = styled.Image<StyledProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  resize-mode: contain;
  align-self: center;
`;

export const ThreeCards = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const RandomView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const HistoryView = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;

export const Score1 = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: ${Colors.RED};
`;

export const Score2 = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: ${Colors.RED};
`;

export const View = styled.View`
  flex-direction: row;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const EmptyView = styled.View`
  width: 28px;
`;