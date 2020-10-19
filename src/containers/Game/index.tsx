import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { Helmet } from 'react-helmet';
import HeaderWithTitle from '../../components/HeaderWithTitle';
import QuestionListModal from '../../components/QuestionListModal';
import useWindowDimensions from 'hooks/useWindowDimensions';
import PrimaryButton from 'components/buttons/PrimaryButton';
import SecondaryButton from 'components/buttons/SecondaryButton';

const hidenCard = require("../../images/blue_back.png")
const cards = [
  require("../../images/1H.png"),
  require("../../images/2H.png"),
  require("../../images/3H.png"),
  require("../../images/4H.png"),
  require("../../images/5H.png"),
  require("../../images/6H.png"),
  require("../../images/7H.png"),
  require("../../images/8H.png"),
  require("../../images/9H.png"),
  require("../../images/1D.png"),
  require("../../images/2D.png"),
  require("../../images/3D.png"),
  require("../../images/4D.png"),
  require("../../images/5D.png"),
  require("../../images/6D.png"),
  require("../../images/7D.png"),
  require("../../images/8D.png"),
  require("../../images/9D.png"),
  require("../../images/1C.png"),
  require("../../images/2C.png"),
  require("../../images/3C.png"),
  require("../../images/4C.png"),
  require("../../images/5C.png"),
  require("../../images/6C.png"),
  require("../../images/7C.png"),
  require("../../images/8C.png"),
  require("../../images/9C.png"),
  require("../../images/1S.png"),
  require("../../images/2S.png"),
  require("../../images/3S.png"),
  require("../../images/4S.png"),
  require("../../images/5S.png"),
  require("../../images/6S.png"),
  require("../../images/7S.png"),
  require("../../images/8S.png"),
  require("../../images/9S.png"),
];

interface StyledProps {
  size?: number;
  width?: number;
  height?: number;
  marginHorizontal?: number;
  paddingHorizontal?: number;
  paddingRight?: number;
  isCorrect?: boolean;
  isSelected?: boolean;
  isShown?: boolean;
}

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 10px;
`;

const Image = styled.Image<StyledProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  resize-mode: contain;
  align-self: center;
`;

const ThreeCards = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ThreeButtons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const RandomView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonContainer = styled.View`
  width: 300px;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

interface Props {
  title: string;
  canBack?: boolean;
  showMenu?: boolean;
}

const Game: FC<Props> = () => {
  const [card1, setCard1] = useState(hidenCard);
  const [card2, setCard2] = useState(hidenCard);
  const [card3, setCard3] = useState(hidenCard);
  const [card4, setCard4] = useState(hidenCard);
  const [card5, setCard5] = useState(hidenCard);
  const [card6, setCard6] = useState(hidenCard);

  const [list, setList] = useState<number[]>([]);

  const [isShowMenu, setIsShowMenu] = useState(false);
  const onShowMenu = () => {
    setIsShowMenu(true);
  };

  const { width, height } = useWindowDimensions();

  const cardWidth = width < height ? width / 5 : height / 5;
  const cardHeight = cardWidth * 3 / 2

  const randomNumber = (number) =>
    Math.floor(Math.random() * Math.floor(number));

  const random6Cards = () => {
    const MAX_NUMBER = 36;
    let numbers: number[] = [];
    while (numbers.length < 6) {
      const number = randomNumber(MAX_NUMBER);
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    console.log(numbers);
    // showAllCards(numbers);
    setList(numbers);
    // const number1 = randomNumber(MAX_NUMBER);
    // let number2 = randomNumber(MAX_NUMBER);
    // while (number2 === number1) {
    //   number2 = randomNumber(MAX_NUMBER);
    // }
    // let number3 = randomNumber(MAX_NUMBER);
    // while (number3 === number1 || number3 === number2) {
    //   number3 = randomNumber(MAX_NUMBER);
    // }

  };

  const hideAllCards = () => {
    setCard1(hidenCard);
    setCard2(hidenCard);
    setCard3(hidenCard);
    setCard4(hidenCard);
    setCard5(hidenCard);
    setCard6(hidenCard);
  }

  const showAllCards = () => {
    if (list.length != 6) {
      return;
    }
    setCard1(cards[list[0]]);
    setCard2(cards[list[1]]);
    setCard3(cards[list[2]]);
    setCard4(cards[list[3]]);
    setCard5(cards[list[4]]);
    setCard6(cards[list[5]]);
  }

  const showAbove = () => {
    if (list.length != 6) {
      return;
    }
    setCard1(cards[list[0]]);
    setCard2(cards[list[1]]);
    setCard3(cards[list[2]]);
  }

  const showBelow = () => {
    if (list.length != 6) {
      return;
    }
    setCard4(cards[list[3]]);
    setCard5(cards[list[4]]);
    setCard6(cards[list[5]]);
  }

  const showCard = (position) => {
    switch (position) {
      case 0: setCard1(cards[list[0]]); break;
      case 1: setCard2(cards[list[1]]); break;
      case 2: setCard3(cards[list[2]]); break;
      case 3: setCard4(cards[list[3]]); break;
      case 4: setCard5(cards[list[4]]); break;
      case 5: setCard6(cards[list[5]]); break;
      default: break;
    }
  }

  const random = () => {
    hideAllCards();
    random6Cards();
  };

  return (
      <Container>
        <Helmet>
          <title>{'Three Cards'}</title>
        </Helmet>
        {/* <HeaderWithTitle
          title={'Three Cards'}
          canBack={false}
          showMenu={true}
          onShowMenu={() => onShowMenu()}
        /> */}
        <Content>
        <QuestionListModal
          modalVisible={isShowMenu}
          setModalVisible={() => setIsShowMenu(false)}
        />
        <RandomView>
          <SecondaryButton title='Show' onPress={() => showAbove()} />
        </RandomView>
        <ThreeCards>
          <Button onPress={() => showCard(0)}>
            <Image source={card1} width={cardWidth} height={cardHeight} />
          </Button>
          <Button onPress={() => showCard(1)}>
            <Image source={card2} width={cardWidth} height={cardHeight} />
          </Button>
          <Button onPress={() => showCard(2)}>
            <Image source={card3} width={cardWidth} height={cardHeight} />
          </Button>
        </ThreeCards>
        <RandomView>
          <PrimaryButton title='Random' onPress={() => random()} />
        </RandomView>
        <ThreeCards>
          <Button onPress={() => showCard(3)}>
            <Image source={card4} width={cardWidth} height={cardHeight} />
          </Button>
          <Button onPress={() => showCard(4)}>
            <Image source={card5} width={cardWidth} height={cardHeight} />
          </Button>
          <Button onPress={() => showCard(5)}>
            <Image source={card6} width={cardWidth} height={cardHeight} />
          </Button>
        </ThreeCards>
        <RandomView>
          <SecondaryButton title='Show' onPress={() => showBelow()} />
        </RandomView>
        </Content>
      </Container>
  );
};

export default Game;
