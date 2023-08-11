import React, { Component } from 'react';

class secureTextbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      isValid: true,
    };
  }

  handleChange = (event) => {
    const input = event.target.value;
    const isValid = /^[a-zA-Z0-9]*$/.test(input); // Alphanumeric characters only
    this.setState({ input, isValid });
  };

  render() {
    const { input, isValid } = this.state;

    return (
      <div>
        <input
          type="text"
          value={input}
          onChange={this.handleChange}
          style={{ borderColor: isValid ? 'green' : 'red' }}
        />
        {!isValid && <p>Please enter only alphanumeric characters.</p>}
      </div>
    );
  }
}

export default secureTextbox;