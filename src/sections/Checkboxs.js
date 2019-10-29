import React from 'react';

import MiCheckbox from './../components/MiCheckbox';

const Checkboxs = () =>
  <div>

    <MiCheckbox
               value={true}
               label={'привет мир'}
               onChange={ (e) => console.log(e) }
             />

             <br />

    <MiCheckbox
               label={'ещё раз привет мир'}
               onChange={ (e) => console.log(e) }
             />

  </div>

export default Checkboxs;
