import React from 'react';

class MiCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      ...props,
      value: props.value ? true : false
    };
  }

  render() {
    return (
      <label>
          <input type="checkbox"
                 checked={this.state.value}
                 onChange={
                   ({target:{checked}}) => {
                     this.state.onChange && this.state.onChange(checked);
                     this.setState({value: checked});
                   }
                 }
        />
          { this.state.label }
      </label>
    );
  }
}

export default MiCheckbox;
