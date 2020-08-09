import React from "react";
import Project from "./project";
import { Container } from "semantic-ui-react";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
          <Project title="NBA Quiz" image="/fitness-tracker.png" githubUrl="https://github.com/senad83/NBA-Quiz"/>
          <Project title="Note Taker" image="/fitness-tracker.png" githubUrl="https://github.com/senad83/note-taker-"/>
          <Project title="Music Discovery" image="/fitness-tracker.png" githubUrl="https://github.com/kgarden22/musicdiscovery"/>
          <Project title="Feel Good" image="/fitness-tracker.png" githubUrl="https://github.com/senad83/Project2"/>
          <Project title="Weather App" image="/fitness-tracker.png" githubUrl="https://github.com/senad83/weather_app"/>
          <Project title="Fitness Tracker" image="/fitness-tracker.png" githubUrl="https://github.com/senad83/fitness-tracker"/>
      </Container>
    );
  }
}
export default Portfolio;
