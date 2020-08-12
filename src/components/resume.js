import React from "react";
import { Container, Segment } from "semantic-ui-react";


class Resume extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Segment className="resume">
                    <h2>Senad Abdic</h2>
                    <p>Salt Lake City, UT</p>
                    <p>senad.dev83@gmail.com</p>
                    <h1>Education</h1>
                    <h2>Bihac 2009</h2>
                    <p> University of Economics, direction Marketing</p>
                    <h2> Banja Luka 2014</h2>
                    <p>CPA Certificate</p>
                    <h2> Salt Lake City, 2020</h2>
                    <p>Trying to learn Javascript</p>

                    <h2>Work expirience</h2>
                    <p>MKF Sunrise 2008-2010, loan officer</p>
                    <p>Saniteks 2010-2015, accounting</p>
                    <p>Hafar 2015-2016, accounting</p>
                    <p>European Roofing 2016 - present, roofer</p>

                    <h2> Interests/Hobbies</h2>
                    <p>Reading, audio books</p>
                    <p>Sports, soccer and basketball</p>
                    <p>Trying to find a way to have less stress is possible</p>
                </Segment>

            </Container>
        );
    }
}
export default Resume;
