import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JobOneComponent() {
  return (
    <div className="d-flex justify-content-center">
      <Container>
        <Row>
          <Col>
            <h1>Riot Games</h1>
            <br />
            <p>
              Riot games is an international gaming company responsible for
              worldwide popular games such as League of Legends and Valorant.
            </p>
            <p>The main reason I would want to work there is because I've played their games for a few years now and I think they would be a great place to work. Their work environment is a very supportive one which focuses on players the most.</p>
            <p>The Job would require me to learn more than what I know now, but I am definitely willing to laern whatever skillset they would need from me to better suit their desires in what they want.</p>
            <p>If I were to successfully be hired into the company, it would probably be in a backend/database area maybe working with the interfaces of players to give them a visual update or something.</p>
            <p>In terms of weather or not I think I have the skillsets at the current moment I would say no, there's still a lot of backend to learn but I can always learn them and there is always room for imporvement in terms of skills.</p>
            <h3><Link to={'https://www.riotgames.com/en/work-with-us/life-at-riot'} style={{color: 'red'}} target="blank">Link to the Wesite Here</Link></h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
