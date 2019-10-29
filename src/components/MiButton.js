import React from 'react';

const getSizeClass = (size) => {
  switch(size) {
    case 'small': return 'button-s';
    case 'medium': return 'button-m';
    case 'large': return 'button-l';
    default: return 'button-m';
  }
}

const getTypeClass = (size) => {
  switch(size) {
    case 'info': return 'button-info';
    case 'succ': return 'button-succ';
    case 'error': return 'button-error';
    default: return 'button-none';
  }
}

class MiButton extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props
    };

  }

  render() {
    return (
      <button
        className={
          [getSizeClass(this.state.size), getTypeClass(this.state.type)].join(' ')
        }
        onClick={
          (e) => this.state.onClick && this.state.onClick(e)
        }
      >
        { this.state.label || 'no title' }
      </button>
    );
  }
}

export default MiButton;
