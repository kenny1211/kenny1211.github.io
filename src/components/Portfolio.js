import React, { Component } from 'react';
import projects from '../projects.json';
import { Card, CardBody, CardTitle, CardLink } from 'reactstrap';
import PortfolioTooltip from './PortfolioTooltip';

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div>
        <div className="row">
          {projects.map(project => {
            return (
              <div className="col-12" style={{ alignContent: 'center', marginTop: '5%' }}>
                <Card
                  key={project.id}
                  style={{ borderColor: 'transparent', background: 'transparent' }}
                >
                  <span
                    className={project.icon}
                    style={{ display: 'inline-block', width: '100%', textAlign: 'center' }}
                  />
                  <CardBody>
                    <CardLink
                      style={{ color: 'black', textAlign: 'center' }}
                      href={project.link}
                      target="_blank"
                    >
                      <CardTitle>{project.name}</CardTitle>
                    </CardLink>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col-12" style={{ textAlign: 'center' }}>
            <PortfolioTooltip />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
