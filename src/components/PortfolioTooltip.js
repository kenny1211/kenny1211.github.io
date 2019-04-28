import React, { Component } from 'react';
import { Tooltip } from 'reactstrap';

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
        <span style={{ color: 'black' }} href="#" id="TooltipExample">
          <i class="fas fa-question fa-lg" style={{ marginTop: '2.5%' }} />
        </span>

        <Tooltip
          style={{ background: 'transparent', color: 'black' }}
          trigger="hover"
          placement="bottom"
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
