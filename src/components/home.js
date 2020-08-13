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
          <h2>Hi, my name is Senad and this is my React Portfolio.
          </h2>
           <break></break> 
           <p> I used to work in many industries, from banking to construction, now I'm trying to learn javascript, so far it's very painful. </p>
        <p>Here you can find my recent projects, links to my social media, and email.</p>
            
          </Segment>
        
        
      </Container>
    );
  }
}
export default Home;
