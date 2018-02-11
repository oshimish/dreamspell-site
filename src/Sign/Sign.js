// Vendor
import React from 'react';
import sign17 from './signs/17y.png';

// Internal

// Setup

/**
 * @class Sign
 * @description Brief description
 */
class Sign extends React.Component {
  // https://goo.gl/g1KBEL
  constructor() {
    super();

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }
  
  /**
   * Just a sample click event
   */
  onClick() {
    console.log(`- onClick event`, this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="sign"
        onClick={this.onClick}>
        <p className="huge">{this.props.kin}</p>
        <img src={sign17} onClick={this.onClick}></img>
      </div>
    );
  }
};

// Enforce required properies or methods
Sign.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default Sign;
