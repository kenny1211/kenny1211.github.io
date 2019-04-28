import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';

const About = () => {
  return (
    <div className="row">
      <div className="col-4 mx-auto">
        <Card
          style={{
            background: 'transparent',
            borderColor: 'transparent',
            marginTop: '20%',
            textAlign: 'center'
          }}
        >
          <CardBody>
            <CardText>
              I have always wanted to build something special. But I never trusted myself to because
              I ditched creativity when I failed to create anything noteworthy in elementary school
              art class. From then on I pursued what I felt I easily understood, mostly math.
              Eventually I ended up with a degree in Finance from Rutgers University, but my need to
              make something was not satisfied through spreadsheets. After some time, I took a leap
              of faith and went back to Rutgers Coding Bootcamp. <br /> Now I can build.
            </CardText>
          </CardBody>
        </Card>
        <h4 style={{ textAlign: 'center' }}>About</h4>
      </div>
    </div>
  );
};

export default About;
