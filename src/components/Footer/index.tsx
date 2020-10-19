import React, { FC, memo } from 'react';
import styled from 'styled-components/native';
import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';

interface Props {
  correctNumber: number;
  totalNumber: number;
  onReset: () => void;
  onSubmit: () => void;
}

const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`;

const FooterView = styled.View`
  height: 10%;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-horizontal: 10px;
`;

const EmptyView = styled.View`
  width: 12px;
`;

const ResultText = styled(Fonts.Bold)`
  width: 100%;
  font-size: 16px;
  text-align: center;
  color: grey;
  padding-top: 8px;
  padding-bottom: 8px;
`;

const Footer: FC<Props> = ({ correctNumber, totalNumber, onReset, onSubmit }) => {
  return (
      <Container>
        { correctNumber >= 0 && <ResultText>{`Correct: ${correctNumber} / ${totalNumber}`}</ResultText> }
        <FooterView>
          <SecondaryButton
            title="Reset"
            onPress={() => onReset()}
          />
          <EmptyView />
          <PrimaryButton
            title="Submit"
            onPress={() => onSubmit()}
          />
        </FooterView>
      </Container>
  );
};

export default memo(Footer);
