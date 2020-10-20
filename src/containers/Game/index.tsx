import React, { FC, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import HistoryModal from "components/HistoryModal";
import useWindowDimensions from "hooks/useWindowDimensions";
import PrimaryButton from "components/buttons/PrimaryButton";
import SecondaryButton from "components/buttons/SecondaryButton";
import { addScore, removeAllScores } from "store/actionTypes/actionType";
import { useDispatch, useSelector } from "react-redux";
import { getAllScores } from "store/selectors/selectors";
import { hidenCard, cards } from "constants/AppConstants";
import { random6Numbers, getSum } from "./GameLogic";
import { Container, Content, RandomView, ThreeCards, Image, Button, Score1, Score2, HistoryView, View, EmptyView } from "./UI";

interface Props {
  title: string;
  canBack?: boolean;
  showMenu?: boolean;
}

const Game: FC<Props> = () => {
  const dispatch = useDispatch();
  const allScores = useSelector(getAllScores);

  const [firstOpen, setFirstOpen] = useState(true);

  const [card1, setCard1] = useState(hidenCard);
  const [card2, setCard2] = useState(hidenCard);
  const [card3, setCard3] = useState(hidenCard);
  const [card4, setCard4] = useState(hidenCard);
  const [card5, setCard5] = useState(hidenCard);
  const [card6, setCard6] = useState(hidenCard);

  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const [list, setList] = useState<number[]>([]);

  const { width, height } = useWindowDimensions();

  const cardWidth = width < height ? width / 5 : height / 5;
  const cardHeight = (cardWidth * 3) / 2;

  useEffect(() => {
    random6Cards();
  }, []);

  const random6Cards = () => {
    setList(random6Numbers());
  };

  const hideAllCards = () => {
    setCard1(hidenCard);
    setCard2(hidenCard);
    setCard3(hidenCard);
    setCard4(hidenCard);
    setCard5(hidenCard);
    setCard6(hidenCard);
  };

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
  };

  const showAbove = () => {
    if (list.length != 6) {
      return;
    }
    setCard1(cards[list[0]]);
    setCard2(cards[list[1]]);
    setCard3(cards[list[2]]);
    showScoreTeam1();
  };

  const showBelow = () => {
    if (list.length != 6) {
      return;
    }
    setCard4(cards[list[3]]);
    setCard5(cards[list[4]]);
    setCard6(cards[list[5]]);
    showScoreTeam2();
  };

  const showCard = (position) => {
    switch (position) {
      case 0:
        setCard1(cards[list[0]]);
        break;
      case 1:
        setCard2(cards[list[1]]);
        break;
      case 2:
        setCard3(cards[list[2]]);
        break;
      case 3:
        setCard4(cards[list[3]]);
        break;
      case 4:
        setCard5(cards[list[4]]);
        break;
      case 5:
        setCard6(cards[list[5]]);
        break;
      default:
        break;
    }
  };

  const random = () => {
    hideAllCards();
    random6Cards();
    setScore1(0);
    setScore2(0);
    setFirstOpen(false);
  };

  const save = () => {
    dispatch(addScore(list));
    random();
  };

  const playAgain = () => {
    random();
  };

  const showScoreTeam1 = () => {
    if (list.length != 6) {
      return;
    }
    const sum = getSum(list[0], list[1], list[2]);
    setScore1(sum);
  };

  const showScoreTeam2 = () => {
    if (list.length != 6) {
      return;
    }
    const sum = getSum(list[3], list[4], list[5]);
    setScore2(sum);
  };

  const [isShowHistory, setIsShowHistory] = useState(false);

  const showHistory = () => {
    setIsShowHistory(true);
  };

  const onReset = () => {
    dispatch(removeAllScores());
  };

  return (
    <Container>
      <Helmet>
        <title>{"Three Cards"}</title>
      </Helmet>
      <Content>
        <HistoryModal
          modalVisible={isShowHistory}
          setModalVisible={() => setIsShowHistory(false)}
          onReset={() => onReset()}
          scores={allScores}
        />
        <RandomView>
          {score1 <= 0 && (
            <SecondaryButton title="Show" onPress={() => showAbove()} />
          )}
          {score1 > 0 && <Score1>{score1}</Score1>}
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
          {firstOpen && (
            <PrimaryButton title="Shuffle" onPress={() => random()} />
          )}
          {!firstOpen && (
            <View>
              <PrimaryButton title="Save & Shuffle" onPress={() => save()} />
              <EmptyView />
              <SecondaryButton title="Shuffle" onPress={() => playAgain()} />
            </View>
          )}
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
          {score2 > 0 && <Score2>{score2}</Score2>}
          {score2 <= 0 && (
            <SecondaryButton title="Show" onPress={() => showBelow()} />
          )}
        </RandomView>
        <HistoryView>
          <PrimaryButton title="History" onPress={() => showHistory()} />
        </HistoryView>
      </Content>
    </Container>
  );
};

export default Game;
