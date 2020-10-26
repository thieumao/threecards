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
import { random6Numbers, getSum, isWin } from "./GameLogic";
import {
  Container,
  Content,
  RandomView,
  ThreeCards,
  Image,
  Button,
  Score1,
  Score2,
  HistoryView,
  View,
  EmptyView,
  HorizontalView,
  TotalScore,
  Team,
} from "./UI";

interface Props {
  title: string;
  canBack?: boolean;
  showMenu?: boolean;
}

const Game: FC<Props> = () => {
  const dispatch = useDispatch();
  const allScores = useSelector(getAllScores);

  // state
  const [isShowHistory, setIsShowHistory] = useState(false);

  const [isChanged, setIsChanged] = useState(false);
  const [canSave, setCanSave] = useState(false);

  const [isShownCard1, setIsShownCard1] = useState(false);
  const [isShownCard2, setIsShownCard2] = useState(false);
  const [isShownCard3, setIsShownCard3] = useState(false);
  const [isShownCard4, setIsShownCard4] = useState(false);
  const [isShownCard5, setIsShownCard5] = useState(false);
  const [isShownCard6, setIsShownCard6] = useState(false);

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

  // show / hide
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
    setIsShownCard1(true);
    setCard2(cards[list[1]]);
    setIsShownCard2(true);
    setCard3(cards[list[2]]);
    setIsShownCard3(true);
    setCard4(cards[list[3]]);
    setIsShownCard4(true);
    setCard5(cards[list[4]]);
    setIsShownCard5(true);
    setCard6(cards[list[5]]);
    setIsShownCard6(true);
  };

  const showAbove = () => {
    if (list.length != 6) {
      return;
    }
    setCard1(cards[list[0]]);
    setIsShownCard1(true);
    setCard2(cards[list[1]]);
    setIsShownCard2(true);
    setCard3(cards[list[2]]);
    setIsShownCard3(true);
    showScoreTeam1();
  };

  const showBelow = () => {
    if (list.length != 6) {
      return;
    }
    setCard4(cards[list[3]]);
    setIsShownCard4(true);
    setCard5(cards[list[4]]);
    setIsShownCard5(true);
    setCard6(cards[list[5]]);
    setIsShownCard6(true);
    showScoreTeam2();
  };

  const showCard = (position) => {
    switch (position) {
      case 0:
        setCard1(cards[list[0]]);
        setIsShownCard1(true);
        break;
      case 1:
        setCard2(cards[list[1]]);
        setIsShownCard2(true);
        break;
      case 2:
        setCard3(cards[list[2]]);
        setIsShownCard3(true);
        break;
      case 3:
        setCard4(cards[list[3]]);
        setIsShownCard4(true);
        break;
      case 4:
        setCard5(cards[list[4]]);
        setIsShownCard5(true);
        break;
      case 5:
        setCard6(cards[list[5]]);
        setIsShownCard6(true);
        break;
      default:
        break;
    }
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

  // // logic UI
  // useEffect(() => {
  //   random6Cards();
  // }, []);

  const random6Cards = () => {
    setList(random6Numbers());
  };

  const random = () => {
    hideAllCards();
    random6Cards();
    setScore1(0);
    setScore2(0);
    setIsShownCard1(false);
    setIsShownCard2(false);
    setIsShownCard3(false);
    setIsShownCard4(false);
    setIsShownCard5(false);
    setIsShownCard6(false);
    setCanSave(false);
    setFirstOpen(false);
  };

  const save = () => {
    const isCanSave = isShownCard1 && isShownCard2 && isShownCard3 && isShownCard4 && isShownCard5 && isShownCard6;
    setCanSave(isCanSave);
    if (isCanSave) {
      const changedList = [list[3], list[4], list[5], list[0], list[1], list[2]];
      const newList = isChanged ? changedList : list;
      dispatch(addScore(newList));
      random();
    }
  };

  const change = () => {
    const newValue = !isChanged;
    setIsChanged(newValue);
    random();
  };

  const playAgain = () => {
    random();
  };

  let totalScore1 = 0;
  let totalScore2 = 0;
  for (let s of allScores) {
    if (isWin(s)) {
      totalScore1 += 1;
    } else {
      totalScore2 += 1;
    }
  }

  const isShownTotalScore = width > height * 1.4;
  return (
    <Container>
      <Helmet>
        <title>{"Three Cards"}</title>
      </Helmet>
      <HorizontalView>
        {isShownTotalScore && <TotalScore>{totalScore1}</TotalScore>}
        <Content>
          <HistoryModal
            modalVisible={isShowHistory}
            setModalVisible={() => setIsShowHistory(false)}
            onReset={() => dispatch(removeAllScores())}
            scores={allScores}
          />
          <RandomView>
            <Team>{`Team ${isChanged ? 2 : 1} :`}</Team>
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
                {canSave && <PrimaryButton title="Save" onPress={() => save()} />}
                {canSave && <EmptyView />}
                <SecondaryButton title="Shuffle" onPress={() => playAgain()} />
                <EmptyView />
                <PrimaryButton title="Change" onPress={() => change()} />
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
            <Team>{`Team ${isChanged ? 1 : 2} :`}</Team>
            {score2 > 0 && <Score2>{score2}</Score2>}
            {score2 <= 0 && (
              <SecondaryButton title="Show" onPress={() => showBelow()} />
            )}
          </RandomView>
          <HistoryView>
            <PrimaryButton
              title="History"
              onPress={() => setIsShowHistory(true)}
            />
          </HistoryView>
        </Content>
        {isShownTotalScore && <TotalScore>{totalScore2}</TotalScore>}     
      </HorizontalView>
    </Container>
  );
};

export default Game;
