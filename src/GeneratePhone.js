import React, { Component } from "react";

class GeneratePhone extends Component {
  state = {
    phone: "(555) 867-5309"
  };

  randNumbers = length => {
    let text = "";
    const possible = "0123456789";

    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };


  callback = () => {
    navigator.clipboard.writeText(this.state.phone);
  };

  generate = () => {
    const areaCode = this.randNumbers(3);
    const prefix = this.randNumbers(3);
    const lastFour = this.randNumbers(4);
    this.setState(
      {
        phone: `(${areaCode}) ${prefix}-${lastFour}`
      },
      this.callback
    );
    console.log(this.state.phone);
  };

  render() {
    return (
      <div>
        <div className="container" style={this.containerStyles}>
          <h3 className="header">CakeKiller's Phone Number Generator</h3>
          <h2>{this.state.phone}</h2>
          <button onClick={this.generate}>Generate New Phone Number</button>
        </div>
      </div>
    );
  }
}

export default GeneratePhone;
