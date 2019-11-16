import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    dieFaces: ["one", "two", "three", "four", "five", "six"]
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { dieFaces, locked, val, disabled } = this.props;
    let classes = `Die fas fa-dice-${dieFaces[val - 1]} fa-5x `;
    if (locked) classes += "Die-locked";

    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
