import React from 'react';
import { Button, Form, FormGroup, Label, Input, Card, CardBody, CardTitle } from 'reactstrap';

const ContactPage = () => {
  const inputStyle = {
    background: 'transparent',
    borderColor: 'transparent',
    borderBottomColor: 'black'
  };
  return (
    <div className="row">
      <div className="col-12 col-md-4 mx-auto">
        <Card className="contact-card">
          <CardTitle style={{ marginBottom: '-1vh', textAlign: 'center' }}>
            <h5>Contact Me</h5>
          </CardTitle>
          <CardBody>
            <Form action="https://formspree.io/knny.nguyen@gmail.com" method="POST">
              <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input style={inputStyle} type="text" name="name" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input style={inputStyle} type="email" name="_replyto" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">Message</Label>
                <Input style={inputStyle} type="textarea" name="message" />
              </FormGroup>
              <FormGroup style={{ textAlign: 'center' }}>
                <Button
                  className="btn-sm"
                  style={{
                    background: 'transparent',
                    color: 'Black',
                    borderColor: 'black'
                  }}
                  type="submit"
                  value="Send"
                >
                  Send
                </Button>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
