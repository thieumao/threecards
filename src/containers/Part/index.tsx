import Screen from '../Screen';
import React, { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Part: FC = () => {
  const { testNumber, partNumber } = useParams();
  console.log('testNumber = ', testNumber);
  console.log('partNumber = ', partNumber);
  
  return (<div />); 
};

export default Part;
