import { createSelector } from 'reselect';

export const getAllScores = state => state.data.scores || [];