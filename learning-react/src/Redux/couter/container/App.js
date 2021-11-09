import React from 'react';
import ButtonIncrement from '../component/ButtonIncrement';
import ButtonDecrement from '../component/ButtonDecrement';
import Result from '../component/result';

const AppCounter = () => {
  return (
    <>
      <Result/>
      <ButtonIncrement/>
      <ButtonDecrement/>
    </>
  )
} 
export default React.memo(AppCounter);