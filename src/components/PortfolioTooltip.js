import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';
import '../App.css';

class PortfolioTooltip extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <span style={{ color: 'black', textAlign: 'center' }} href="#" id="TooltipExample">
          <i className="fas fa-question fa-lg quest-icon" />
        </span>

        <Tooltip
          style={{ background: 'transparent', color: 'black' }}
          trigger="hover"
          placement="top"
          isOpen={this.state.tooltipOpen}
          target="TooltipExample"
          toggle={this.toggle}
        >
          Only Full Stack Applications are featured in my portfolio, my other projects can be viewed
          via Github below.
        </Tooltip>
      </div>
    );
  }
}

export default PortfolioTooltip;
