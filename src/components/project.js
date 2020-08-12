import React from "react";
import { Segment, Image } from "semantic-ui-react";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Segment>
        <h2>{this.props.title}</h2>
        <Image src={this.props.image} size="medium" centered/>
        <Image src={this.props.image2} size="medium" centered/>
        <h4><a href={this.props.githubUrl}>Github</a></h4>
        <h4><a href={this.props.herokuUrl}>Heroku</a></h4>
      </Segment>
    );
  }
}
export default Project;
