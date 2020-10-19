import React, { memo } from 'react';
import "./RawHTML.css";

const RawHTML = ({ children }) => {
  return(
    <div
      className='pureHTML'
      dangerouslySetInnerHTML={{ __html: children.replace(/\n/g, '<br />')}} 
    />
  );
}

export default memo(RawHTML);