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
          <Project title="Music Discovery - Project 1" image2 = "/music-discovery2.png" image="/music-discovery.png" githubUrl="https://github.com/kgarden22/musicdiscovery"/>
          <Project title="Feel Good - Project 2" image="/project2.png" githubUrl="https://github.com/senad83/Project2" herokuUrl = "https://safe-bastion-72999.herokuapp.com/"/>
          <Project title="Note Taker" image="/note-taker2.png" githubUrl="https://github.com/senad83/note-taker-" herokuUrl ="https://hidden-escarpment-47262.herokuapp.com/"/>
          <Project title="Weather App" image="/weather.png" image="/weather2.png" githubUrl="https://github.com/senad83/weather_app" herokuUrl="Not available"/>
          <Project title="Fitness Tracker" image="/fitness-tracker.png" githubUrl="https://github.com/senad83/fitness-tracker" herokuUrl = "https://blooming-earth-29444.herokuapp.com/?id=5f2f07205b4b3000176a156c"/>
          <Project title="NBA Quiz" image="/quiz.png" githubUrl="https://github.com/senad83/NBA-Quiz"/>
      </Container>
    );
  }
}
export default Portfolio;
