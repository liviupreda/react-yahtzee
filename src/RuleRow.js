import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  render() {
    const { score, name, doScore } = this.props;
    const undefScore = score === undefined;
    return (
      <tr
        className={`RuleRow RuleRow-${undefScore ? "active" : "disabled"}`}
        onClick={undefScore ? doScore : null}
      >
        <td className="RuleRow-name">{name}</td>
        <td className="RuleRow-score">{score}</td>
      </tr>
    );
  }
}

export default RuleRow;
