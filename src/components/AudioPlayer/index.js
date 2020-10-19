import React, { useState, useRef } from 'react';
import Slider from 'react-input-slider';
import styled from 'styled-components/native';
import Colors from  'theme/colors';
import Fonts from 'theme/fonts';
import { IoMdPlay, IoMdPause } from 'react-icons/io';

const Container = styled.View`
  border-bottom-color: ${Colors.DIVIDER};
  border-bottom-width: 1px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled(Fonts.Normal)`
  font-size: 12px;
  color: ${Colors.MAIN_COLOR};
  margin: 4px;
`;

const Button = styled.TouchableOpacity`
  padding: 10px;
`;

const AudioPlayer = ({ audioPath, play }) => {
  const audioRef = useRef();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);
  const [x, setX] = useState(0);

  const handleLoadedData = () => {
    setPlay(play);
    if (play) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const onTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const onPlay = () => {
    if (isPlay) {
      setPlay(false);
      audioRef.current.pause();
    } else {
      setPlay(true);
      audioRef.current.play();
    }
  };

  return (
    <Container>
      {!isPlay && (
        <Button onPress={onPlay}>
          <IoMdPlay color={Colors.MAIN_COLOR} size={20} />
        </Button>
      )}
      {isPlay && (
        <Button onPress={onPlay}>
          <IoMdPause color={Colors.MAIN_COLOR} size={20} />
        </Button>
      )}
      <Text>{`${Math.round(currentTime)}`}</Text>
      <audio
        style={{marginHorizontal: 16, paddingHorizontal: 16}}
        ref={audioRef}
        src={audioPath}
        onLoadedData={handleLoadedData}
        onTimeUpdate={onTimeUpdate}
        onEnded={() => setPlay(false)}
      />
      <Slider
        style={{flex: 1, height: 12, margin: 8}}
        xmin={0}
        xmax={duration}
        axis="x"
        x={currentTime}
        onChange={({ x }) => setX(currentTime)}
      />
      <Text>{`${Math.round(duration)}`}</Text>
    </Container>
  );
};

export default AudioPlayer;
