import React from 'react';

import MiButton from './../components/MiButton';

const Checkboxs = () =>
  <div>

    <MiButton
        size={'small'}
        type={'info'}
        label={'привет мир'} />

    <br />

    <MiButton
        size={'medium'}
        type={'succ'}
        label={'ещё раз привет мир'} />

    <br />

    <MiButton
        size={'large'}
        type={'error'}
        label={'ещё раз привет мир'} />

    <br />

    <MiButton
        size={'large'}
        label={'blablalalala blabla blablalalala blabla lalala'} />

    <br />

    <MiButton
        size={'small'}
        type={'error'}
        onClick={ (e) => console.log(e) }
    />

  </div>

export default Checkboxs;
