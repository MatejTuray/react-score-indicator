import React from "react";
import ReactDOM from "react-dom";
import RangeSvg from "./range";

import { Wrapper } from "./styled";

export default class Score extends React.PureComponent {
  steps = 8;

  render() {
    const { value, maxValue, label } = this.props;
    const stepRange = maxValue / this.steps;
    const numberHighlight = Math.ceil(value / stepRange);

    return (
      <Wrapper>
        <RangeSvg highlited={numberHighlight} />
        <p>
          <span>{label} </span>
          <span>{`${value} / ${maxValue}`}</span>
        </p>
      </Wrapper>
    );
  }
}
