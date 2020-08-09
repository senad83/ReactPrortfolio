import React from "react";
import { Container, Segment } from "semantic-ui-react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
          <Segment className="contact">
          <h1>Email</h1>
        <h2>senad@email.com</h2>
          </Segment>
       
      </Container>
    );
  }
}
export default Contact;
