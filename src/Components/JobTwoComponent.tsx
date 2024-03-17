import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function JobTwoComponent() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
          <h1>Apple</h1>
          <br/>
          <p>With Apple, it's the same kind of stroy with Riot Games, I've just been using at least one of their products since the 7th grade and I think it would be really cool to work for them.</p>
          <p>The job I would look for would be an internship as a sofware engineer, I have almost all the requirements in some way except for a Bachelors Degree in Computer Science from college, which I never finshed so I think I would be immediately rejected. But other then that, C, Python, C++, HTML, CSS, mySQL and JavaScript are right up my and this program's alley</p>
          <p>In terms of what I want a achieve, since it's an iternship it would mainly be the experience of working for a worlrenound company like Apple which coul dhold high regards on resumes. It would also give me a lot of experience in a work environment like Apple that could benefit me in the future.</p>
          <p>As Stated before for the most part there's requirements that I can fulfill but there's also the issue of having a degree that I wouldn't be able to fulfill.</p>
          <h3><Link to={'https://jobs.apple.com/en-us/details/200480063/software-engineering-internships?team=STDNT'}style={{color: "white"}}>Job Link</Link></h3>
          <h3><Link to={'https://www.apple.com'}style={{color: "white"}}>Website link</Link></h3>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

