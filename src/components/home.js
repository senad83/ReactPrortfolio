import React from "react";
import { Container, Segment } from "semantic-ui-react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
          <Segment className="home">
          <h2>This is my React Portfolio</h2>
        <p>Here you can find my recent projects, links to my social media, and email.</p>
          </Segment>
        
        
      </Container>
    );
  }
}
export default Home;
