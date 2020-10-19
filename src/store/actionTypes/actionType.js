export const ADD_SCORE = 'ADD_SCORE';
export const addScore = (score) => ({
  type: ADD_SCORE,
  score,
});

export const REMOVE_ALL_SCORES = 'REMOVE_ALL_SCORES';
export const removeAllScores = () => ({
  type: REMOVE_ALL_SCORES,
});