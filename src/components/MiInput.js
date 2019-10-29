import React from 'react';

const getSizeClass = (size) => {
  switch(size) {
    case 'small': return 'input-s';
    case 'medium': return 'input-m';
    case 'large': return 'input-l';
    default: return 'input-m';
  }
}

const getTypeClass = (size) => {
  switch(size) {
    case 'info': return 'input-info';
    case 'succ': return 'input-succ';
    case 'error': return 'input-error';
    default: return 'input-none';
  }
}

class MiInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props
    };

  }

  render() {
    return (
      <input type="text"
             className={
                [getSizeClass(this.state.size), getTypeClass(this.state.type)].join(' ')
             }
       />
    );
  }
}

export default MiInput;
