import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { Helmet } from 'react-helmet';
import HeaderWithTitle from '../../components/HeaderWithTitle';
import { useHistory } from 'react-router-dom';
import QuestionListModal from '../../components/QuestionListModal';

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ListContainer = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

interface Props {
  title: string;
  canBack?: boolean;
  showMenu?: boolean;
}

const Screen: FC<Props> = ({ children, title, canBack, showMenu }) => {
  const history = useHistory();

  const [isShowMenu, setIsShowMenu] = useState(false);
  const onShowMenu = () => {
    setIsShowMenu(true);
  };

  return (
      <Container>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <HeaderWithTitle
          title={title}
          canBack={canBack}
          onBack={() => history.goBack()}
          showMenu={showMenu}
          onShowMenu={() => onShowMenu()}
        />
        <QuestionListModal
          modalVisible={isShowMenu}
          setModalVisible={() => setIsShowMenu(false)}
        />
        <ListContainer>
          {children}
        </ListContainer>
      </Container>
  );
};

Screen.defaultProps = {
  canBack: false,
  showMenu: false,
};

export default Screen;
