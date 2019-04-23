import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const About = () => {
  return (
    <div>
      <Card style={{ background: 'transparent' }}>
        <CardBody>
          <CardText>
            I have always wanted to build something special. But I never trusted myself to because I
            ditched creativity when I failed to create anything noteworthy in elementary school art
            class. From then on I pursued what I felt I easily understood, mostly math. Eventually I
            ended up with a degree in Finance from Rutgers University, but my need to make something
            was not satisfied through spreadsheets. After some time, I took a leap of faith and went
            back to Rutgers Coding Bootcamp. Now I can build.
          </CardText>
        </CardBody>
      </Card>
      <h4 style={{ textAlign: 'center' }}>About</h4>
    </div>
  );
};

export default About;
